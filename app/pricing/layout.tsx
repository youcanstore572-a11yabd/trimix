// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS — enforce char limits
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// SEO CONSTANTS
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/pricing`;

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Subscription Pricing & Plans | 4K Live Channels`
);

const PAGE_DESCRIPTION = clampDescription(
  `Save up to 49% on IPTV Subscription plans from $29. 36,000+ live channels, 120,000+ movies, free trial first. 3, 6, or 12 months.`
);

// ---------------------------------------------------------------------------
// METADATA CONFIGURATION
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        alt: `${BRAND} Pricing — 4K IPTV Subscription Plans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    'iptv subscription pricing',
    'iptv subscription plans',
    'iptv provider subscription',
    'iptv provider cost',
    'buy iptv subscription',
    '4k iptv',
    'iptv free trial',
    'iptv firestick',
    'sports iptv provider',
    'smart tv iptv',
    'premium iptv',
    'cheap iptv provider',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS — Organization, Product, FAQ, BreadcrumbList
// ---------------------------------------------------------------------------
const PricingPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Common Digital Delivery Schema Specs
  const digitalDeliveryDetails = {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: CONSTANTS.CURRENCY,
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: ['US'],
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['US'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };

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

      // PRODUCT - Pricing Offers with Digital Delivery
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `${BRAND} IPTV Subscription Plans`,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} offers premium IPTV plans starting at USD $29 with 36,000+ live channels, 120,000+ movies and TV shows in 4K Ultra HD. Setup is guided on WhatsApp and a free trial is available before you pay.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        sku: 'IPTV-PRICING',
        category: 'Streaming Service',
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
            priceCurrency: CONSTANTS.CURRENCY,
            price: '29.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 month ${BRAND} subscription on 1 device with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 month ${BRAND} subscription on 1 device with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 month ${BRAND} subscription on 1 device with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 3 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 month ${BRAND} subscription on 2 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '59.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 month ${BRAND} subscription on 2 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '89.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 month ${BRAND} subscription on 2 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 3 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 month ${BRAND} subscription on 3 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '89.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 month ${BRAND} subscription on 3 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '139.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 month ${BRAND} subscription on 3 devices with 36,000+ live channels and 120,000+ movies and TV shows.`,
            ...digitalDeliveryDetails,
          },
        ],
      },

      // FAQ SECTION
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Which payment methods does ${BRAND} accept?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} accepts all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). Every payment is processed securely via encrypted 256 bit SSL connections.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I upgrade or modify my subscription later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, you can upgrade at any time to add more screens or switch to a longer period. Just message our WhatsApp help desk and we will adjust your account straight away.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Am I tied to a contract or automatic renewal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No, absolutely not. There are no long term contracts and no automatic renewals. Every plan is a prepaid one time payment that stops on its own when the period ends.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What happens when my subscription expires?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We will send you a reminder before your subscription ends. You can renew easily through WhatsApp. If you decide not to renew, the service stops automatically with no further obligation.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer a free trial before I commit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Message us on WhatsApp and we will set you up with a free 24 hour trial so you can test the 4K picture quality and channel lineup on your own device and internet connection. Upgrade to a paid plan only when you are happy.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use the service on multiple devices simultaneously?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, depending on your chosen plan. You can pick 1, 2, or 3 simultaneous screens during checkout to watch in multiple rooms at once. Everyone in the household can watch what they want.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Are there discounts for longer subscriptions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Our 12 month plans offer the highest savings, up to 49% off compared to the shorter terms. That is the best value option for a household that knows they will stick with it.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN to use this IPTV service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No VPN is required. Our servers are optimized to deliver smooth, buffer free streaming on your home connection.`,
            },
          },
        ],
      },

      // BREADCRUMB
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE PRICING LAYOUT
// ---------------------------------------------------------------------------
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <PricingPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}