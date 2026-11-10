'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const YEAR = new Date().getFullYear();

// ===========================================================================
// CURRENCY SYSTEM (USD only — USA targeting)
// ===========================================================================
type CurrencyCode = 'USD';

const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; symbol: string; usdRate: number }
> = {
  USD: { code: 'USD', label: 'USD', symbol: '$', usdRate: 1 },
};

const CURRENCY_ORDER: CurrencyCode[] = ['USD'];

const formatPrice = (usdAmount: number, currency: CurrencyCode): string => {
  const { symbol, usdRate } = CURRENCIES[currency];
  const converted = Math.round(usdAmount * usdRate);
  return `${symbol}${converted.toLocaleString('en-US')}`;
};

// ===========================================================================
// PRICING TIERS
// ===========================================================================
interface PricingTier {
  name: string;
  tag: string;
  years: number;
  credits: number;
  wholesaleUSD: number;
  perYearUSD: number;
  retailMinUSD: number;
  retailMaxUSD: number;
  highlighted: boolean;
  features: string[];
  waMessage: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    tag: '10 Years',
    years: 10,
    credits: 10,
    wholesaleUSD: 299,
    perYearUSD: 30,
    retailMinUSD: 60,
    retailMaxUSD: 120,
    highlighted: false,
    features: [
      '10 reseller credits (10 years)',
      'Full reseller panel access',
      'Instant per customer activation',
      '24/7 WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Payment integration ready',
    ],
    waMessage: `Hi! I want the Starter Reseller package (10 years / $299) from ${BRAND}.`,
  },
  {
    name: 'Growth',
    tag: '20 Years',
    years: 20,
    credits: 20,
    wholesaleUSD: 549,
    perYearUSD: 27,
    retailMinUSD: 60,
    retailMaxUSD: 120,
    highlighted: true,
    features: [
      '20 reseller credits (20 years)',
      'Full reseller panel access',
      'Instant per customer activation',
      'Priority WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'API access included',
    ],
    waMessage: `Hi! I want the Growth Reseller package (20 years / $549) from ${BRAND}.`,
  },
  {
    name: 'Pro',
    tag: '30 Years',
    years: 30,
    credits: 30,
    wholesaleUSD: 749,
    perYearUSD: 25,
    retailMinUSD: 60,
    retailMaxUSD: 120,
    highlighted: false,
    features: [
      '30 reseller credits (30 years)',
      'Full reseller panel access',
      'Instant per customer activation',
      'Dedicated WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'Full API access included',
      'White label branding option',
    ],
    waMessage: `Hi! I want the Pro Reseller package (30 years / $749) from ${BRAND}.`,
  },
];

// ===========================================================================
// FAQS
// ===========================================================================
const faqs = [
  {
    q: 'What exactly is an IPTV reseller panel?',
    a: `A reseller panel is a private dashboard that lets you create and manage IPTV subscriptions for your own customers. You buy credits from ${BRAND} in bulk, then use those credits to activate yearly, monthly, or trial subscriptions for anyone you sell to. You keep the full retail price minus your wholesale cost, and your customers never see the brand behind the scenes.`,
  },
  {
    q: 'How much can I realistically earn as an IPTV reseller?',
    a: `It depends on how many customers you bring in. Customers typically pay between $60 and $120 per year, with $90 being the average. Your wholesale cost per credit starts around $30 per year, so your profit per sale ranges from $30 to $90 depending on your selling price. Sell 10 subscriptions at $90 and you have earned roughly $600 in profit from a $299 investment.`,
  },
  {
    q: 'Do I need technical skills to become a reseller?',
    a: 'No. The reseller panel is designed to be simple. If you can use WhatsApp and a web browser, you can run a reseller business. We also provide onboarding guidance over WhatsApp, so any time you get stuck, our team walks you through it directly.',
  },
  {
    q: 'Do the reseller credits expire?',
    a: 'No. Your credits stay in your account indefinitely. You can activate them at your own pace, whether that means selling several subscriptions in a week or spreading them across months. There is no monthly minimum, no expiration date, and no pressure to sell quickly.',
  },
  {
    q: 'Which currencies can I sell in?',
    a: `You can sell to your customers in any currency you prefer. Your wholesale cost with us is fixed in USD. Your retail price is completely up to you, so you control your margin. All package prices shown above are in USD.`,
  },
  {
    q: 'What kind of support do I get as a reseller?',
    a: `Every reseller, regardless of tier, gets direct WhatsApp support from our team. The Growth plan adds priority response times, and the Pro plan includes a dedicated support channel plus white label setup assistance.`,
  },
];

// ===========================================================================
// STEPS
// ===========================================================================
const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Buy Your Credits',
    description: 'Choose a package and receive your credits instantly. Starter, Growth, and Pro all activate within minutes of payment confirmation.',
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Access Your Panel',
    description: 'Log into your private reseller dashboard. Create subscriptions, generate trial lines, and manage every customer account from one clean interface.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Sell to Customers',
    description: 'Set your own prices and sell yearly, monthly, or trial subscriptions. You keep the full retail amount and only spend credits when you activate a customer.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale Your Profit',
    description: 'Buy more credits at lower per credit prices as your customer base grows. Every new tier improves your margin and increases your recurring income.',
  },
];

// ===========================================================================
// VALUE CARDS
// ===========================================================================
const valueCards = [
  {
    icon: BadgeDollarSign,
    title: 'Low Entry Cost',
    description: 'Start your IPTV reseller business with a single $299 package. No contracts, no monthly fees, no hidden charges. Just buy credits and start selling.',
  },
  {
    icon: Users,
    title: 'Growing Demand',
    description: 'Millions of viewers look for cable alternatives every year. The IPTV reseller market keeps growing with room for new sellers.',
  },
  {
    icon: Wallet,
    title: 'High Margins',
    description: 'Your cost per yearly subscription starts at $25 to $30. Customers happily pay $60 to $120 per year. That is a strong margin on every sale.',
  },
  {
    icon: Server,
    title: 'Real Infrastructure',
    description: 'You resell on our dedicated bare metal servers. No overloaded shared hosting, no downtime during peak hours, no technical issues to explain.',
  },
];

// ===========================================================================
// PANEL FEATURES
// ===========================================================================
const panelFeatures = [
  { icon: LayoutDashboard, label: 'Reseller Dashboard' },
  { icon: Zap, label: 'Instant Activation' },
  { icon: Package, label: 'No Expiry Credits' },
  { icon: Bot, label: 'Trial Generator' },
  { icon: BarChart3, label: 'Sales Tracking' },
  { icon: CreditCard, label: 'Payment Ready' },
  { icon: Globe, label: 'Multi Currency' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: ShieldCheck, label: 'Encrypted Panel' },
  { icon: Rocket, label: 'API Automation' },
];

// ===========================================================================
// PRICING CARD
// ===========================================================================
function PricingCard({ tier, currency }: { tier: PricingTier; currency: CurrencyCode }) {
  const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(tier.waMessage)}`;

  const wholesalePrice = formatPrice(tier.wholesaleUSD, currency);
  const perYearPrice = formatPrice(tier.perYearUSD, currency);
  const retailMin = formatPrice(tier.retailMinUSD, currency);
  const retailMax = formatPrice(tier.retailMaxUSD, currency);

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500 ${
        tier.highlighted
          ? 'bg-gradient-to-br from-[#6934B8] via-[#341766] to-[#6934B8] border-2 border-[#FFC300] shadow-xl lg:-translate-y-4 z-20'
          : 'bg-white border border-[#6934B8]/15 hover:border-[#6934B8] hover:-translate-y-2 hover:shadow-xl'
      }`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border-2 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFC300] text-[#341766] border-[#FFC300]'
              : 'bg-[#6934B8] text-white border-[#6934B8]'
          }`}
        >
          {tier.highlighted && <Sparkles className="w-3 h-3 shrink-0" />}
          {tier.tag}
        </div>
      </div>

      <div className="pt-4">
        <h3
          className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
            tier.highlighted ? 'text-white/90' : 'text-[#6934B8]'
          }`}
        >
          {tier.name}
        </h3>

        <div
          className={`text-2xl font-black uppercase tracking-tight mb-4 ${
            tier.highlighted ? 'text-white' : 'text-[#341766]'
          }`}
        >
          {tier.years} Years
        </div>

        <div className="mb-4">
          <div
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${
              tier.highlighted ? 'text-[#FFC300]' : 'text-[#341766]'
            }`}
          >
            {wholesalePrice}
          </div>
          <div
            className={`text-xs font-bold tracking-wide ${
              tier.highlighted ? 'text-white/80' : 'text-[#341766]/60'
            }`}
          >
            {tier.credits} credits total
          </div>
        </div>

        <div
          className={`text-[11px] font-black uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-full border whitespace-nowrap ${
            tier.highlighted
              ? 'text-[#FFC300] border-[#FFC300]/50 bg-[#FFC300]/10'
              : 'text-[#6934B8] border-[#6934B8]/30 bg-[#6934B8]/10'
          }`}
        >
          {perYearPrice} per year
        </div>

        <div
          className={`rounded-2xl p-4 mb-6 ${
            tier.highlighted
              ? 'bg-[#341766]/50 border border-[#FFC300]/30'
              : 'bg-[#F5F3F9] border border-[#6934B8]/15'
          }`}
        >
          <div
            className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              tier.highlighted ? 'text-[#FFC300]/90' : 'text-[#341766]/60'
            }`}
          >
            Your Profit Potential
          </div>
          <div
            className={`text-xs font-bold mb-1 ${
              tier.highlighted ? 'text-white' : 'text-[#341766]'
            }`}
          >
            Sell at {retailMin} to {retailMax} / year
          </div>
          <div
            className={`text-base font-black uppercase mt-2 ${
              tier.highlighted ? 'text-[#FFC300]' : 'text-[#6934B8]'
            }`}
          >
            Up to {formatPrice((tier.retailMaxUSD - tier.perYearUSD) * tier.years, currency)} total
          </div>
        </div>

        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-xs font-bold ${
                tier.highlighted ? 'text-white' : 'text-[#341766]/85'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-[#FFC300]' : 'text-[#6934B8]'
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFC300] text-[#341766] hover:bg-[#e6b000] shadow-lg'
              : 'bg-[#6934B8] text-white hover:bg-[#341766] shadow-md'
          }`}
        >
          <span>Get This Package</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

// ===========================================================================
// FAQ ITEM
// ===========================================================================
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
        isOpen
          ? 'border-[#FFC300] shadow-xl shadow-[#FFC300]/15'
          : 'border-[#6934B8]/15 hover:border-[#6934B8]'
      } bg-white`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full text-left p-6 md:p-7 flex items-start gap-5"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6934B8] to-[#341766] flex items-center justify-center text-[#FFC300] font-black text-lg shadow-md">
          {num}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-[#341766] text-base md:text-lg uppercase tracking-tight leading-snug mb-1">
            {faq.q}
          </h3>
          {isOpen && (
            <p className="text-[#341766]/85 font-medium leading-relaxed text-sm md:text-base mt-3 pl-4 border-l-4 border-[#6934B8]">
              {faq.a}
            </p>
          )}
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#6934B8] transition-transform duration-300 mt-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}

// ===========================================================================
// MAIN PAGE
// ===========================================================================
export default function ResellerPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#341766]">

      {/* HERO — light */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#6934B8]/10 bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6934B8]/15 blur-[150px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #6934B8 1px, transparent 1px), linear-gradient(to bottom, #6934B8 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-8 shadow-sm border border-[#6934B8]/20">
              <BadgeDollarSign className="w-4 h-4 text-[#FFC300] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                IPTV Reseller Program {YEAR}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-[#341766] mb-6 max-w-4xl mx-auto">
              BECOME AN <br className="hidden sm:block" />
              <span className="text-[#6934B8]">IPTV RESELLER</span> <br className="hidden sm:block" />
              WITH {BRAND.toUpperCase()}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#341766]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
              Start your own IPTV reseller business with a single $299 package. Buy credits in bulk, sell yearly subscriptions at $60 to $120, and earn up to $90 profit per customer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <a
                href="#pricing"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest shadow-lg shadow-[#FFC300]/30 hover:scale-105 hover:bg-[#e6b000] transition-transform whitespace-nowrap"
              >
                See Pricing
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hi! I want to learn more about becoming an IPTV reseller with ${BRAND}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6934B8] border-2 border-[#6934B8] font-black text-sm uppercase tracking-widest hover:bg-[#6934B8] hover:text-white hover:scale-105 transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Talk to Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6934B8]/15 text-[#341766] text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-sm">
                <Zap className="w-3.5 h-3.5 text-[#6934B8] shrink-0" />
                Instant Access
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6934B8]/15 text-[#341766] text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6934B8] shrink-0" />
                No Expiry
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6934B8]/15 text-[#341766] text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-sm">
                <Headphones className="w-3.5 h-3.5 text-[#6934B8] shrink-0" />
                24/7 Support
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE CARDS — light gray */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3F9] w-full">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <TrendingUp className="w-4 h-4 text-[#6934B8] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Why Join Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
              WHY RESELL IPTV <span className="text-[#6934B8]">TODAY</span>?
            </h2>
            <p className="text-base md:text-lg text-[#341766]/70 font-bold leading-relaxed">
              The IPTV reseller market has never been easier to enter. Low upfront costs, massive demand, and full profit control make it one of the most accessible side businesses today.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <FadeInItem
                  key={card.title}
                  className="group bg-white border border-[#6934B8]/15 rounded-3xl p-6 md:p-7 hover:border-[#6934B8] hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/15 group-hover:bg-[#6934B8] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-7 h-7 text-[#6934B8] group-hover:text-[#FFC300] transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#341766] uppercase tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#341766]/75 text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PROFIT MATH — light gray section, white inner card */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#6934B8]/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5">
              <BarChart3 className="w-4 h-4 text-[#6934B8] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                The Real Math
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
              HOW MUCH CAN YOU <span className="text-[#6934B8]">EARN</span>?
            </h2>
            <p className="text-base md:text-lg text-[#341766]/70 font-bold max-w-3xl mx-auto">
              A concrete example. This is what happens when you buy a reseller package and sell to customers at normal retail pricing.
            </p>
          </FadeIn>

          <FadeIn className="bg-white text-[#341766] border-2 border-[#FFC300] rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#341766]/50 mb-3">
                  Starter Package
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#6934B8] tracking-tighter mb-2">
                  {formatPrice(299, currency)}
                </div>
                <div className="text-xs font-bold text-[#341766]/70">
                  10 credits (10 years)
                </div>
              </div>
              <div className="md:border-x-2 border-[#6934B8]/10 md:px-8">
                <div className="text-xs font-black uppercase tracking-widest text-[#341766]/50 mb-3">
                  Sell Per Year At
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#341766] tracking-tighter mb-2">
                  {formatPrice(90, currency)}
                </div>
                <div className="text-xs font-bold text-[#341766]/70">
                  average retail price
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#341766]/50 mb-3">
                  Total Revenue
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#6934B8] tracking-tighter mb-2">
                  {formatPrice(900, currency)}
                </div>
                <div className="text-xs font-bold text-[#341766]/70">
                  from 10 customers
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t-2 border-[#6934B8]/10 mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black uppercase tracking-widest text-[#341766]/60 mb-2">
                    Revenue minus Cost
                  </div>
                  <div className="text-sm font-bold text-[#341766]/80">
                    Net profit from your first 10 customers
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs font-black uppercase tracking-widest text-[#6934B8] mb-1">
                    Your Profit
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-[#6934B8] tracking-tighter">
                    {formatPrice(601, currency)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="text-[#341766]/75 font-bold text-base md:text-lg leading-relaxed">
              Sell at the higher end of the range and profit climbs even further. At $120 per sale, your profit from 10 customers reaches <span className="text-[#6934B8] font-black">{formatPrice(901, currency)}</span>. The Growth and Pro packages lower your per year cost, so your total profit scales with every additional customer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRICING — light */}
      <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24 bg-white">
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5">
            <Package className="w-4 h-4 text-[#6934B8] shrink-0" />
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Reseller Packages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
            CHOOSE YOUR <span className="text-[#6934B8]">PACKAGE</span>
          </h2>
          <p className="text-base md:text-lg text-[#341766]/70 font-bold max-w-3xl mx-auto">
            Every package includes full reseller panel access, instant activation per customer, and 24/7 WhatsApp support. Credits never expire.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center mb-12">
          <div className="inline-flex bg-[#F5F3F9] border border-[#6934B8]/20 rounded-2xl p-1.5 shadow-sm">
            {CURRENCY_ORDER.map((code) => {
              const active = currency === code;
              return (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`cursor-pointer px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    active
                      ? 'bg-[#FFC300] text-[#341766] shadow-md'
                      : 'text-[#6934B8] hover:text-[#341766]'
                  }`}
                  aria-pressed={active}
                >
                  {CURRENCIES[code].label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} currency={currency} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-[#341766]/60 text-sm font-bold">
            Need larger volume? Message our team on WhatsApp for wholesale pricing on 100+ credits.
          </p>
        </FadeIn>
      </section>

      {/* HOW IT WORKS — light gray */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3F9] border-y border-[#6934B8]/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5">
              <Rocket className="w-4 h-4 text-[#6934B8] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
              START IN <span className="text-[#6934B8]">FOUR STEPS</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.number}
                  className="relative bg-white border border-[#6934B8]/15 rounded-3xl p-6 md:p-7 hover:border-[#6934B8] hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6934B8] to-[#341766] flex items-center justify-center text-[#FFC300] font-black text-sm shadow-md border border-[#FFC300]/30">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#6934B8]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#341766] uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#341766]/75 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PANEL FEATURES — white */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6934B8]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC300]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5">
              <LayoutDashboard className="w-4 h-4 text-[#6934B8] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Panel Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
              EVERYTHING IN <span className="text-[#6934B8]">ONE DASHBOARD</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {panelFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={feature.label}
                  className="bg-white border border-[#6934B8]/15 rounded-2xl p-4 flex flex-col items-center text-center hover:border-[#6934B8] transition-colors duration-300 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-[#6934B8] mb-2" />
                  <span className="text-[#341766] font-black text-[11px] md:text-xs uppercase tracking-wide leading-tight">
                    {feature.label}
                  </span>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ — light gray */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3F9] w-full border-t border-[#6934B8]/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-5">
              <MessageCircle className="w-4 h-4 text-[#6934B8] shrink-0" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Reseller FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tighter leading-tight mb-5">
              COMMON <span className="text-[#6934B8]">QUESTIONS</span>
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark purple */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white max-w-5xl mx-auto w-full">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFC300]/60 bg-[#341766] p-8 md:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,195,0,0.15),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#341766] px-5 py-2 rounded-full mb-6 shadow-lg">
                <UserPlus className="w-4 h-4 shrink-0" />
                <span className="font-black text-xs uppercase tracking-widest whitespace-nowrap">
                  Ready to Start
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-5 max-w-3xl mx-auto">
                LAUNCH YOUR RESELLER BUSINESS TODAY
              </h2>

              <p className="text-white/90 font-bold text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Message our team on WhatsApp and we will have your reseller panel active within 10 minutes. Pick your package, log in, and start selling to your first customer the same day.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    `Hi! I want to become a ${BRAND} IPTV reseller. Please help me get started.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6934B8] font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#6934B8] hover:text-white transition-all shadow-xl whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Start on WhatsApp
                </a>
                <Link
                  href="/pricing"
                  className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#e6b000] transition-all shadow-xl whitespace-nowrap"
                >
                  Customer Plans
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}