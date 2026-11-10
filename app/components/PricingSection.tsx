'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
  ShoppingBag,
  ShoppingCart,
  BadgePercent,
  Tag,
} from 'lucide-react';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;
const THIRD_KEYWORD = CONSTANTS.TERTIARY_FOCUS_KEYWORD;

// ---------------------------------------------------------------------------
// Payment Method SVG Icons
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = isDark ? '#341766' : '#FFFFFF';
  const shellBorder = isDark ? 'rgba(255,195,0,0.45)' : 'rgba(105,52,184,0.2)';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill={isDark ? '#FFFFFF' : '#1434CB'} letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#0079C1">Pal</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fontWeight="900" fill="#003399">SEPA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// ANIMATED PRICE COMPONENT
// ---------------------------------------------------------------------------
const AnimatedPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return (
    <span className={`inline-flex items-baseline ${className ?? ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -25, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.7 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 18 }}
          className="inline-block"
        >
          ${value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// ---------------------------------------------------------------------------
// PROMOTION BADGE — multi-colour system
// Each plan gets its own accent so the page doesn't read as "all gold".
// ---------------------------------------------------------------------------
type PromoVariant = 'emerald' | 'sky' | 'gold';

const PromoBadge = ({
  label,
  value,
  variant,
}: {
  label: string;
  value: string;
  variant: PromoVariant;
}) => {
  const styles: Record<
    PromoVariant,
    { bg: string; border: string; text: string; chip: string; chipText: string }
  > = {
    emerald: {
      bg: 'bg-[#E7F7EF]',
      border: 'border-[#0B9B5A]/30',
      text: 'text-[#0B6B45]',
      chip: 'bg-[#0B9B5A]',
      chipText: 'text-white',
    },
    sky: {
      bg: 'bg-[#E7F1FF]',
      border: 'border-[#1F6FEB]/30',
      text: 'text-[#134CA8]',
      chip: 'bg-[#1F6FEB]',
      chipText: 'text-white',
    },
    gold: {
      bg: 'bg-[#FFF6DB]',
      border: 'border-[#FFC300]/50',
      text: 'text-[#7A5600]',
      chip: 'bg-[#FFC300]',
      chipText: 'text-[#341766]',
    },
  };

  const s = styles[variant];

  return (
    <div
      className={`mb-4 w-full flex items-center justify-between gap-2 rounded-2xl ${s.bg} ${s.border} border px-3.5 py-2 shadow-sm`}
    >
      <div className="flex items-center gap-2">
        <Tag className={`w-4 h-4 ${s.text}`} />
        <span className={`text-[10px] font-black uppercase tracking-widest ${s.text}`}>
          {label}
        </span>
      </div>
      <span
        className={`inline-flex items-center gap-1 rounded-full ${s.chip} ${s.chipText} px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow`}
      >
        <BadgePercent className="w-3 h-3" />
        {value}
      </span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // -------------------------------------------------------------------------
  // PRICING TIERS — USD (per your provided table)
  // 1 Device:  3mo $29 | 6mo $39 | 12mo $69  (25% OFF)
  // 2 Devices: 3mo $49 | 6mo $59 | 12mo $89  (33% OFF)
  // 3 Devices: 3mo $69 | 6mo $89 | 12mo $139 (49% OFF)
  // -------------------------------------------------------------------------
  const pricing = {
    1: {
      3:  { total: 29,  mo: (29 / 3).toFixed(2),  discount: null },
      6:  { total: 39,  mo: (39 / 6).toFixed(2),  discount: null },
      12: { total: 69,  mo: (69 / 12).toFixed(2), discount: '25% OFF' },
    },
    2: {
      3:  { total: 49,  mo: (49 / 3).toFixed(2),  discount: null },
      6:  { total: 59,  mo: (59 / 6).toFixed(2),  discount: null },
      12: { total: 89,  mo: (89 / 12).toFixed(2), discount: '33% OFF' },
    },
    3: {
      3:  { total: 69,  mo: (69 / 3).toFixed(2),  discount: null },
      6:  { total: 89,  mo: (89 / 6).toFixed(2),  discount: null },
      12: { total: 139, mo: (139 / 12).toFixed(2), discount: '49% OFF' },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Hi Trimix Team! I would like to order the ${months}-month Trimix Plan for ${devices} ${
      devices > 1 ? 'devices' : 'device'
    } for $${selectedPrice}.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hi Trimix Support! I would like to request a free 24-hour trial to test Trimix, 4K streaming quality, live channels, and sports coverage on my device before subscribing.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#341766] text-[#FFFFFF] overflow-hidden"
    >
      {/* Background decorations — dark purple section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFC300]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#6934B8]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF08_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF08_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#FFC300] bg-[#341766] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#FFC300]/20">
            <Crown className="w-4 h-4 text-[#FFC300]" />
            <span className="text-[#FFC300] font-black text-xs uppercase tracking-widest">
              #1 {FOCUS_KEYWORD} Provider
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
            CHOOSE YOUR <span className="text-[#FFC300]">{FOCUS_KEYWORD.toUpperCase()}</span> PLAN
          </h2>
          <p className="text-base sm:text-lg text-[#FFFFFF]/75 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience a premium {THIRD_KEYWORD} with blazing-fast 4K Ultra HD streaming. Save more with 12-month {SECONDARY_KEYWORD} plans including multi-room, 24/7 WhatsApp support, and instant activation.
          </p>

          {/* Device Switcher */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#FFC300]" />
              <span className="text-xs text-[#FFFFFF]/70 font-black uppercase tracking-widest">
                Select Number of Simultaneous Devices
              </span>
            </div>
            <div className="inline-flex bg-[#2A1252] border border-[#FFFFFF]/10 rounded-2xl p-1.5 shadow-2xl relative">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDevices(d as 1 | 2 | 3)}
                  className={`cursor-pointer px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                    devices === d
                      ? 'bg-[#FFC300] text-[#341766] shadow-lg shadow-[#FFC300]/40 scale-[1.03] ring-2 ring-[#FFC300]/40'
                      : 'text-[#FFFFFF]/70 hover:text-[#FFFFFF] hover:bg-white/5'
                  }`}
                >
                  {d} {d > 1 ? 'Devices' : 'Device'}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

          {/* =========================================================
              CARD 1: 3 MONTHS — STARTER (EMERALD promo)
              ========================================================= */}
          <FadeInItem className="relative bg-[#FFFFFF] text-[#341766] border-2 border-[#6934B8]/20 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#6934B8] hover:shadow-[0_25px_60px_rgba(105,52,184,0.35)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6934B8]/0 via-[#6934B8]/0 to-[#6934B8]/0 group-hover:from-[#6934B8]/5 group-hover:to-[#6934B8]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#6934B8] uppercase tracking-[0.2em]">Starter Plan</h4>
                <MonitorPlay className="w-5 h-5 text-[#6934B8] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#341766] mb-2 tracking-tighter uppercase">3 Months</div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#F5F3F9] border-2 border-[#6934B8]/20 shadow-md transition-all duration-500 group-hover:border-[#6934B8] group-hover:shadow-lg group-hover:scale-[1.05]">
                <span className="text-5xl font-black text-[#341766] tracking-tighter transition-all duration-500 group-hover:text-[#6934B8]">
                  <AnimatedPrice value={currentPricing[3]?.total || 0} />
                </span>
              </div>
              <div className="text-[11px] font-black text-[#6934B8] mb-4 uppercase tracking-widest border border-[#6934B8]/30 self-start px-3 py-1 rounded-full inline-block bg-[#6934B8]/10">
                ${currentPricing[3]?.mo || 0} / Month
              </div>

              {/* Promotion card — emerald variant
              <PromoBadge
                label="Starter Promotion"
                value={currentPricing[3]?.discount ?? 'New Customer'}
                variant="emerald"
              /> */}

              {/* Order button */}
              <button
                onClick={() => handleWhatsAppRedirect(3)}
                className="group/btn cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_15px_40px_rgba(255,195,0,0.55)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/50 mb-4"
              >
                <ShoppingBag className="w-4 h-4 shrink-0 transition-transform group-hover/btn:-rotate-6" />
                <span>Order 3 Months</span>
              </button>

              {/* Package image under the button — object-contain so image is not cropped */}
              <div className="mb-5 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#6934B8]/15 bg-white shadow-sm group-hover:border-[#6934B8]/40 transition-colors">
                <Image
                  src="/img/packages/3-months.webp"
                  alt="Trimix IPTV 3-month subscription package preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>

              <div className="mb-6 pt-3 border-t border-[#6934B8]/10">
                <div className="flex items-center justify-between text-[10px] font-black text-[#341766]/60 uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Premium Sports',
                  '20,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze Global Edge Servers',
                  'Smart TV, Firestick, Apple TV, iOS, Android',
                  '24/7 Support via WhatsApp',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#341766]/80 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#6934B8] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#F5F3F9] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#6934B8]/10 mt-auto">
                <Zap className="w-4 h-4 text-[#6934B8] shrink-0" />
                <span className="text-[11px] font-black text-[#341766] uppercase tracking-wider">
                  Instant Activation • 99.9% Server Uptime
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* =========================================================
              CARD 2: 12 MONTHS — VIP (GOLD promo)
              ========================================================= */}
          <FadeInItem className="relative bg-[#6934B8] border-2 border-[#FFC300] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,195,0,0.3)] z-20 group transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,195,0,0.55)] hover:-translate-y-6">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
              <div className="bg-[#FFC300] text-[#341766] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#341766]">
                <Flame className="w-3.5 h-3.5 fill-current text-[#341766]" /> Bestseller {FOCUS_KEYWORD}
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFFFFF]/0 via-[#FFFFFF]/0 to-[#FFFFFF]/0 group-hover:from-[#FFFFFF]/5 group-hover:to-[#FFFFFF]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#FFC300] uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#FFC300]" /> Ultimate VIP
                </h4>
                <Sparkles className="w-4 h-4 text-[#FFC300] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>

              <div className="mb-2 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#341766] text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                <Flame className="w-3 h-3 fill-current" /> Maximum Discount
              </div>

              <div className="text-3xl font-black text-[#FFC300] mb-2 tracking-tighter uppercase">
                12 Months
              </div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#341766] border-2 border-[#FFC300]/40 shadow-md transition-all duration-500 group-hover:border-[#FFC300] group-hover:shadow-[0_0_30px_rgba(255,195,0,0.5)] group-hover:scale-[1.05]">
                <span className="text-6xl font-black text-[#FFC300] tracking-tighter drop-shadow-[0_0_20px_rgba(255,195,0,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,195,0,0.8)]">
                  <AnimatedPrice value={currentPricing[12]?.total || 0} />
                </span>
              </div>

              <div className="text-[11px] font-black text-[#341766] mb-4 uppercase tracking-widest border border-[#FFC300] self-start px-4 py-1.5 rounded-full inline-block bg-[#FFC300] shadow-sm">
                BEST PRICE: ${currentPricing[12]?.mo || 0} / Month
              </div>

              {/* Promotion card — gold variant */}
              <PromoBadge
                label="VIP Promotion"
                value={currentPricing[12]?.discount ?? 'VIP Deal'}
                variant="gold"
              />

              <button
                onClick={() => handleWhatsAppRedirect(12)}
                className="group/btn cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-5 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_15px_45px_rgba(255,195,0,0.65)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/60 mb-4"
              >
                <ShoppingBag className="w-4 h-4 shrink-0 transition-transform group-hover/btn:-rotate-6" />
                <span>Get 12 Months VIP</span>
              </button>

              {/* Package image under the button — object-contain so image is not cropped */}
              <div className="mb-5 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#FFC300]/40 bg-white shadow-md group-hover:border-[#FFC300] transition-colors">
                <Image
                  src="/img/packages/12-months.webp"
                  alt="Trimix IPTV 12-month VIP subscription package preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>

              <div className="mb-6 pt-3 border-t border-[#FFC300]/30">
                <div className="flex items-center justify-between text-[10px] font-black text-[#FFC300] uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3 text-[#FFC300]" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  'Ultra HD 4K & Full HD 60FPS Quality',
                  '20,000+ Premium Live Channels',
                  '120,000+ Movies & TV Shows (New Titles Daily)',
                  'NFL, NBA, UFC, Boxing & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Dedicated VIP High-Speed Server Line',
                  'Smart TV, Firestick, Apple TV, iOS, Android, MAG',
                  '24/7 VIP Priority Support via WhatsApp',
                ].map((feature, idx) => (
                  <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                    <div className="bg-[#FFC300]/20 p-0.5 rounded-full border border-[#FFC300]/50">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC300] flex-shrink-0" />
                    </div>
                    <span className="text-[#FFFFFF]">{feature}</span>
                    {idx === 4 && (
                      <span className="bg-[#341766] text-[#FFC300] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#FFC300]/50">
                        All PPVs
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#341766]/40 border border-[#FFC300]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#341766]/60 mt-auto">
                <Crown className="w-4 h-4 text-[#FFC300] shrink-0" />
                <span className="text-[11px] font-black text-[#FFC300] uppercase tracking-wider">
                  Includes Dedicated VIP Server Line
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* =========================================================
              CARD 3: 6 MONTHS — PREMIUM (SKY promo)
              ========================================================= */}
          <FadeInItem className="relative bg-[#FFFFFF] text-[#341766] border-2 border-[#FFC300] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(255,195,0,0.35)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(105,52,184,0.08),_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#6934B8] uppercase tracking-[0.2em]">Premium Plan</h4>
                <MonitorPlay className="w-5 h-5 text-[#6934B8] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#341766] mb-2 tracking-tighter uppercase">6 Months</div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#F5F3F9] border-2 border-[#FFC300]/40 shadow-md transition-all duration-500 group-hover:border-[#FFC300] group-hover:shadow-[0_0_30px_rgba(255,195,0,0.5)] group-hover:scale-[1.05]">
                <span className="text-5xl font-black text-[#6934B8] tracking-tighter transition-all duration-500 group-hover:text-[#341766]">
                  <AnimatedPrice value={currentPricing[6]?.total || 0} />
                </span>
              </div>
              <div className="text-[11px] font-black text-[#6934B8] mb-4 uppercase tracking-widest border border-[#6934B8]/30 self-start px-3 py-1 rounded-full inline-block bg-[#6934B8]/10">
                ${currentPricing[6]?.mo || 0} / Month
              </div>

              {/* Promotion card — sky variant */}
              {/* <PromoBadge
                label="Premium Promotion"
                value={currentPricing[6]?.discount ?? 'Popular'}
                variant="sky"
              /> */}

              <button
                onClick={() => handleWhatsAppRedirect(6)}
                className="group/btn cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_15px_40px_rgba(255,195,0,0.55)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/50 mb-4"
              >
                <ShoppingBag className="w-4 h-4 shrink-0 transition-transform group-hover/btn:-rotate-6" />
                <span>Order 6 Months</span>
              </button>

              {/* Package image under the button — object-contain so image is not cropped */}
              <div className="mb-5 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#6934B8]/15 bg-white shadow-sm group-hover:border-[#6934B8]/40 transition-colors">
                <Image
                  src="/img/packages/6-months.webp"
                  alt="Trimix IPTV 6-month premium subscription package preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>

              <div className="mb-6 pt-3 border-t border-[#6934B8]/10">
                <div className="flex items-center justify-between text-[10px] font-black text-[#341766]/60 uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3 text-[#6934B8]" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Premium Sports',
                  '20,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze Global Edge Servers',
                  'Smart TV, Firestick, iOS, Android, Shield',
                  '24/7 Support via WhatsApp',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#341766]/80 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#6934B8] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#F5F3F9] border border-[#6934B8]/15 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#6934B8]/10 mt-auto">
                <Zap className="w-4 h-4 text-[#6934B8] shrink-0" />
                <span className="text-[11px] font-black text-[#341766] uppercase tracking-wider">
                  Instant Activation • 99.9% Server Uptime
                </span>
              </div>
            </div>
          </FadeInItem>

        </FadeInStagger>

        {/* Free Trial Banner */}
        <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
          <div className="bg-[#2A1252] border border-[#FFC300]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#FFC300] transition-all duration-500">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFC300]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#FFC300]/10 border border-[#FFC300]/40 p-3 rounded-xl text-[#FFC300] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#FFC300]" />
                  <h4 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                    Free 24-Hour Trial
                  </h4>
                </div>
                <p className="text-xs text-[#FFFFFF]/75 font-medium">
                  Test {FOCUS_KEYWORD} with no commitment on your TV or smartphone. Our support team guides you through the simple setup directly via WhatsApp.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <button
                onClick={handleFreeTrialRedirect}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_10px_30px_rgba(255,195,0,0.55)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/50"
              >
                <ShoppingCart className="w-4 h-4 shrink-0" />
                <span>Try Free Now</span>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}