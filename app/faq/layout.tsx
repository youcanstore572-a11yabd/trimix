// app/faq/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/faq`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `${BRAND} FAQ | Setup, Channels & Billing Help`
);

const PAGE_DESCRIPTION = clampDescription(
  `Answers to the most common questions about ${BRAND}. 4K streaming, Smart TV setup, USD payments, free trial, and 24/7 WhatsApp help.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    `${FOCUS_KEYWORD}`,
    `${FOCUS_KEYWORD} faq`,
    `${FOCUS_KEYWORD} setup help`,
    `${FOCUS_KEYWORD} subscription`,
    'best iptv provider',
    'iptv provider faq',
    'iptv subscription',
    'iptv smart tv setup',
    'iptv firestick setup',
    'iptv payment help',
    'iptv support',
    'iptv setup guide',
    'iptv service',
    'free iptv trial',
    'iptv xtream codes',
    'iptv m3u playlist',
    'iptv 4k streaming',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} FAQ - Help Center and Answers`,
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

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA — Organization, WebPage, ImageObject, Breadcrumb, FAQ
// ---------------------------------------------------------------------------
const FAQPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // BRAND ENTITY
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['English'],
          areaServed: ['US'],
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // WEBPAGE
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
        primaryImageOfPage: { '@id': `${PAGE_URL}/#primaryimage` },
      },

      // PRIMARY IMAGE
      {
        '@type': 'ImageObject',
        '@id': `${PAGE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/structer.webp`,
        contentUrl: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        caption: `${BRAND} FAQ - Help Center and Answers`,
      },

      // BREADCRUMB
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
        ],
      },

      // FAQ PAGE
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is ${BRAND} and how does it work?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} is a premium IPTV streaming service that delivers live television channels, movies, and TV shows over your internet connection. After you pick a plan and complete payment via WhatsApp, our team sends your M3U playlist and Xtream Codes credentials so you can start watching on any supported device in under 10 minutes.`,
            },
          },
          {
            '@type': 'Question',
            name: `How many live channels and on-demand titles does ${BRAND} offer?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} includes 36,000+ live TV channels covering sports, news, entertainment, and international networks, plus an on-demand library of 120,000+ movies and TV shows in 4K Ultra HD where supported.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Which devices are compatible with the service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Almost any modern streaming device: Amazon Firestick and Fire TV, Samsung and LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, plus MAG and Formuler set top boxes. If unsure, message our WhatsApp support team and we will confirm your device before you subscribe.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast does setup take after ordering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most customers are streaming in under 10 minutes. After payment is confirmed, our team messages you on WhatsApp with your login credentials, guides you through installing a player like IPTV Smarters Pro or TiviMate, and confirms your channel list loads correctly.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I test the service before I pay?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Request a free 24-hour trial on WhatsApp and we will set you up so you can test the 4K picture quality, verify the sports and movie lineup, and confirm smooth playback on your device and internet connection. Upgrade to a paid plan only when you are ready.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which payment methods are accepted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We accept Credit Card (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT) through a secure encrypted checkout. All prices are listed in US Dollars (USD) with no hidden fees and no automatic renewals.',
            },
          },
          {
            '@type': 'Question',
            name: 'Am I tied to a contract or auto-renewal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. All plans are prepaid, one-time payments for a fixed term (3, 6, or 12 months). There are no long-term contracts and no automatic charges. When your term ends, the service stops on its own unless you choose to renew.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN to use the service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No VPN is required. Our servers are optimized to deliver smooth, buffer-free streaming on your home connection. If your internet provider applies streaming throttling during peak hours, our support team can help you troubleshoot, and a VPN can be used if needed.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if a channel buffers or freezes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In most cases, buffering is caused by temporary Wi-Fi interference or a full app cache. Restart your router and modem, restart your IPTV app, or switch the stream type between HLS and TS in your player settings. If it persists, contact our 24/7 WhatsApp support team for immediate assistance.',
            },
          },
          {
            '@type': 'Question',
            name: `How do I contact ${BRAND} support?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Message our team directly on WhatsApp for the fastest response, typically within 2 minutes. You can also email ${CONSTANTS.CONTACT?.email || 'support'} for non-urgent questions. Support is available 24 hours a day, 7 days a week.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="faq-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE FAQ LAYOUT
// ---------------------------------------------------------------------------
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <FAQPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}