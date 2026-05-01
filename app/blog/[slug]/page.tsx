import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Post Not Found",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [
      ...post.tags,
      "Lookover",
      "AI agent security",
      "identity management",
      "agentic AI",
    ],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 2);
  const blogPostingSchema = buildBlogPostingSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema(post);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Article header */}
          <BlogHeader post={post} />

          {/* Article body */}
          <div className="mt-10">
            <BlogContent html={post.content} />
          </div>

          {/* CTA block */}
          <BlogCTA />

          {/* Related posts */}
          <RelatedPosts posts={related} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
