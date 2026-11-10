'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import {
  PlayCircle,
  UserCheck,
  BookOpen,
  Star,
  ShieldCheck,
  Zap,
  Download,
  CreditCard,
  CheckCircle2,
  MonitorSmartphone,
  Tv2,
  Cpu,
  ArrowRight,
  Lock,
  ThumbsUp,
  Trophy,
  Medal,
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
// import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

/* =========================================================
   TRIMIX IPTV — LIGHT THEME BRAND SYSTEM
   Primary Purple : #6934B8
   Premium Gold   : #FFC300
   White          : #FFFFFF
   Light Gray     : #F5F3F9
   Dark Purple    : #341766
   ========================================================= */

const LoadingSpinner = () => (
  <div className="min-h-[600px] flex items-center justify-center bg-white">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#6934B8] border-t-transparent" />
  </div>
);

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <LoadingSpinner />,
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#F5F3F9] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#F5F3F9] rounded-3xl animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#6934B8] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#341766] overflow-hidden">
      <ProductSchema />
      <FAQSchema />

      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center w-full bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Trimix IPTV streaming live US TV channels in 4K Ultra HD quality"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-25"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/95" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-5 py-2 rounded-full mb-6 shadow-sm">
            <Medal className="w-4 h-4 text-[#FFC300]" />
            <span className="text-[#341766] font-extrabold text-xs uppercase tracking-widest">
              #1 Rated IPTV Provider in the USA
            </span>
          </div>

          <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase text-[#341766] mb-6 leading-[1.05] break-words">
            <span className="block md:whitespace-nowrap">TRIMIX IPTV</span>
            <span className="block text-[#6934B8] md:whitespace-nowrap">PREMIUM IPTV PROVIDER</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#341766]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Looking for a premium IPTV Provider in the USA? Trimix IPTV delivers 36,000+ live channels and 120,000+ movies and shows in crisp 4K on any device. Your Trimix IPTV Subscription activates in minutes, backed by dedicated high-performance edge servers for buffer-free, no-contract streaming. From NFL, NBA, MLB, and NHL to ESPN, Fox, NBC, CBS, HBO, and PPV events — Trimix IPTV keeps you watching smoothly. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm hover:bg-[#e6b000] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#FFC300]/40 cursor-pointer"
            >
              Buy Trimix IPTV Now
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-white text-[#6934B8] border-2 border-[#6934B8] font-black text-sm hover:bg-[#6934B8] hover:text-white transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 shrink-0" /> Start Free Trial
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#341766] font-bold uppercase tracking-widest bg-white px-8 py-4 rounded-3xl border border-[#6934B8]/15 shadow-lg">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#6934B8]" /> 4K Ultra HD Streaming
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#6934B8]" /> 99.9% Server Uptime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#6934B8]" /> Anti-Freeze Technology
            </span>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================
          PARTNER SLIDER (dark purple section per brand rules)
          ========================================================= */}
      <div className="min-h-[128px] bg-[#341766]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* =========================================================
          3-STEP SETUP GUIDE
          ========================================================= */}
      <section className="py-28 bg-[#F5F3F9] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#6934B8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#6934B8] animate-pulse" />
                <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                  Trimix IPTV Setup Guide
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#341766] tracking-tight uppercase leading-[1.05]">
                START STREAMING IN <br className="hidden sm:block" />
                <span className="text-[#6934B8] relative inline-block mt-1">
                  3 SIMPLE STEPS
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFC300] to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#341766]/75 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                No tech skills needed. Pick a plan, get your credentials by email, and start watching on any device — Firestick, Smart TV, iPhone, Android, Roku, or PC. The whole Trimix IPTV Subscription setup takes under five minutes from checkout to first stream.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#341766] rounded-3xl p-8 sm:p-10 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#6934B8]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#6934B8] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#341766] bg-[#FFC300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#341766] mb-3 uppercase tracking-tight group-hover:text-[#6934B8] transition-colors">
                  Choose Your Plan
                </h3>

                <p className="text-[#341766]/75 text-sm font-medium leading-relaxed mb-6">
                  Pick the Trimix IPTV Subscription that fits your household. Choose 1, 2, or 3 simultaneous screens and lock in a 3, 6, or 12-month term. Simple US pricing in USD — no hidden fees, no surprise charges, no contract you can&apos;t cancel.
                </p>

                <ul className="text-xs font-bold text-[#341766]/70 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> 1, 2, or 3 Device Options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> 3, 6, or 12 Month Terms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> USD Pricing, No Contract
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6934B8]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#341766] uppercase tracking-wider group-hover:text-[#6934B8] transition-colors">
                  Simple Selection
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F5F3F9] text-[#6934B8] flex items-center justify-center group-hover:bg-[#FFC300] group-hover:text-[#341766] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#341766] rounded-3xl p-8 sm:p-10 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-[#6934B8]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#6934B8] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#341766] bg-[#FFC300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#341766] mb-3 uppercase tracking-tight group-hover:text-[#6934B8] transition-colors">
                  Get Instant Credentials
                </h3>

                <p className="text-[#341766]/75 text-sm font-medium leading-relaxed mb-6">
                  Your M3U playlist and Xtream Codes login land in your inbox within five minutes. Fire up a player like IPTV Extreme Pro, TiviMate, or Smart IPTV, paste your credentials, and you&apos;re live. Works on Firestick, Android TV, Apple TV, Smart TVs, phones, and desktop.
                </p>

                <ul className="text-xs font-bold text-[#341766]/70 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> M3U &amp; Xtream Codes Delivered by Email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> Works with IPTV Extreme Pro &amp; TiviMate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> Setup Takes Under 5 Minutes
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6934B8]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#341766] uppercase tracking-wider group-hover:text-[#6934B8] transition-colors">
                  Instant Delivery
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F5F3F9] text-[#6934B8] flex items-center justify-center group-hover:bg-[#FFC300] group-hover:text-[#341766] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#341766] rounded-3xl p-8 sm:p-10 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#6934B8]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#6934B8] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#341766] bg-[#FFC300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#341766] mb-3 uppercase tracking-tight group-hover:text-[#6934B8] transition-colors">
                  Stream &amp; Enjoy
                </h3>

                <p className="text-[#341766]/75 text-sm font-medium leading-relaxed mb-6">
                  Dive into 36,000+ live channels, catch every NFL, NBA, MLB, NHL, UFC, and PPV event, and binge 120,000+ on-demand titles. Questions along the way? Our 24/7 support team is on call — real people, real answers, no waiting in line.
                </p>

                <ul className="text-xs font-bold text-[#341766]/70 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> 36,000+ Live Channels &amp; 120K+ VOD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> NFL, NBA, MLB, NHL, UFC &amp; PPV Events
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6934B8]" /> 24/7 Customer Support
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6934B8]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#341766] uppercase tracking-wider group-hover:text-[#6934B8] transition-colors">
                  Ready to Watch
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F5F3F9] text-[#6934B8] flex items-center justify-center group-hover:bg-[#FFC300] group-hover:text-[#341766] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          TARGET COUNTRIES — disabled for USA-only targeting.
          Re-enable this block if you re-introduce multi-country
          support later.
          ========================================================= */}
      {/* <section className="w-full bg-[#6934B8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section> */}



      {/* =========================================================
          MEDIA GRID / CHANNELS
          ========================================================= */}
      <section
        id="channels"
        className="pt-24 bg-[#F5F3F9] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#6934B8]/10"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tight leading-none">
              36,000+ LIVE CHANNELS FOR US VIEWERS
            </h2>
            <p className="text-[#341766]/75 font-medium text-lg">
              Every major American network — ESPN, Fox, NBC, CBS, ABC, HBO, Showtime, Starz — plus thousands of international feeds from around the world. New titles drop daily across our on-demand library. It&apos;s the IPTV Provider lineup built for American viewers, and it&apos;s all in one place.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-white rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* =========================================================
          PRICING SECTION
          ========================================================= */}
      <div className="min-h-[600px] bg-white" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center bg-white">
        <ShareButtons />
      </section>


      {/* =========================================================
          LIVING ROOM SECTION
          ========================================================= */}
      <section className="w-full bg-white py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#6934B8]">
            Home Cinema Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#341766] leading-none">
            BRING 4K STREAMING TO YOUR <span className="text-[#6934B8]">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-white py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="Trimix IPTV playing on a Smart TV in a modern US living room"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#341766]/75 font-medium">
            Nothing beats game day on the big screen — whether it&apos;s NFL Sunday, NBA playoffs, the World Series, or a UFC championship night. Trimix IPTV runs on dedicated edge servers tuned for stability, keeping the picture razor-sharp and the sound locked in sync. Settle into the couch and skip the buffering for good.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#FFC300] px-8 py-3.5 text-sm font-black uppercase tracking-widest text-[#341766] hover:bg-[#e6b000] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#FFC300]/30 cursor-pointer"
            >
              Activate Subscription Today
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================
          TRUST BADGES
          ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="bg-[#F5F3F9] text-[#341766] border border-[#6934B8]/15 rounded-3xl p-8 md:p-12 shadow-lg">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6934B8]/20 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#6934B8]" />
              </div>
              <div>
                <div className="font-black text-[#341766] text-lg uppercase tracking-tight">
                  Secure Payment Options
                </div>
                <p className="text-[#341766]/70 font-medium text-xs mt-1">
                  Encrypted checkout with Credit Card, PayPal, or Crypto
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6934B8]/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#6934B8]" />
              </div>
              <div>
                <div className="font-black text-[#341766] text-lg uppercase tracking-tight">
                  Free Trial First
                </div>
                <p className="text-[#341766]/70 font-medium text-xs mt-1">
                  Test the service on your own device before you pay a cent
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6934B8]/20 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#6934B8]" />
              </div>
              <div>
                <div className="font-black text-[#341766] text-lg uppercase tracking-tight">
                  24/7 Customer Support
                </div>
                <p className="text-[#341766]/70 font-medium text-xs mt-1">
                  Real humans, real fast — via email and live chat
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6934B8]/20 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#6934B8]" />
              </div>
              <div>
                <div className="font-black text-[#341766] text-lg uppercase tracking-tight">
                  Reliable Edge Servers
                </div>
                <p className="text-[#341766]/70 font-medium text-xs mt-1">
                  Optimized data centers for low latency and stable streaming
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          ANIMATED STATISTICS
          ========================================================= */}
      <section className="py-24 bg-[#341766] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              TRIMIX IPTV PERFORMANCE METRICS
            </h3>
            <p className="text-[#FFC300] text-base font-bold mt-4 uppercase tracking-wider">
              Trusted by 50,000+ subscribers across the United States.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#341766] rounded-3xl border border-[#6934B8]/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#6934B8] mb-2">
                <AnimatedCounter value={50} suffix="K+" />
              </span>
              <span className="text-xs text-[#341766]/70 font-extrabold uppercase tracking-widest mt-2">
                Active Subscribers
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#341766] rounded-3xl border border-[#6934B8]/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#6934B8] mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-[#341766]/70 font-extrabold uppercase tracking-widest mt-2">
                Live Channels
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#341766] rounded-3xl border border-[#6934B8]/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#6934B8] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-[#341766]/70 font-extrabold uppercase tracking-widest mt-2">
                On Demand Titles
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#341766] rounded-3xl border border-[#6934B8]/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#6934B8] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-[#341766]/70 font-extrabold uppercase tracking-widest mt-2">
                Server Uptime
              </span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          BENEFITS SECTION
          ========================================================= */}
      <section className="py-24 bg-[#F5F3F9] relative overflow-hidden border-t border-[#6934B8]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#6934B8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6934B8] animate-pulse" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                Reliable IPTV Service in the USA
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#341766] mb-6 uppercase tracking-tight leading-none">
              WHY TRIMIX IPTV IS THE <span className="text-[#6934B8]">BEST IPTV PROVIDER</span> IN THE USA
            </h2>
            <p className="text-[#341766]/75 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Households across the country are done overpaying for cable. Here is why so many are switching to Trimix IPTV — and why we&apos;re rated the best IPTV Provider in the USA.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                ),
                title: 'Massive On-Demand Library',
                desc: '120,000+ movies and complete TV box sets, refreshed daily. Multiple audio tracks and subtitles included.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Anti-Freeze Server Technology',
                desc: 'Our servers spread the load across data centers, so your stream stays smooth even during peak NFL, NBA, and PPV nights.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Optimized Routing',
                desc: 'Fast paths to our edge servers mean low latency, quick channel flips, and steady picture quality wherever you watch.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'All Major US Sports',
                desc: 'NFL, NBA, MLB, NHL, UFC, and PPV — all at a frame rate that keeps the action razor-sharp.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: '7-Day Electronic Program Guide',
                desc: 'A full week of listings plus catch-up options, so you never miss a show or a game.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Multi-Device Connections',
                desc: 'One account, multiple screens. Firestick, Android TV, Smart TVs, tablets, and phones all covered.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#341766] rounded-3xl p-8 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/20 flex items-center justify-center mb-6">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-[#341766] mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#341766]/75 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#6934B8]/10 flex items-center justify-between text-xs font-bold text-[#6934B8]">
                  <span className="uppercase tracking-wider">Key Feature</span>
                  <span className="w-2 h-2 rounded-full bg-[#FFC300]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          GLOBAL SERVER MAP
          ========================================================= */}
      <div className="min-h-[400px] bg-[#F5F3F9]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* =========================================================
          CHANNEL CATEGORIES
          ========================================================= */}
      <section className="py-24 bg-[#F5F3F9] relative border-t border-[#6934B8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] border border-[#6934B8]/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6934B8] animate-pulse" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                36,000+ Live Channels
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#341766] mb-6 uppercase tracking-tight leading-none">
              EXPLORE OUR <span className="text-[#6934B8]">CHANNEL CATEGORIES</span>
            </h2>
            <p className="text-[#341766]/75 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              From live sports to global broadcasts, Trimix IPTV pulls everything into one place — no apps, no switching, no hassle.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: 'Live Sports Networks',
                channels: 'Watch the NFL, NBA, MLB, NHL, UFC, and major PPV fight nights with motion that stays clean and sharp.',
                footer: ['4K Streaming', 'Live Now'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                cat: 'US Networks & Cable',
                channels: 'Full live coverage of ABC, CBS, NBC, Fox, ESPN, CNN, MSNBC, HBO, Showtime, and Starz.',
                footer: ['4K Ready', 'Live'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
              },
              {
                cat: 'Movies & On Demand',
                channels: 'Thousands of cinema releases, streaming originals, and complete TV box sets refreshed daily.',
                footer: ['Crisp Picture', 'Available'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                ),
              },
              {
                cat: 'Kids & Family',
                channels: 'Family-friendly shows, cartoons, and educational series that parents can trust for younger viewers.',
                footer: ['HD Quality', 'Streaming'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                cat: 'Global Television',
                channels: 'International networks from Europe, Asia, the Middle East, and Latin America so you can stay close to home.',
                footer: ['HD Feed', 'On Air'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                ),
              },
              {
                cat: 'Documentary & Nature',
                channels: 'Educational content about science, history, wildlife, and geography for viewers who love to learn.',
                footer: ['Crisp Picture', 'Available'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                cat: 'News & Current Affairs',
                channels: 'Live rolling news from CNN, MSNBC, Fox News, and major broadcast networks around the clock.',
                footer: ['HD Feed', 'On Air'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                ),
              },
              {
                cat: 'Music & Entertainment',
                channels: 'Music channels, entertainment networks, and reality shows for every mood.',
                footer: ['HD Quality', 'Streaming'],
                iconSvg: (
                  <svg className="w-6 h-6 text-[#6934B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#341766] rounded-3xl p-6 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/20 flex items-center justify-center shrink-0">
                      {item.iconSvg}
                    </div>
                    <h3 className="font-black text-[#341766] text-base uppercase tracking-wider">
                      {item.cat}
                    </h3>
                  </div>
                  <p className="text-[#341766]/75 font-semibold text-xs leading-relaxed">
                    {item.channels}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#6934B8]/10 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#6934B8] tracking-widest">
                  <span>{item.footer[0]}</span>
                  <span>{item.footer[1]}</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FEATURE BLOCKS (4K + SPORTS)
          ========================================================= */}
      <section className="bg-[#F5F3F9] py-24 border-y border-[#6934B8]/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Block 1: 4K Quality */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-3xl bg-white border border-[#6934B8]/15 p-3 shadow-xl transition-all duration-500 hover:border-[#6934B8]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="Trimix IPTV 4K IPTV Provider service streaming in high definition on a Smart TV in the USA"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#6934B8] border border-[#6934B8]/20 shadow-md">
                  4K Ultra HD Quality
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#6934B8]/20 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC300] text-[#341766] shrink-0 shadow-lg shadow-[#FFC300]/40">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#341766]">
                        Ultra Clear Streams
                      </p>
                      <p className="text-xs font-medium text-[#341766]/70 mt-0.5">
                        Enjoy sharp picture quality and smooth motion on any supported display.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-[#6934B8]/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#6934B8]">
                <span className="w-2 h-2 rounded-full bg-[#6934B8] animate-pulse" />
                High Definition Playback
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#341766] leading-[1.1] mb-6">
                EXPERIENCE UNMATCHED <br />
                <span className="text-[#6934B8] relative inline-block mt-1">
                  4K VIDEO CLARITY
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FFC300] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#341766]/80 font-medium">
                When you connect to Trimix IPTV&apos;s global servers, you tap into a network built for stability. We route your traffic through high-bandwidth nodes that cut down on buffering and keep 4K, Full HD, and HD streams looking their best — all at a stable 60FPS.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#341766]/70 font-medium">
                Local news, movie night, game day — it all plays smooth on Firestick, Smart TV, Android TV, Apple TV, Roku, and mobile.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-Freeze Protection Engine',
                  'Wide Channel Selection in 4K & FHD',
                  '120,000+ On-Demand Titles Available',
                  'Compatible with Firestick, TV & Mobile',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white text-[#341766] border border-[#6934B8]/15 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-sm hover:border-[#6934B8] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FFC300] text-[#341766] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#FFC300] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#341766] hover:bg-[#e6b000] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#FFC300]/30 cursor-pointer"
                >
                  Get Instant Access Now
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2: Live Sports */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-[#6934B8]/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#6934B8]">
                <span className="w-2 h-2 rounded-full bg-[#6934B8] animate-pulse" />
                Game Day &amp; Pay Per View
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#341766] leading-[1.1] mb-6">
                NEVER MISS A SINGLE <br />
                <span className="text-[#6934B8] relative inline-block mt-1">
                  GAME OR EVENT
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FFC300] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#341766]/80 font-medium">
                Sports fans need smooth feeds and fast response times. As a trusted IPTV Provider in the USA, Trimix IPTV delivers the NFL, NBA, MLB, NHL, UFC, and pay-per-view fight nights — no fuss, no freezing.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#341766]/70 font-medium">
                Super Bowl Sunday, NBA Finals, World Series, championship fights — our infrastructure handles peak traffic without skipping a beat. You get 60FPS action that keeps the play looking natural.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Full NFL, NBA, MLB & NHL Coverage',
                  'ESPN, Fox Sports & Major US Networks',
                  'UFC, Boxing & PPV Events',
                  'Premium Sports Feeds in 4K & FHD',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white text-[#341766] border border-[#6934B8]/15 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-sm hover:border-[#6934B8] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FFC300] text-[#341766] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="#channels"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-white border-2 border-[#6934B8] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#6934B8] hover:bg-[#6934B8] hover:text-white transition-all hover:scale-105 rounded-full shrink-0 shadow-md cursor-pointer"
                >
                  Explore Sports Coverage
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-3xl bg-white border border-[#6934B8]/15 p-3 lg:order-2 shadow-xl transition-all duration-500 hover:border-[#6934B8]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="NFL match day streaming on a Trimix IPTV Subscription in the USA"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#6934B8] border border-[#6934B8]/20 shadow-md">
                  Game Day Broadcasts
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#6934B8]/20 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFC300] text-[#341766] shadow-lg shadow-[#FFC300]/40">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#341766]">Sports Pass</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#6934B8]">
                        US Sports &amp; Live Feeds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON TABLE
          ========================================================= */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] px-4 py-2 rounded-full border border-[#6934B8]/20 mb-6">
              <BarChart className="w-4 h-4 text-[#6934B8]" />
              <span className="text-[#6934B8] font-extrabold text-xs uppercase tracking-wider">
                Service Comparison
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tight">
              TRIMIX IPTV VS TRADITIONAL CABLE TV
            </h2>
            <p className="text-[#341766]/75 text-lg max-w-3xl mx-auto font-medium">
              Side by side — why so many US households are switching to the best IPTV Provider and never looking back.
            </p>
          </FadeIn>

          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-3xl border border-[#6934B8]/20 overflow-hidden shadow-xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-[#6934B8]/10 bg-[#F5F3F9]">
                  <h3 className="text-lg font-black uppercase text-[#341766]">
                    Feature Comparison
                  </h3>
                </div>
                <div className="p-6 border-b border-r border-[#6934B8]/10 bg-[#6934B8]">
                  <h3 className="text-lg font-black uppercase text-white">
                    Trimix IPTV Subscription
                  </h3>
                </div>
                <div className="p-6 border-b border-[#6934B8]/10 bg-[#F5F3F9]">
                  <h3 className="text-lg font-black uppercase text-[#341766]/60">
                    Traditional Cable TV
                  </h3>
                </div>

                {[
                  { feature: 'Monthly Cost', us: 'From $10 / month', cable: '$80 to $140 per month' },
                  { feature: 'Contract Terms', us: 'No Contract – Cancel Anytime', cable: '12 to 24 Month Contracts' },
                  { feature: 'Live Channels', us: '20,000+ Channels', cable: '60 to 100 Channels' },
                  { feature: 'On Demand Movies', us: '120,000+ Titles', cable: 'Limited On Demand Selection' },
                  { feature: 'Ultra HD Quality', us: 'Standard Inclusion', cable: 'Extra HD Hardware Fees', usIcon: true },
                  { feature: 'Multiple Screens', us: 'Multi-Device Support', cable: 'Additional Box Rental Fees', usIcon: true },
                  { feature: 'Sports Events', us: 'NFL, NBA, MLB, NHL & PPV Included', cable: 'Extra Sports Package Fees', usIcon: true },
                  { feature: 'International Feeds', us: 'Global Networks Included', cable: 'Restricted Add-on Options' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-b border-[#6934B8]/10 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F3F9]'}`}>
                      <span className="text-[#341766] font-bold text-sm">{row.feature}</span>
                    </div>

                    <div className={`p-6 border-r border-b border-[#6934B8]/10 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F3F9]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#6934B8]" />
                          <span className="text-[#341766] font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#6934B8] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    <div className={`p-6 border-b border-[#6934B8]/10 ${idx % 2 === 0 ? 'bg-[#F5F3F9]' : 'bg-white'}`}>
                      <span className="text-[#341766]/60 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {[
              { feature: 'Monthly Cost', us: 'From $10/mo', cable: '$80 to $140/mo' },
              { feature: 'Contract Terms', us: 'No Contract', cable: '12 to 24 Months' },
              { feature: 'Live Channels', us: '20,000+ Channels', cable: '60 to 100 Channels' },
              { feature: 'On Demand Titles', us: '120,000+ Titles', cable: 'Limited Selection' },
              { feature: '4K Streaming', us: 'Included Standard', cable: 'Extra Hardware Fee' },
              { feature: 'Multi Screen', us: 'Multi Device', cable: 'Fee per box' },
              { feature: 'Sports Events', us: 'NFL, NBA, MLB, NHL & PPV', cable: 'Extra Monthly Fees' },
              { feature: 'International Feeds', us: 'Global Networks', cable: 'Extra Add-ons' },
            ].map((row, idx) => (
              <div
                key={idx}
                className="bg-white text-[#341766] rounded-3xl border border-[#6934B8]/20 p-5 shadow-md"
              >
                <div className="text-center mb-3">
                  <span className="text-[#6934B8] text-xs font-black uppercase tracking-wider">
                    {row.feature}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-left bg-[#F5F3F9] p-3 rounded-2xl flex-1 border border-[#6934B8]/20">
                    <div className="text-[#6934B8] font-black text-sm">{row.us}</div>
                    <div className="text-[#341766]/70 text-[10px] font-bold uppercase">
                      Trimix IPTV Subscription
                    </div>
                  </div>
                  <div className="text-right bg-white p-3 rounded-2xl flex-1 border border-[#6934B8]/10">
                    <div className="text-[#341766]/50 line-through text-sm">{row.cable}</div>
                    <div className="text-[#341766]/40 text-[10px] font-bold uppercase">
                      Traditional Cable
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOMER REVIEWS
          ========================================================= */}
      <section className="py-24 bg-[#F5F3F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#6934B8]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#6934B8]" />
              <span className="text-[#6934B8] font-extrabold text-xs uppercase tracking-wider">
                Verified Subscriber Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tight">
              TRUSTED BY <span className="text-[#6934B8]">50,000+ SUBSCRIBERS</span>
            </h2>
            <p className="text-[#341766]/75 text-lg font-medium max-w-2xl mx-auto">
              Real reviews from real US subscribers — what they say about Trimix IPTV (and why they&apos;re not going back to cable).
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'James T.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: "I spent months hunting for an IPTV Provider that wouldn't freeze during NFL Sunday on my Firestick. Trimix IPTV finally delivered. Setup took five minutes and the picture is crystal clear.",
                role: 'Texas, USA',
              },
              {
                name: 'Jennifer L.',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: 'Cancelled my cable package last month and switched to Trimix IPTV. The team walked me through setup via chat in about five minutes, and I tested everything on the free trial before paying. Highly recommend.',
                role: 'New York, USA',
              },
              {
                name: 'Olivia M.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: "Great mix of live sports, NBA, NFL, and on-demand titles. IPTV Extreme Pro runs smooth on my Android box here in the US. Easily the best IPTV service I've tried — and I've tried a lot.",
                role: 'California, USA',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white text-[#341766] rounded-3xl p-8 border border-[#6934B8]/15 shadow-md transition-all hover:-translate-y-2 hover:border-[#6934B8] hover:shadow-xl duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#6934B8]/20 shadow-sm shrink-0"
                      />
                      <div>
                        <div className="font-black text-[#341766] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#6934B8]" />
                        </div>
                        <div className="text-[#6934B8] text-xs font-bold uppercase tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFC300] text-[#FFC300]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#341766]/75 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#6934B8]/10 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#6934B8] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Subscriber
                  </span>
                  <span className="text-[11px] font-bold text-[#341766]/50 uppercase">
                    Verified User
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          SUPPORTED DEVICES
          ========================================================= */}
      <section className="py-24 bg-white w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6934B80F_1px,transparent_1px),linear-gradient(to_bottom,#6934B80F_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F5F3F9] px-4 py-2 rounded-full border border-[#6934B8]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6934B8] animate-pulse" />
              <span className="text-[#6934B8] font-extrabold text-xs uppercase tracking-widest">
                Universal Hardware Support
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBLE WITH ALL POPULAR DEVICES
            </h2>

            <p className="text-[#341766]/75 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Setup is a breeze no matter what device you already own. Trimix IPTV supports standard M3U playlists and Xtream Codes APIs across Android, iOS, Smart TVs, Roku, and desktop — no special hardware needed.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              {
                tag: 'Amazon Firestick & Fire TV',
                desc: 'Fire OS, Fire TV Cube, and 4K Sticks',
                detail: 'IPTV Extreme Pro and other popular players run great here for quick channel switching and smooth navigation.',
                icon: Zap,
                code: '01',
              },
              {
                tag: 'Smart TVs (Samsung & LG)',
                desc: 'Samsung Tizen OS and LG webOS Systems',
                detail: 'Install a player app straight from the TV app store and start watching without any extra boxes.',
                icon: Tv2,
                code: '02',
              },
              {
                tag: 'Android TV & Streaming Boxes',
                desc: 'Nvidia Shield, Google TV, and Android Boxes',
                detail: 'Full hardware decoding support for steady frame rates during live sports broadcasts.',
                icon: Cpu,
                code: '03',
              },
              {
                tag: 'Apple TV, iPhone & iPad',
                desc: 'tvOS and iOS Operating Platforms',
                detail: 'Smooth performance across iOS player apps with support for cloud-synced settings.',
                icon: Smartphone,
                code: '04',
              },
              {
                tag: 'Windows PCs & Mac Computers',
                desc: 'Windows 10 and 11, macOS, and Linux',
                detail: 'Stream directly through desktop media players or a web browser interface.',
                icon: MonitorSmartphone,
                code: '05',
              },
              {
                tag: 'MAG & Dedicated Boxes',
                desc: 'Portal Media Players and Set-Top Devices',
                detail: 'Native MAC address integration with full Electronic Program Guide functionality.',
                icon: ShieldCheck,
                code: '06',
              },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.tag}
                  className="group relative bg-white text-[#341766] border border-[#6934B8]/15 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-md overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFC300]" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#F5F3F9] border border-[#6934B8]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#6934B8] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#341766] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#6934B8] mt-0.5">{device.desc}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#341766] bg-[#FFC300] px-2.5 py-1 rounded-xl shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#341766]/70 leading-relaxed pt-2 border-t border-[#6934B8]/10">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FAQ
          ========================================================= */}
      <div className="min-h-[400px] bg-[#F5F3F9]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* =========================================================
          BLOG SECTION
          ========================================================= */}
      <section className="py-24 bg-white w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#6934B8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5F3F9] px-4 py-2 rounded-full border border-[#6934B8]/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#6934B8]" />
                <span className="text-[#6934B8] font-extrabold text-xs uppercase tracking-widest">
                  Guides &amp; Insights
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tight">
                LATEST SETUP <span className="text-[#6934B8]">GUIDES &amp; NEWS</span>
              </h2>
              <p className="text-[#341766]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Get more out of Trimix IPTV with step-by-step setup guides, troubleshooting fixes, and network tips that keep your stream fast.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/blog"
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#FFC300] text-[#341766] font-black hover:bg-[#e6b000] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-lg cursor-pointer"
              >
                <span className="uppercase text-xs tracking-wider">Explore All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white text-[#341766] rounded-3xl p-4 border border-[#6934B8]/15 shadow-md hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F3F9]">
                        <Image
                          src={post.image}
                          alt={`${post.title} Trimix IPTV setup guide`}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#341766]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#FFC300] text-[#341766] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md">
                            {post.author || 'Setup Guide'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#341766] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#6934B8]/20">
                            5 Min Read
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#341766] mb-2.5 group-hover:text-[#6934B8] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#341766]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#6934B8]/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#6934B8] uppercase tracking-wider group-hover:text-[#341766] transition-colors">
                        Read Article
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/20 flex items-center justify-center text-[#6934B8] group-hover:bg-[#FFC300] group-hover:text-[#341766] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          ========================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#6934B8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#341766] bg-[#341766] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6934B8]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFC300]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#6934B8] via-[#FFC300] to-[#6934B8]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#FFC300]" />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Premium IPTV Service in the USA
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[1.05] mb-6">
                UPGRADE YOUR ENTERTAINMENT <br />
                <span className="text-[#FFC300]">EXPERIENCE TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-white/85">
                Pick your plan, get instant credentials by email, and start streaming on your own device. Test everything on the free trial first — upgrade to a paid Trimix IPTV Subscription only when you&apos;re ready. No contract. No hassle. No surprises.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['Ultra HD', 'Stream Quality'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'Customer Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 hover:border-[#FFC300]/60 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#FFC300]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white/80">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#FFC300] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#341766] hover:bg-[#e6b000] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#FFC300]/30 cursor-pointer"
                >
                  Choose Your Plan
                </Link>
                <Link
                  href="/firestick-setup"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all hover:scale-105 shrink-0 cursor-pointer"
                >
                  <Settings className="h-4 w-4 shrink-0" /> Firestick Setup Guide
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-white/70 uppercase tracking-wider">
                Free Trial First • Instant Email Delivery • 24/7 Customer Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}