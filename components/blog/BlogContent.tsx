"use client";

type BlogContentProps = {
  html: string;
};

export function BlogContent({ html }: BlogContentProps) {
  return (
    <div
      className="prose prose-slate prose-lg mx-auto max-w-3xl
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
        prose-h2:mt-12 prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-3
        prose-h3:mt-8 prose-h3:text-xl prose-h3:text-slate-800
        prose-p:leading-relaxed prose-p:text-slate-600
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline
        prose-strong:font-semibold prose-strong:text-slate-800
        prose-ul:text-slate-600 prose-ol:text-slate-600
        prose-li:my-1.5 prose-li:leading-relaxed
        prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:text-slate-800
        prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-100
        prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 prose-blockquote:px-6 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-700
        prose-hr:border-slate-200"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
