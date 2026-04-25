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
