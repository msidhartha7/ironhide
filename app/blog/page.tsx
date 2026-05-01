import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog - AI Security, Identity, and Compliance",
  description:
    "Insights on AI agent security, identity management, zero-trust architectures, and compliance for enterprise GenAI infrastructure. Written by the Lookover team.",
  path: "/blog",
  keywords: [
    "AI agent security",
    "identity management",
    "zero trust AI",
    "SOC 2 compliance AI",
    "agentic AI audit trails",
    "AI governance",
    "enterprise AI security",
    "Lookover blog",
  ],
});

export default function BlogListingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Lookover Blog
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Security insights for the{" "}
              <span className="text-blue-600">agentic AI era</span>
            </h1>
            <p className="mt-4 text-lg text-slate-500">
              Deep dives on AI agent identity, authorization, audit trails, and
              compliance - written for security architects and engineering leaders
              building on generative AI.
            </p>
          </div>

          {/* Tag filter strip */}
          {tags.length > 0 && (
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Post grid */}
          {posts.length === 0 ? (
            <div className="mx-auto mt-16 max-w-md text-center">
              <p className="text-slate-500">No posts published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
