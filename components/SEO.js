import Head from "next/head";

export default function SEO({ title, description, keywords, image, url, additionalMeta = [], structuredData }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BeingxBot" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#663BFF" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || "/images/beingxbot-logo.png"} />
      <meta property="og:url" content={url || "https://beingxbot.tech"} />
      <meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical & Icons */}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/images/beingxbot-favicon.png" />
      <link rel="apple-touch-icon" href="/images/beingxbot-touch.png" />

      {/* Additional Meta */}
      {additionalMeta.map((meta, i) => (
        <meta key={i} {...meta} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  );
}
