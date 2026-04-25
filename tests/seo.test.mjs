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

  const { buildMetadata } = await importCompiledModule("seo.js");
  const metadata = buildMetadata();
  const openGraphImage = metadata.openGraph?.images?.[0];
  const twitterImage = metadata.twitter?.images?.[0];

  assert.equal(
    typeof openGraphImage === "string" ? openGraphImage : openGraphImage?.url,
    "/opengraph-image",
  );
  assert.equal(twitterImage, "/opengraph-image");
});

test("placeholder pages are generated as noindex and keep the correct canonical path", async () => {
  compileSeoModules();

  const { buildPlaceholderPageMetadata } = await importCompiledModule(
    "site-pages.js",
  );
  const metadata = buildPlaceholderPageMetadata("features");

  assert.equal(metadata.alternates?.canonical, "/features");
  assert.equal(metadata.robots?.index, false);
  assert.equal(metadata.robots?.follow, true);
  assert.equal(metadata.openGraph?.url?.pathname, "/features");
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

  assert.deepEqual(paths, ["/", "/audit-in-2-mins", "/blog"]);
  assert.equal(paths.includes("/features"), false);
  assert.equal(paths.includes("/pricing"), false);
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
