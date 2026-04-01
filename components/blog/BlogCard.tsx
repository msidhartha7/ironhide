"use client";

import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlogPost, formatDate } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200",
        className
      )}
    >
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="group/title">
          <h2 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover/title:text-blue-700">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="flex-1 text-sm leading-relaxed text-slate-500">
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} min read
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-800"
            aria-label={`Read ${post.title}`}
          >
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
