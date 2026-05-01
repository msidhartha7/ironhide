export const DEFAULT_AUTHOR_SLUG = "lookover-team" as const;

export type AuthorSlug = typeof DEFAULT_AUTHOR_SLUG;

export type AuthorProfile = {
  slug: AuthorSlug;
  name: string;
  headline: string;
  shortBio: string;
  bio: string[];
  specialties: string[];
  sameAs: string[];
};

const authors: AuthorProfile[] = [
  {
    slug: DEFAULT_AUTHOR_SLUG,
    name: "Lookover Team",
    headline: "Editorial team for AI agent security, identity, and compliance",
    shortBio:
      "The Lookover Team publishes field notes for engineers, security leaders, and compliance operators building governed AI systems.",
    bio: [
      "The Lookover Team writes about the operational controls behind production AI agents: identity, authorization, audit trails, logging, and compliance evidence.",
      "The team focuses on practical implementation details for SOC 2, HIPAA, EU AI Act, and zero-trust programs, with an emphasis on infrastructure teams that need traceability without slowing product delivery.",
    ],
    specialties: [
      "AI agent audit trails",
      "Identity-first authorization",
      "SOC 2 and regulated logging requirements",
      "EU AI Act operational controls",
    ],
    sameAs: [
      "https://www.linkedin.com/company/lookover-io",
      "https://github.com/privyyio",
      "https://x.com/m_sidhartha07",
    ],
  },
];

export function getAllAuthors() {
  return [...authors];
}

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getDefaultAuthor() {
  return getAuthorBySlug(DEFAULT_AUTHOR_SLUG);
}
