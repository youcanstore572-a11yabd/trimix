// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (USA / EN-US)
// ---------------------------------------------------------------------------
const DOMAIN = 'trimixiptv.plus';
const BRAND_NAME = 'Trimix IPTV';
const SITE_URL = `https://${DOMAIN}`;

// Focus keywords (priority order)
const FOCUS_KEYWORD = 'Trimix IPTV';
const SECONDARY_FOCUS_KEYWORD = 'Trimix IPTV Subscription';
const TERTIARY_FOCUS_KEYWORD = 'IPTV Provider';

// Locale (US English)
const LOCALE = 'en_US';
const LANGUAGE = 'en-US';
const ADDRESS_COUNTRY = 'US';
const CURRENCY = 'USD';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,

  // Focus keywords
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  TERTIARY_FOCUS_KEYWORD,

  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent Keywords (USA)
  PRIMARY_KEYWORDS: [
    'Trimix IPTV',
    'Trimix IPTV Subscription',
    'IPTV Provider',
    'IPTV Subscription',
    'Best IPTV Provider',
    'IPTV Service USA',
    'Premium IPTV',
  ],

  // Secondary & High-Intent Search Terms (USA)
  SECONDARY_KEYWORDS: [
    'Trimix IPTV Subscription',
    'Buy Trimix IPTV',
    'Trimix IPTV Plans',
    'Trimix IPTV Free Trial',
    'Best IPTV Provider in USA',
    '4K IPTV',
    'Live TV Streaming Provider',
    'Sports IPTV Provider',
    'Premium IPTV Subscription',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@trimixiptv.plus', // ⚠️ Replace if different
    phone: '+1 555 000 0000', // ⚠️ Replace with your real number
    whatsapp: '+1 555 000 0000', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://support-tv.online',
    supportHours: '24/7 Customer Support via Email and Live Chat',
  },

  // Social Media (used in Footer / Header)
  // ⚠️ Replace with real profile URLs.
  SOCIALS: {
    twitter: 'https://twitter.com/trimixiptv', // ⚠️ Replace
    instagram: 'https://instagram.com/trimixiptv', // ⚠️ Replace
    facebook: 'https://facebook.com/trimixiptv', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Value Propositions (USA)
  USPS: [
    'Buffer-free 4K and Full HD streaming backed by dedicated high-performance edge servers',
    'Access to 20,000+ live channels including major US networks, premium entertainment, sports, and news',
    'Instant service activation within 5 minutes of subscription approval',
    'Full coverage of NFL, NBA, MLB, NHL, UFC, PPV events, ESPN, Fox, NBC, CBS, ABC, and other premium sports networks',
    'Universal device support: Amazon Firestick, Smart TV, Android, iOS, Apple TV, Roku, and MAG Box',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  const defaultDescription =
    description ||
    `Looking for the best IPTV Provider in the USA? Trimix IPTV delivers 20,000+ live channels, flexible Trimix IPTV Subscription plans, and 4K streaming. Start your free trial today!`;

  const defaultTitle = `${pageName} | ${BRAND_NAME} - Premium IPTV Provider`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'en-US': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Trimix IPTV is a premium IPTV Provider delivering high-definition live television, premium Trimix IPTV Subscription plans, and 4K sports streaming to viewers across the United States.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ['US'],
      availableLanguage: ['English'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: { '@type': 'Country', name: 'United States' },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};