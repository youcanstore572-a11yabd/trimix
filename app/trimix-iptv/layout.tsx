// app/trimix-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/trimix-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `${BRAND} | 36,000+ Channels in 4K UHD`
);

const PAGE_DESCRIPTION = clampDescription(
  `Get ${BRAND}. Stream 36,000+ channels and 120,000+ movies in 4K UHD. Free trial first, WhatsApp setup, USD pricing with no lock-in.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    FOCUS_KEYWORD.toLowerCase(),
    'trimix iptv',
    'trimix iptv subscription',
    'trimix iptv service',
    'trimix iptv provider',
    'best trimix iptv',
    'trimix iptv review',
    'trimix iptv price',
    'iptv provider',
    'best iptv provider',
    'iptv subscription',
    'iptv service',
    '4k streaming',
    'iptv setup',
    'iptv free trial',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - 36,000+ live channels in 4K Ultra HD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

const TrimixIptvPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} is a trusted IPTV provider with 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['English'],
          areaServed: ['US'],
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Premium IPTV Provider`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: BRAND, item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `${BRAND} Subscription`,
        sku: 'TRIMIX-IPTV',
        category: 'Streaming Service',
        description: `${BRAND} is a premium IPTV service. Stream 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Guided WhatsApp setup, free trial available, USD pricing with no lock-in contract.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Screen - 3 Months',
            priceCurrency: 'USD',
            price: '29.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 3 month plan on 1 device with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            priceCurrency: 'USD',
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 6 month plan on 1 device with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            priceCurrency: 'USD',
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 12 month plan on 1 device with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 3 Months',
            priceCurrency: 'USD',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 3 month plan on 2 devices with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            priceCurrency: 'USD',
            price: '59.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 6 month plan on 2 devices with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            priceCurrency: 'USD',
            price: '89.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 12 month plan on 2 devices with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 3 Months',
            priceCurrency: 'USD',
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 3 month plan on 3 devices with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 6 Months',
            priceCurrency: 'USD',
            price: '89.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 6 month plan on 3 devices with 36,000+ live channels.`,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            priceCurrency: 'USD',
            price: '139.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: `${BRAND} 12 month plan on 3 devices with 36,000+ live channels.`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} is a premium streaming service that delivers live television channels, movies, and TV shows over your internet connection. Our service offers 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and USD pricing.`,
            },
          },
          {
            '@type': 'Question',
            name: `How much does ${BRAND} cost?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} plans start at USD $29 for 3 months on 1 screen. The 12 month plan costs USD $69 for 1 screen, USD $89 for 2 screens, or USD $139 for 3 screens, and saves up to 49%.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is there a free trial for ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Message us on WhatsApp and we will set you up with a free 24 hour ${BRAND} trial. Test the 4K picture, check the channel lineup, and make sure everything runs smooth on your device before you upgrade to a paid plan.`,
            },
          },
          {
            '@type': 'Question',
            name: `Which devices work with ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} works on Amazon Firestick, Samsung and LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG or Formuler set top boxes. Our team helps you install and configure a player like IPTV Smarters Pro on WhatsApp.`,
            },
          },
          {
            '@type': 'Question',
            name: `Do I need a VPN to use ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No VPN is required. Our ${BRAND} servers are optimized to deliver smooth, buffer free streaming on your home connection.`,
            },
          },
          {
            '@type': 'Question',
            name: `How fast is ${BRAND} setup?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most customers are streaming within 10 minutes. You choose your plan, message us on WhatsApp, and our team walks you through the install step by step until everything is working.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="trimix-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function trimixIptvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <TrimixIptvPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}