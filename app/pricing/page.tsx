'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Headphones,
  Sparkles,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// FAQ Item — Accordion
// ---------------------------------------------------------------------------
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-pointer w-full text-left bg-white border-2 ${
        isOpen ? 'border-[#FFC300]' : 'border-[#6934B8]/15'
      } rounded-2xl p-6 hover:border-[#6934B8] shadow-sm transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#6934B8]' : 'text-[#341766] group-hover:text-[#6934B8]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#6934B8]' : 'text-[#341766]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#6934B8]'
              : 'text-[#341766]/30 group-hover:text-[#6934B8]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#341766]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#6934B8] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ==========================================================
          HERO SECTION — Fully Centered
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.BRAND_NAME} IPTV Subscription plans and pricing`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover opacity-20"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/95" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6934B8 1px, transparent 1px),
              linear-gradient(to bottom, #6934B8 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6934B8]/15 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-[#6934B8]/20">
                <Sparkles className="w-4 h-4 text-[#FFC300]" />
                <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                  Best Value IPTV Subscription Plans 2026
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#341766] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV SUBSCRIPTION PLANS &amp; <br />
                <span className="text-[#6934B8]">BEST PRICING</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#341766]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Stream 36,000+ live channels and 120,000+ movies and TV shows in 4K on any device. Try it free first, get instant activation, and pay with zero hassle.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#6934B8] text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#6934B8]" /> Instant Activation
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#6934B8]" /> Guided Setup
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#6934B8]" /> Free Trial First
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          MAIN PRICING CARDS
      ========================================================== */}
      <div className="w-full relative z-20 bg-[#341766] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* ==========================================================
          FEATURES GRID — LIGHT
      ========================================================== */}
      <section className="py-24 bg-[#F5F3F9] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter leading-none">
              Everything Included In <span className="text-[#6934B8]">Every Plan</span>
            </h2>
            <p className="text-[#341766]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
              Every IPTV Subscription comes with these premium features as standard.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '20,000+ Live Channels',
                desc: `Sports, news, entertainment, and premium broadcasters from around the world on this IPTV Provider.`,
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: `The latest movies, complete series, and documentaries updated daily on the on-demand library.`,
              },
              {
                icon: MonitorPlay,
                title: '4K & 60FPS Quality',
                desc: `Crystal clear streaming on compatible channels and devices without buffering.`,
              },
              {
                icon: Wifi,
                title: 'Anti Freeze Technology',
                desc: 'Buffer free viewing thanks to advanced stream optimization and dedicated load balancers.',
              },
              {
                icon: Calendar,
                title: 'Full EPG TV Guide',
                desc: '7 day interactive program guide covering all live channels and on-demand titles.',
              },
              {
                icon: Trophy,
                title: 'PPV Events Included',
                desc: 'All major UFC, boxing, NFL, NBA, and Main Event Pay Per View matches at no extra cost.',
              },
              {
                icon: Globe,
                title: 'Global Server Coverage',
                desc: 'Dedicated edge servers across multiple continents for minimal latency on live sports broadcasts.',
              },
              {
                icon: Server,
                title: '99.9% Server Uptime',
                desc: 'Enterprise infrastructure with redundant backup servers for guaranteed streaming stability.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white border border-[#6934B8]/15 rounded-2xl p-6 hover:border-[#6934B8] hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4 group-hover:bg-[#6934B8]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#6934B8]" />
                  </div>
                  <h3 className="font-black text-[#341766] uppercase tracking-wide text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#341766]/70 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          COMPARISON TABLE — Light
      ========================================================== */}
      <section className="py-24 bg-white border-y border-[#6934B8]/10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter">
              Compare <span className="text-[#6934B8]">IPTV Subscription Plans</span>
            </h2>
            <p className="text-[#6934B8] text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect IPTV Provider plan for your streaming needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#F5F3F9] border border-[#6934B8]/15 rounded-3xl p-4 md:p-6 shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#6934B8]/10">
                  <th className="text-left p-4 text-[#341766] font-black uppercase tracking-wider text-base md:text-lg">
                    Specification
                  </th>
                  <th className="text-center p-4 text-[#6934B8] font-black uppercase tracking-wider text-base md:text-lg">
                    3 Months
                  </th>
                  <th className="text-center p-4 text-[#6934B8] font-black uppercase tracking-wider text-base md:text-lg bg-[#FFC300]/20 rounded-t-xl">
                    12 Months (VIP)
                  </th>
                  <th className="text-center p-4 text-[#6934B8] font-black uppercase tracking-wider text-base md:text-lg">
                    6 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#6934B8]/5">
                {[
                  { feature: 'Live Channels', basic: '20,000+', pro: '20,000+ VIP', premium: '20,000+' },
                  { feature: 'Movies & TV Shows', basic: '120,000+', pro: '120,000+ (Daily Updates)', premium: '120,000+' },
                  { feature: '4K & 60FPS Streaming', basic: 'Yes', pro: 'Yes (Ultra Bitrate)', premium: 'Yes' },
                  { feature: 'Live Sport & PPV', basic: 'Included', pro: 'All PPV + VIP Feeds', premium: 'Included' },
                  { feature: 'EPG & Catch Up', basic: 'Standard EPG', pro: '7 Day Catch Up + EPG', premium: 'Full EPG' },
                  { feature: 'Anti Freeze Technology', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Advanced' },
                  { feature: 'VPN Compatible', basic: 'Yes (Not Required)', pro: '100% Compatible', premium: 'Yes' },
                  { feature: 'Number of Screens', basic: '1 or 2 Screens', pro: '1, 2, or 3 Screens', premium: '1 or 2 Screens' },
                  { feature: 'Customer Support', basic: '24/7 Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#6934B8]/[0.02] transition-colors">
                    <td className="p-4 text-[#341766] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#341766]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#6934B8] font-black text-sm bg-[#FFC300]/10">{row.pro}</td>
                    <td className="p-4 text-center text-[#341766]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUST BADGES — Light gray section
      ========================================================== */}
      <section className="py-24 bg-[#F5F3F9] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6934B8]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC300]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter">
              Why Choose <span className="text-[#6934B8]">{CONSTANTS.BRAND_NAME}</span>
            </h2>
            <p className="text-[#341766]/75 text-lg font-bold max-w-2xl mx-auto mt-4">
              Trusted by over 50,000 happy viewers for premium 4K IPTV streaming.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border border-[#6934B8]/15 rounded-2xl shadow-md hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#6934B8]" />
              </div>
              <h4 className="text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
                Secure Payments
              </h4>
              <p className="text-[#341766]/70 text-sm font-medium">
                Encrypted transactions via Credit Card, PayPal, and Crypto with 256 bit SSL protection.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border border-[#6934B8]/15 rounded-2xl shadow-md hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#6934B8]" />
              </div>
              <h4 className="text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
                Instant Activation
              </h4>
              <p className="text-[#341766]/70 text-sm font-medium">
                Get your IPTV Subscription credentials instantly and start streaming within minutes.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border border-[#6934B8]/15 rounded-2xl shadow-md hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-[#6934B8]" />
              </div>
              <h4 className="text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
                Free Trial First
              </h4>
              <p className="text-[#341766]/70 text-sm font-medium">
                Test IPTV services on your own device and internet before you pay a cent.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border border-[#6934B8]/15 rounded-2xl shadow-md hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-[#6934B8]" />
              </div>
              <h4 className="text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
                24/7 Customer Support
              </h4>
              <p className="text-[#341766]/70 text-sm font-medium">
                Real people on hand around the clock to help with setup, streaming, or anything else you need.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          FREE TRIAL BANNER — White card with gold border
      ========================================================== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-8 md:p-10 text-center shadow-lg">
          <div className="inline-flex items-center gap-2 bg-[#6934B8] px-4 py-2 rounded-full mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#FFC300]" />
            <span className="text-white font-black text-xs uppercase tracking-widest">
              Try Before You Pay
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-3">
            Free Trial First
          </h3>
          <p className="text-[#341766]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Request a free trial and we will set you up so you can test the 4K picture, check the sports lineup, and make sure everything runs smooth on your device and internet connection. Upgrade to a paid IPTV Subscription only when you are happy.
          </p>
        </div>
      </section>

      {/* ==========================================================
          FAQ — LIGHT
      ========================================================== */}
      <section className="w-full bg-[#F5F3F9] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#6934B8]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tighter">
              Frequently Asked <span className="text-[#6934B8]">Questions</span>
            </h2>
            <p className="text-[#341766]/70 font-bold text-lg">
              Everything you need to know about our IPTV Subscription plans, pricing, and setup.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            <FAQItem
              question="Which payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). Every payment is processed via encrypted 256 bit SSL connections."
            />
            <FAQItem
              question="Can I upgrade or modify my IPTV Subscription later?"
              answer="Yes, you can upgrade at any time to add more screens or switch to a longer period. Just reach our support team and we will adjust your account straight away."
            />
            <FAQItem
              question="Is there a contract or automatic renewal?"
              answer="No. There are no long term contracts and no automatic renewals. Every plan is a prepaid one time payment that stops on its own when the period ends."
            />
            <FAQItem
              question="What happens when my subscription expires?"
              answer="We will send you a reminder before your IPTV Subscription ends. You can renew easily through our support team. If you decide not to renew, the service stops automatically with no further obligation."
            />
            <FAQItem
              question="Do you offer a free trial before I commit?"
              answer="Yes. Request a free trial and we will set you up so you can test the 4K picture quality and channel lineup on your own device and internet connection. Upgrade to a paid IPTV Subscription only when you are happy."
            />
            <FAQItem
              question="Can I use the service on multiple devices at the same time?"
              answer="Yes, depending on your chosen plan. You can pick 1, 2, or 3 simultaneous screens during checkout to watch in multiple rooms at once. Everyone in the household can watch what they want."
            />
            <FAQItem
              question="Are there discounts for longer subscriptions?"
              answer="Yes. The 12 month plans offer the highest savings, up to 49% off compared to the shorter terms. That is the best value option for a household that knows they will stick with it."
            />
            <FAQItem
              question="Do I need a VPN to use this IPTV service?"
              answer="No VPN is required. Our servers are optimized for smooth, buffer free streaming on your home connection."
            />
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          SHARE BUTTONS
      ========================================================== */}
      <div className="w-full flex justify-center items-center py-12 bg-white">
        <ShareButtons />
      </div>

      {/* ==========================================================
          BOTTOM CTA — Dark Purple
      ========================================================== */}
      <section className="py-20 bg-[#341766] border-t border-[#FFC300]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6934B8]/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC300]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Ready To Start Streaming?
            </h2>
            <p className="text-white/85 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Join over 50,000 happy viewers. Pick your plan, get instant activation, and test everything on a free trial first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="cursor-pointer w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-lg shadow-[#FFC300]/30 hover:bg-[#e6b000]"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/firestick-setup"
                className="cursor-pointer w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-white text-[#6934B8] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:bg-[#6934B8] hover:text-white border-2 border-white"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/70 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FFC300]" /> Instant Activation
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FFC300]" /> Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFC300]" /> Card, PayPal &amp; Crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}