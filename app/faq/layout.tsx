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

const FAQ_SCHEMA_ITEMS = [
  { q: 'What is IPTV and how is it different from traditional cable TV?', a: 'IPTV stands for Internet Protocol Television. Instead of a coax cable, fibre receiver, or satellite dish from traditional providers, the TV signals are streamed directly over your internet connection. This means no physical cable box is needed. You can watch thousands of channels in Full HD and 4K anywhere with just an internet connection.' },
  { q: 'How fast will I get set up after payment?', a: 'Once you confirm your plan and complete payment, our team handles the setup with you live on WhatsApp. We send your login details, walk you through installing a player like IPTV Smarters Pro, and send the test content, all in the same chat. Most customers are streaming within 10 minutes.' },
  { q: 'Can I watch on multiple TVs or screens at the same time?', a: 'Yes, depending on your plan. You can pick 1, 2, or 3 simultaneous screens during checkout. That means multiple household members can watch different things at the same time without any interruption.' },
  { q: 'How does the free trial work?', a: 'Message us on WhatsApp and we will set you up with a free 24 hour trial so you can test the 4K picture quality, check the sport and movie lineup, and make sure everything runs smooth on your own device and internet connection. Upgrade to a paid plan only when you are happy.' },
  { q: 'Am I locked into a contract or auto-renewal?', a: 'No, absolutely not. We offer prepaid subscriptions for 3, 6, or 12 months. When your period ends, the streaming connection stops automatically. There are never any automatic charges or silent renewals.' },
  { q: 'Can I test the service before I pay?', a: 'Yes, that is exactly how we do things. Contact our WhatsApp support team and we will give you a free 24 hour trial so you can see the picture quality on your own TV before you commit to a subscription.' },
  { q: 'Are ESPN, Fox Sports, NBC Sports, and CBS Sports included?', a: 'Yes. Every channel package includes the complete sports lineup in smooth 60FPS quality. Watch the NFL, NBA, MLB, NHL, UFC, college football, NASCAR, and major fight nights, all included.' },
  { q: 'Do I pay extra for UFC or Boxing PPV events?', a: 'No, all worldwide Pay Per View events are included by default. This covers numbered UFC Main Cards, Championship Boxing, WWE events, AEW, and major MMA events at no additional cost.' },
  { q: 'Do foreign movies and series have English subtitles?', a: 'Over 95% of our complete VOD catalog, more than 120,000 movies and TV shows from Netflix, HBO Max, Disney Plus, Hulu, and cinema releases, includes selectable English subtitles and optional original audio tracks.' },
  { q: 'Does the EPG TV guide and catch up feature work properly?', a: 'Yes. Our interactive EPG TV guide is synced automatically every 6 hours with current programming. For major international channels, a 7 day catch up and replay feature is available.' },
  { q: 'Can I hide unnecessary foreign channel lists?', a: 'Absolutely. You can easily hide country groups in your IPTV player like IPTV Smarters Pro or TiviMate. Our support team can also adjust your account on request so you only receive channels you actually watch.' },
  { q: 'How stable is the picture quality during popular sport events?', a: 'Our servers use dynamic load balancing through dedicated global data centres. Even during peak moments like the Super Bowl, NBA Finals, World Series, or a major UFC title fight, the bitrate stays stable without frame drops.' },
  { q: 'On which TVs and devices can I install IPTV?', a: 'Our service is universally compatible with Smart TVs (Samsung Tizen, LG webOS, Sony Android TV, Google TV), Amazon Fire TV Stick, Google Chromecast with Google TV, Apple TV 4K, Nvidia Shield, MAG boxes, Windows PC, Mac, iPhone, iPad, and Android phones.' },
  { q: 'Which IPTV apps deliver the best viewing experience?', a: 'For Android TV and Fire TV Stick, we recommend IPTV Smarters Pro for the fastest channel zapping, lowest RAM usage, and best 4K performance. For Samsung and LG Smart TVs, IPTV Smarters Pro or IBO Player Pro work best. For Apple TV users, IPTVX or GSE Smart IPTV are the top choices.' },
  { q: 'What minimum internet speed do I need for 4K and 60FPS?', a: 'For Full HD channels we recommend at least 15 to 20 Mbps. For 4K Ultra HD and 60FPS sport streams, 25 to 30 Mbps. A wired Ethernet cable or 5GHz Wi-Fi network always provides the most stable experience.' },
  { q: 'What should I do if a channel buffers or freezes?', a: 'Buffering is caused in 99% of cases by temporary Wi-Fi interference or a full app cache. Restart your router and modem, restart your IPTV app, or switch the stream engine between HLS and TS in the player settings.' },
  { q: 'Do I need technical skills to complete the installation?', a: 'No. Installation takes less than 5 minutes on average, and our team walks you through it on WhatsApp. You download a player app from your device store, enter the login details we send you, and the channels load automatically.' },
  { q: 'Can I use my account while travelling abroad?', a: 'Yes. Our streams are accessible worldwide without geographic restrictions. You can use your account worry free in your holiday home, hotel, or anywhere else during your travels.' },
  { q: 'What secure payment options do you support?', a: 'You can pay safely via Credit Card (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, USDT, Ethereum) through a heavily secured 256 bit SSL connection. All prices are in USD $.' },
  { q: 'Is a VPN required?', a: 'No. A VPN is not required because all our streams run through secure, encrypted connections. If you prefer extra privacy, our streaming servers are 100% compatible with all major VPN providers.' },
  { q: 'How is my personal data protected?', a: 'We respect applicable privacy law, including the CCPA and other US state privacy regulations, plus international data protection standards. We never store viewing history or channel logs, never sell data to third parties, and never retain credit card or bank account numbers on our local servers.' },
  { q: 'What happens if I lose my login credentials?', a: 'No problem. Send a message with your order number or registration email to our WhatsApp customer service team, and our support desk will resend your login details within 5 minutes.' },
  { q: 'Do I receive an invoice or receipt after payment?', a: 'Yes. Immediately after completing the transaction, you will receive an automated digital order confirmation and invoice in your inbox.' },
  { q: 'Are there hidden fees or admin charges?', a: 'No. The prices shown on our pricing page are fully all in. You pay once for your chosen period with no unexpected surcharges or connection fees.' },
];

const FAQPageSchema = () => {
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
      {
        '@type': 'ImageObject',
        '@id': `${PAGE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/structer.webp`,
        contentUrl: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        caption: `${BRAND} FAQ - Help Center and Answers`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: FAQ_SCHEMA_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
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

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <FAQPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}