export async function fetchSeoPage(slug, domain) {
    console.log(`Fetching SEO page for slug: ${slug} on domain: ${domain} and enterd seosdk.js`);
  const res = await fetch(
    
    `https://seo-cixx.onrender.com/pages/${slug}`,
    {
      headers: {
        "x-api-key": "123456",
        "x-client-domain": domain,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("SEO API failed");

  return res.text();
}
