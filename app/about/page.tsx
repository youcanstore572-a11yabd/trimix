import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/about`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'About Us',
  `Discover the story behind ${BRAND}, a trusted US IPTV provider with 20,000+ live channels in 4K Ultra HD and 99.9% uptime.`,
  '/about'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const AboutPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_URL}/#about`,
        url: PAGE_URL,
        name: `About ${BRAND}`,
        description: `Learn about ${BRAND}, a trusted IPTV provider with 20,000+ live channels, 120,000+ movies and TV shows, and 50,000+ satisfied customers.`,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="about-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#341766]">

      <AboutPageSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#6934B8]/10 bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(105,52,184,0.12),_transparent_55%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #6934B808 1px, transparent 1px), linear-gradient(to bottom, #6934B808 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-[#6934B8]/20">
            <Sparkles className="w-4 h-4 text-[#FFC300]" />
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
              Our Story &amp; Mission
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#341766] uppercase tracking-tighter leading-none mb-6">
            About <span className="text-[#6934B8]">{BRAND}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#341766]/75 font-bold max-w-2xl mx-auto leading-relaxed">
            A premium US IPTV provider. Experience unlimited streaming in 4K quality without buffering, lock-in contracts, or hidden fees.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Company statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '50,000+', label: 'Happy Customers' },
            { icon: Globe, value: '100+', label: 'Countries Available' },
            { icon: Server, value: '99.9%', label: 'Server Uptime' },
            { icon: Trophy, value: '4.9/5', label: 'Average Rating' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-white border border-[#6934B8]/15 rounded-3xl shadow-md hover:scale-[1.02] hover:border-[#6934B8] hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#6934B8] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#341766]/70 text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="w-full bg-[#341766] py-10 px-4 sm:px-6 border-y-4 border-[#FFC300]/30 shadow-xl relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,195,0,0.12),_transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFC300] text-[#341766] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            SAVE BIG ON CABLE TV
          </div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            READY FOR THE BEST IPTV EXPERIENCE?
          </h2>
          <p className="text-white/85 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Stop overpaying for separate subscriptions. Get all your sport, movies, and premium channels in one complete package.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFC300] text-[#341766] hover:bg-white hover:text-[#6934B8] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>View Subscriptions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Intro Card */}
        <div className="bg-white border border-[#6934B8]/15 rounded-3xl p-6 md:p-8 mb-12 shadow-md">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#6934B8]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#341766] uppercase tracking-tight mb-2">
                Welcome to {BRAND}
              </h2>
              <p className="text-[#341766]/85 font-bold text-base leading-relaxed">
                We were founded with one clear goal. Making premium live television and on demand media accessible and affordable for every household, without compromising on picture quality or stability.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-12">

          {/* Mission */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFC300] rounded-full inline-block" />
              Our Mission &amp; Vision
            </h2>
            <p className="text-[#341766]/80 text-base leading-relaxed font-medium mb-4">
              Traditional cable subscriptions get more expensive every year while channel selection stays limited. Households are forced to bundle multiple services just to get major sports, news, and movies, often paying $100 or more per month for a fraction of the content.
            </p>
            <p className="text-[#341766]/80 text-base leading-relaxed font-medium">
              At {BRAND}, we bundle everything into one intuitive platform. Live sport, major national networks, and the latest cinema releases in 4K Ultra HD. We continuously invest in advanced server capacity to make buffering a thing of the past, even during peak events.
            </p>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFC300] rounded-full inline-block" />
              Why {BRAND} Is the Best Choice
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: '99.9% Uptime Guarantee',
                  desc: 'Our redundant server clusters ensure your favorite broadcasts are always live and interruption free.',
                },
                {
                  icon: Zap,
                  title: 'Anti Freeze Technology',
                  desc: 'Advanced load balancers prevent buffering during peak hours and high traffic live sport events.',
                },
                {
                  icon: Server,
                  title: 'High Speed Edge Servers',
                  desc: 'Directly connected to major internet exchanges for minimal latency and instant channel zapping.',
                },
                {
                  icon: Headphones,
                  title: '24/7 WhatsApp Customer Support',
                  desc: 'Expert help for installation, app selection, and channel configuration, usually within minutes.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-white rounded-3xl border border-[#6934B8]/15 shadow-md hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#6934B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-[#341766] text-base uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[#341766]/75 text-xs font-bold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFC300] rounded-full inline-block" />
              Our Technical Server Infrastructure
            </h2>
            <p className="text-[#341766]/80 text-base leading-relaxed font-medium mb-6">
              We manage our own streaming servers with dedicated 10 Gbps fibre connections. Our servers automatically route the video signal through the closest node, so you always enjoy smooth 50 and 60 FPS streaming quality, wherever you are watching from.
            </p>
            <div className="bg-[#F5F3F9] border border-[#6934B8]/15 rounded-3xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-2xl border border-[#6934B8]/10 hover:border-[#6934B8] transition-all">
                  <Activity className="w-8 h-8 text-[#6934B8] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#341766]">Low Latency</div>
                  <p className="text-xs text-[#341766]/60 font-bold mt-1">
                    Minimal delay during live sport
                  </p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#6934B8]/10 hover:border-[#6934B8] transition-all">
                  <Film className="w-8 h-8 text-[#6934B8] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#341766]">H.265 / HEVC</div>
                  <p className="text-xs text-[#341766]/60 font-bold mt-1">
                    Optimal data usage at 4K
                  </p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#6934B8]/10 hover:border-[#6934B8] transition-all">
                  <Tv className="w-8 h-8 text-[#6934B8] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#341766]">Universal</div>
                  <p className="text-xs text-[#341766]/60 font-bold mt-1">
                    Works on every Smart TV system
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Catalog */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFC300] rounded-full inline-block" />
              The Most Complete Channel Lineup
            </h2>
            <p className="text-[#341766]/80 text-base leading-relaxed font-medium mb-6">
              With over <strong className="text-[#341766]">20,000 live TV channels</strong> and a video library of{' '}
              <strong className="text-[#341766]">120,000+ movies and TV shows</strong>, we offer one of the widest channel packages anywhere:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'All major US networks (ABC, CBS, NBC, FOX, PBS, The CW) in 4K & Full HD',
                'Live sport channels including ESPN, Fox Sports, NFL Network, NBA TV, MLB Network, and UFC PPV',
                'NFL, NBA, MLB, NHL, UFC, college football, NASCAR, and international sports',
                'Full international lineup from around the world, including premium entertainment and movie channels',
                'Daily updated VOD catalog with English subtitles for cinema releases and top series',
                'Electronic Program Guide (EPG) and 7 day catch up and replay functionality',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#341766]/80 font-bold text-sm md:text-base"
                >
                  <Star className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Free Trial */}
          <section>
            <div className="bg-white border-2 border-emerald-600/40 rounded-3xl p-6 md:p-8 shadow-md">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-emerald-700 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Free 24 Hour Trial First
                  </h3>
                  <p className="text-[#341766]/85 text-sm md:text-base font-bold leading-relaxed">
                    Message us on WhatsApp and we will set you up with a free 24 hour trial. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your own device and internet connection. Upgrade to a paid plan only when you are happy. No lock-in, no pressure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#F5F3F9] border border-[#6934B8]/15 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-black text-[#341766] uppercase tracking-tight mb-3">
              Experience It Yourself, Risk Free
            </h2>
            <p className="text-[#6934B8] font-bold text-base max-w-lg mx-auto mb-8">
              Join thousands of happy households. Guided setup on WhatsApp and most customers are streaming within 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link
                href="/pricing"
                className="cursor-pointer w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 hover:bg-[#e6b000] shadow-md"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="cursor-pointer w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white text-[#6934B8] font-black text-sm uppercase tracking-widest border-2 border-[#6934B8] transition-all hover:scale-105 hover:bg-[#6934B8] hover:text-white"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[#6934B8]/15 text-center">
          <Link
            href="/"
            className="cursor-pointer inline-flex items-center gap-2 text-[#6934B8] hover:text-[#341766] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Back to homepage
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#341766]/40 text-xs font-bold">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}