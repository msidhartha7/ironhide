import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllAuthors, getAuthorBySlug } from "@/lib/authors";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { buildAuthorSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return buildMetadata({
      title: "Author Not Found",
      description: "This author profile could not be found.",
      path: `/authors/${slug}`,
    });
  }

  return buildMetadata({
    title: author.name,
    description: author.shortBio,
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorSchema = buildAuthorSchema(author);
  const authoredPosts = getAllPosts().filter((post) => post.author.slug === author.slug);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd data={authorSchema} />
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8 py-12 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.5)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Author
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {author.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {author.headline}
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                What this team covers
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                {author.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                Focus areas
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {author.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  About Lookover
                </Link>
                <Link
                  href="/audit-in-2-mins"
                  className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  See the audit trail quickstart
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Published posts
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {authoredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {post.author.role}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Read the article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
