interface SEOProps {
  title: string;
  description: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  type = "website",
}: SEOProps) {
  const pageTitle = `${title} | Proxio Solutions`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
