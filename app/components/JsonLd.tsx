// Renders JSON-LD as a plain <script> so it is present in the server HTML.
// next/script only injects non-JS types on the client, which crawlers reading
// the raw HTML never see.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
