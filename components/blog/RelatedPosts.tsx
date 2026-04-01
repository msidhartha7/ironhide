"use client";

import { BlogCard } from "./BlogCard";
import { type BlogPost } from "@/lib/blog";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-slate-200 pt-12">
      <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900">
        Related posts
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
