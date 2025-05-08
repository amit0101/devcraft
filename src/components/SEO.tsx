import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, any>;
}

const defaultProps: Required<Omit<SEOProps, 'structuredData'>> = {
  title: 'AI Fusion Labs - Custom AI Solutions for Enterprise',
  description: 'Transform your business with cutting-edge AI solutions. We specialize in custom AI development, machine learning, and data analytics for healthcare, finance, retail, and more.',
  keywords: [
    'AI solutions',
    'machine learning',
    'artificial intelligence',
    'enterprise AI',
    'custom AI development',
    'healthcare AI',
    'finance AI',
    'retail AI',
    'data analytics',
    'AI consulting'
  ],
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

export default function SEO({
  title = defaultProps.title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  ogImage = defaultProps.ogImage,
  ogType = defaultProps.ogType,
  twitterCard = defaultProps.twitterCard,
  structuredData
}: SEOProps) {
  const siteUrl = 'https://aifusionlabs.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="AI Fusion Labs" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Structured Data */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AI Fusion Labs',
            url: siteUrl,
            logo: `${siteUrl}/images/logo.png`,
            description: description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 AI Street',
              addressLocality: 'Tech City',
              addressRegion: 'TC',
              postalCode: '12345',
              addressCountry: 'US'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-123-4567',
              contactType: 'customer service',
              email: 'contact@aifusionlabs.com'
            },
            sameAs: [
              'https://linkedin.com/company/aifusionlabs',
              'https://twitter.com/aifusionlabs',
              'https://github.com/aifusionlabs'
            ]
          })}
        </script>
      )}
    </Helmet>
  );
} 