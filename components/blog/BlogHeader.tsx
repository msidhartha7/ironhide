"use client";

import { Clock, Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { type BlogPost, formatDate } from "@/lib/blog";

type BlogHeaderProps = {
  post: BlogPost;
};

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-700"
      >
        <ChevronLeft className="h-4 w-4" />
        All posts
      </Link>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mt-4 text-lg leading-relaxed text-slate-500">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-slate-200 pb-6">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Author
          </span>
          <span className="mt-0.5 text-sm font-medium text-slate-700">
            {post.author.name}
          </span>
          <span className="text-xs text-slate-400">{post.author.role}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Published
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-700">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Read time
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-700">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {post.readTime} min read
          </span>
        </div>
      </div>
    </div>
  );
}
