import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const outDir = path.join(os.tmpdir(), "ironhide-seo-tests");

function compileSeoModules() {
  mkdirSync(outDir, { recursive: true });

  execFileSync(
    "pnpm",
    [
      "exec",
      "tsc",
      "--outDir",
      outDir,
      "--module",
      "nodenext",
      "--target",
      "es2020",
      "--moduleResolution",
      "nodenext",
      "--skipLibCheck",
      "--esModuleInterop",
      "lib/authors.ts",
      "lib/seo.ts",
      "lib/site-pages.ts",
      "lib/schema.ts",
      "lib/blog.ts",
    ],
    {
      cwd: process.cwd(),
      stdio: "pipe",
    },
  );
}

async function importCompiledModule(modulePath) {
  return import(pathToFileURL(path.join(outDir, modulePath)).href);
}

test("default metadata uses the shared social image", async () => {
  compileSeoModules();

  const { buildMetadata, defaultTitle, defaultDescription, defaultKeywords } =
    await importCompiledModule("seo.js");
  const metadata = buildMetadata();
  const openGraphImage = metadata.openGraph?.images?.[0];
  const twitterImage = metadata.twitter?.images?.[0];

  assert.equal(
    typeof openGraphImage === "string" ? openGraphImage : openGraphImage?.url,
    "/opengraph-image",
  );
  assert.equal(twitterImage, "/opengraph-image");
  assert.equal(
    defaultTitle,
    "Lookover | AI Agent Audit Trails, Identity, and Compliance",
  );
  assert.equal(
    defaultDescription,
    "Lookover gives AI teams audit-ready logs, per-agent identity, and compliance evidence for SOC 2, HIPAA, and EU AI Act workflows.",
  );
  assert.ok(defaultKeywords.length <= 8);
  assert.equal(defaultKeywords.includes("AI agent audit trails"), true);
});

test("placeholder pages are generated as noindex and keep the correct canonical path", async () => {
  compileSeoModules();

  const { buildPlaceholderPageMetadata } = await importCompiledModule(
    "site-pages.js",
  );
  const metadata = buildPlaceholderPageMetadata("careers");

  assert.equal(metadata.alternates?.canonical, "/careers");
  assert.equal(metadata.robots?.index, false);
  assert.equal(metadata.robots?.follow, true);
  assert.equal(metadata.openGraph?.url?.pathname, "/careers");
});

test("placeholder route params resolve correctly from promised params", async () => {
  compileSeoModules();

  const { resolveSlug } = await importCompiledModule("site-pages.js");
  const slug = await resolveSlug(Promise.resolve({ slug: "pricing" }));

  assert.equal(slug, "pricing");
});

test("sitemap static paths exclude placeholder pages", async () => {
  compileSeoModules();

  const { getIndexableStaticPaths } = await importCompiledModule(
    "site-pages.js",
  );
  const paths = getIndexableStaticPaths();

  assert.deepEqual(paths, [
    "/",
    "/about",
    "/audit-in-2-mins",
    "/blog",
    "/contact",
    "/features",
    "/integrations",
    "/pricing",
    "/solutions/ai-agent-audit-trails",
    "/solutions/eu-ai-act-logging",
    "/solutions/hipaa-audit-logs-for-ai",
    "/solutions/soc-2-for-ai-agents",
  ]);
  assert.equal(paths.includes("/careers"), false);
  assert.equal(paths.includes("/legal"), false);
});

test("organization schema includes the canonical site identity", async () => {
  compileSeoModules();

  const { buildOrganizationSchema } = await importCompiledModule("schema.js");
  const schema = buildOrganizationSchema();

  assert.equal(schema["@type"], "Organization");
  assert.equal(schema.name, "Lookover");
  assert.equal(schema.url, "https://lookover.io");
  assert.equal(schema.logo, "https://lookover.io/logo.svg");
  assert.equal(Array.isArray(schema.sameAs), true);
});

test("blog posting schema uses blog metadata and landing page intent", async () => {
  compileSeoModules();

  const { getPostBySlug } = await importCompiledModule("blog.js");
  const { buildBlogPostingSchema } = await importCompiledModule("schema.js");
  const post = getPostBySlug("eu-ai-act-high-risk-classification");
  const schema = buildBlogPostingSchema(post);

  assert.equal(schema["@type"], "BlogPosting");
  assert.equal(
    schema.mainEntityOfPage,
    "https://lookover.io/blog/eu-ai-act-high-risk-classification",
  );
  assert.equal(schema.author.name, "Lookover Team");
  assert.equal(
    schema.image,
    "https://lookover.io/blog/eu-ai-act-high-risk-classification.png",
  );
});

test("breadcrumb schema matches the blog page hierarchy", async () => {
  compileSeoModules();

  const { getPostBySlug } = await importCompiledModule("blog.js");
  const { buildBreadcrumbSchema } = await importCompiledModule("schema.js");
  const post = getPostBySlug("why-every-ai-agent-needs-an-identity");
  const schema = buildBreadcrumbSchema(post);
  const items = schema.itemListElement;

  assert.equal(schema["@type"], "BreadcrumbList");
  assert.equal(items.length, 3);
  assert.equal(items[0].item, "https://lookover.io/");
  assert.equal(items[1].item, "https://lookover.io/blog");
  assert.equal(
    items[2].item,
    "https://lookover.io/blog/why-every-ai-agent-needs-an-identity",
  );
});

test("real trust pages are included in the indexable static paths", async () => {
  compileSeoModules();

  const { getIndexableStaticPaths } = await importCompiledModule(
    "site-pages.js",
  );
  const paths = getIndexableStaticPaths();

  assert.equal(paths.includes("/about"), true);
  assert.equal(paths.includes("/contact"), true);
});

test("commercial landing pages are no longer placeholder routes", async () => {
  compileSeoModules();

  const { PLACEHOLDER_PAGES } = await importCompiledModule("site-pages.js");

  assert.equal("features" in PLACEHOLDER_PAGES, false);
  assert.equal("integrations" in PLACEHOLDER_PAGES, false);
  assert.equal("pricing" in PLACEHOLDER_PAGES, false);
});

test("all blog posts use the normalized Lookover author identity", async () => {
  compileSeoModules();

  const { getAllPosts } = await importCompiledModule("blog.js");
  const posts = getAllPosts();

  for (const post of posts) {
    assert.equal(post.author.name, "Lookover Team");
    assert.equal(post.author.slug, "lookover-team");
  }
});

test("supporting content exists for the three target clusters", async () => {
  compileSeoModules();

  const { getAllPosts } = await importCompiledModule("blog.js");
  const posts = getAllPosts();
  const slugs = posts.map((post) => post.slug);

  assert.equal(posts.length >= 8, true);
  assert.equal(slugs.includes("ai-agent-audit-trail-implementation-guide"), true);
  assert.equal(slugs.includes("shared-service-accounts-vs-ai-agent-identity"), true);
  assert.equal(slugs.includes("soc-2-readiness-checklist-for-ai-agents"), true);
  assert.equal(slugs.includes("hipaa-audit-log-template-for-ai-agents"), true);
});

test("compliance posts include primary sources and cluster links", async () => {
  compileSeoModules();

  const { getPostBySlug } = await importCompiledModule("blog.js");

  const expectations = [
    {
      slug: "eu-ai-act-high-risk-classification",
      source: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      internal: "/blog/why-every-ai-agent-needs-an-identity",
    },
    {
      slug: "why-every-ai-agent-needs-an-identity",
      source: "https://doi.org/10.6028/NIST.AI.100-1",
      internal: "/blog/audit-trails-for-ai-agents-what-soc2-actually-requires",
    },
    {
      slug: "audit-trails-for-ai-agents-what-soc2-actually-requires",
      source:
        "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services",
      internal: "/blog/zero-trust-for-ai-agents-beyond-the-buzzword",
    },
    {
      slug: "zero-trust-for-ai-agents-beyond-the-buzzword",
      source: "https://csrc.nist.gov/pubs/sp/800/207/final",
      internal: "/blog/why-every-ai-agent-needs-an-identity",
    },
  ];

  for (const expectation of expectations) {
    const post = getPostBySlug(expectation.slug);

    assert.ok(post, `expected post ${expectation.slug} to exist`);
    assert.match(post.content, new RegExp(expectation.source.replaceAll("/", "\\/")));
    assert.match(post.content, /\/audit-in-2-mins/);
    assert.match(
      post.content,
      new RegExp(expectation.internal.replaceAll("/", "\\/")),
    );
  }
});

test("supporting posts link into the new solution pages", async () => {
  compileSeoModules();

  const { getPostBySlug } = await importCompiledModule("blog.js");

  const expectations = [
    {
      slug: "ai-agent-audit-trail-implementation-guide",
      target: "/solutions/ai-agent-audit-trails",
    },
    {
      slug: "shared-service-accounts-vs-ai-agent-identity",
      target: "/features",
    },
    {
      slug: "soc-2-readiness-checklist-for-ai-agents",
      target: "/solutions/soc-2-for-ai-agents",
    },
    {
      slug: "hipaa-audit-log-template-for-ai-agents",
      target: "/solutions/hipaa-audit-logs-for-ai",
    },
  ];

  for (const expectation of expectations) {
    const post = getPostBySlug(expectation.slug);

    assert.ok(post, `expected post ${expectation.slug} to exist`);
    assert.match(
      post.content,
      new RegExp(expectation.target.replaceAll("/", "\\/")),
    );
  }
});
