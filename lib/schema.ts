import type { BlogPost } from "./blog";
import type { AuthorProfile } from "./authors";
import { getAuthorBySlug } from "./authors";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";
const siteName = "Lookover";
const defaultSocialImage = new URL("/opengraph-image", siteUrl).toString();

function toAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function getAuthorUrl(slug: string) {
  return toAbsoluteUrl(`/authors/${slug}`);
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: toAbsoluteUrl("/logo.svg"),
    sameAs: [
      "https://www.linkedin.com/company/lookover-io",
      "https://github.com/privyyio",
      "https://x.com/m_sidhartha07",
    ],
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  const image = post.coverImage ? toAbsoluteUrl(post.coverImage) : defaultSocialImage;
  const authorProfile = getAuthorBySlug(post.author.slug);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: getAuthorUrl(post.author.slug),
      sameAs: authorProfile?.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/logo.svg"),
      },
    },
    image,
    mainEntityOfPage: toAbsoluteUrl(`/blog/${post.slug}`),
  };
}

export function buildAuthorSchema(author: AuthorProfile) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: author.name,
    description: author.shortBio,
    url: getAuthorUrl(author.slug),
    sameAs: author.sameAs,
  };
}

export function buildBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: toAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: toAbsoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: toAbsoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };
}
