'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  HelpCircle,
  Tv,
  Zap,
  CreditCard,
  Smartphone,
  Search,
  ChevronDown,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/faq`;

// ---------------------------------------------------------------------------
// TYPES + FAQ DATA
// ---------------------------------------------------------------------------
interface FAQItem {
  id: string;
  category: 'general' | 'sports' | 'devices' | 'billing';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // GENERAL
  { id: 'gen-1', category: 'general', q: 'What is IPTV and how is it different from traditional cable TV?', a: 'IPTV stands for Internet Protocol Television. Instead of a coax cable, fibre receiver, or satellite dish from traditional providers, the TV signals are streamed directly over your internet connection. This means no physical cable box is needed. You can watch thousands of channels in Full HD and 4K anywhere with just an internet connection.' },
  { id: 'gen-2', category: 'general', q: 'How fast will I get set up after payment?', a: 'Once you confirm your plan and complete payment, our team handles the setup with you live on WhatsApp. We send your login details, walk you through installing a player like IPTV Smarters Pro, and send the test content, all in the same chat. Most customers are streaming within 10 minutes.' },
  { id: 'gen-3', category: 'general', q: 'Can I watch on multiple TVs or screens at the same time?', a: 'Yes, depending on your plan. You can pick 1, 2, or 3 simultaneous screens during checkout. That means multiple household members can watch different things at the same time without any interruption.' },
  { id: 'gen-4', category: 'general', q: 'How does the free trial work?', a: 'Message us on WhatsApp and we will set you up with a free 24 hour trial so you can test the 4K picture quality, check the sport and movie lineup, and make sure everything runs smooth on your own device and internet connection. Upgrade to a paid plan only when you are happy.' },
  { id: 'gen-5', category: 'general', q: 'Am I locked into a contract or auto-renewal?', a: 'No, absolutely not. We offer prepaid subscriptions for 3, 6, or 12 months. When your period ends, the streaming connection stops automatically. There are never any automatic charges or silent renewals.' },
  { id: 'gen-6', category: 'general', q: 'Can I test the service before I pay?', a: 'Yes, that is exactly how we do things. Contact our WhatsApp support team and we will give you a free 24 hour trial so you can see the picture quality on your own TV before you commit to a subscription.' },

  // SPORTS
  { id: 'sport-1', category: 'sports', q: 'Are ESPN, Fox Sports, NBC Sports, and CBS Sports included?', a: 'Yes. Every channel package includes the complete sports lineup in smooth 60FPS quality. Watch the NFL, NBA, MLB, NHL, UFC, college football, NASCAR, and major fight nights, all included.' },
  { id: 'sport-2', category: 'sports', q: 'Do I pay extra for UFC or Boxing PPV events?', a: 'No, all worldwide Pay Per View events are included by default. This covers numbered UFC Main Cards, Championship Boxing, WWE events, AEW, and major MMA events at no additional cost.' },
  { id: 'sport-3', category: 'sports', q: 'Do foreign movies and series have English subtitles?', a: 'Over 95% of our complete VOD catalog, more than 120,000 movies and TV shows from Netflix, HBO Max, Disney Plus, Hulu, and cinema releases, includes selectable English subtitles and optional original audio tracks.' },
  { id: 'sport-4', category: 'sports', q: 'Does the EPG TV guide and catch up feature work properly?', a: 'Yes. Our interactive EPG TV guide is synced automatically every 6 hours with current programming. For major international channels, a 7 day catch up and replay feature is available.' },
  { id: 'sport-5', category: 'sports', q: 'Can I hide unnecessary foreign channel lists?', a: 'Absolutely. You can easily hide country groups in your IPTV player like IPTV Smarters Pro or TiviMate. Our support team can also adjust your account on request so you only receive channels you actually watch.' },
  { id: 'sport-6', category: 'sports', q: 'How stable is the picture quality during popular sport events?', a: 'Our servers use dynamic load balancing through dedicated global data centres. Even during peak moments like the Super Bowl, NBA Finals, World Series, or a major UFC title fight, the bitrate stays stable without frame drops.' },

  // DEVICES
  { id: 'dev-1', category: 'devices', q: 'On which TVs and devices can I install IPTV?', a: 'Our service is universally compatible with Smart TVs (Samsung Tizen, LG webOS, Sony Android TV, Google TV), Amazon Fire TV Stick, Google Chromecast with Google TV, Apple TV 4K, Nvidia Shield, MAG boxes, Windows PC, Mac, iPhone, iPad, and Android phones.' },
  { id: 'dev-2', category: 'devices', q: 'Which IPTV apps deliver the best viewing experience?', a: 'For Android TV and Fire TV Stick, we recommend IPTV Smarters Pro for the fastest channel zapping, lowest RAM usage, and best 4K performance. For Samsung and LG Smart TVs, IPTV Smarters Pro or IBO Player Pro work best. For Apple TV users, IPTVX or GSE Smart IPTV are the top choices.' },
  { id: 'dev-3', category: 'devices', q: 'What minimum internet speed do I need for 4K and 60FPS?', a: 'For Full HD channels we recommend at least 15 to 20 Mbps. For 4K Ultra HD and 60FPS sport streams, 25 to 30 Mbps. A wired Ethernet cable or 5GHz Wi-Fi network always provides the most stable experience.' },
  { id: 'dev-4', category: 'devices', q: 'What should I do if a channel buffers or freezes?', a: 'Buffering is caused in 99% of cases by temporary Wi-Fi interference or a full app cache. Restart your router and modem, restart your IPTV app, or switch the stream engine between HLS and TS in the player settings.' },
  { id: 'dev-5', category: 'devices', q: 'Do I need technical skills to complete the installation?', a: 'No. Installation takes less than 5 minutes on average, and our team walks you through it on WhatsApp. You download a player app from your device store, enter the login details we send you, and the channels load automatically.' },
  { id: 'dev-6', category: 'devices', q: 'Can I use my account while travelling abroad?', a: 'Yes. Our streams are accessible worldwide without geographic restrictions. You can use your account worry free in your holiday home, hotel, or anywhere else during your travels.' },

  // BILLING
  { id: 'pay-1', category: 'billing', q: 'What secure payment options do you support?', a: 'You can pay safely via Credit Card (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, USDT, Ethereum) through a heavily secured 256 bit SSL connection. All prices are in USD $.' },
  { id: 'pay-2', category: 'billing', q: 'Is a VPN required?', a: 'No. A VPN is not required because all our streams run through secure, encrypted connections. If you prefer extra privacy, our streaming servers are 100% compatible with all major VPN providers.' },
  { id: 'pay-3', category: 'billing', q: 'How is my personal data protected?', a: 'We respect applicable privacy law, including the CCPA and other US state privacy regulations, plus international data protection standards. We never store viewing history or channel logs, never sell data to third parties, and never retain credit card or bank account numbers on our local servers.' },
  { id: 'pay-4', category: 'billing', q: 'What happens if I lose my login credentials?', a: 'No problem. Send a message with your order number or registration email to our WhatsApp customer service team, and our support desk will resend your login details within 5 minutes.' },
  { id: 'pay-5', category: 'billing', q: 'Do I receive an invoice or receipt after payment?', a: 'Yes. Immediately after completing the transaction, you will receive an automated digital order confirmation and invoice in your inbox.' },
  { id: 'pay-6', category: 'billing', q: 'Are there hidden fees or admin charges?', a: 'No. The prices shown on our pricing page are fully all in. You pay once for your chosen period with no unexpected surcharges or connection fees.' },
];

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'sports' | 'devices' | 'billing'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('gen-1');

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // ------------------- JSON-LD SCHEMAS (inline) -------------------
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: faqList.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
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
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `${BRAND} FAQ | Help Center`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#341766] overflow-hidden">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        id="faq-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#6934B8]/10 overflow-hidden bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6934B8]/15 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, #6934B8 1px, transparent 1px), linear-gradient(to bottom, #6934B8 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-[#6934B8]/20">
            <HelpCircle className="w-4 h-4 text-[#FFC300]" />
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
              Help Center &amp; Answers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#341766] tracking-tighter uppercase mb-6 leading-none">
            FREQUENTLY ASKED <br className="hidden sm:block" />
            <span className="text-[#6934B8]">QUESTIONS</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#341766]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
            Find instant answers about <span className="text-[#6934B8]">{FOCUS_KEYWORD}</span> subscriptions, 4K streaming, Smart TV setup, and secure payments.
          </p>

          {/* Search */}
          <div className="w-full max-w-xl relative mt-2 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFC300] to-[#6934B8] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative">
              <Search className="w-5 h-5 text-[#6934B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a question (NFL, IPTV Smarters, PayPal, buffering)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-[#341766] placeholder-[#341766]/50 font-bold border-2 border-[#6934B8]/20 focus:border-[#6934B8] focus:outline-none shadow-lg transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          FAQ ACCORDION
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Questions (24)', icon: HelpCircle },
            { id: 'general', label: 'General & Service', icon: Tv },
            { id: 'sports', label: 'Sport & Channels', icon: Zap },
            { id: 'devices', label: 'Smart TV & Apps', icon: Smartphone },
            { id: 'billing', label: 'Billing & Security', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm border-2 ${
                  active
                    ? 'bg-[#FFC300] text-[#341766] border-[#FFC300] scale-105 shadow-lg shadow-[#FFC300]/30'
                    : 'bg-white text-[#6934B8] border-[#6934B8]/20 hover:border-[#6934B8] hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#FFC300] shadow-xl shadow-[#FFC300]/20'
                      : 'border-[#6934B8]/15 hover:border-[#6934B8] hover:shadow-md'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                      isOpen ? 'bg-[#FFC300]' : 'bg-transparent'
                    }`}
                  />

                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 pr-2 flex-1">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#6934B8] text-white' : 'bg-[#6934B8]/10 text-[#6934B8]'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="font-black text-[#341766] text-base sm:text-lg uppercase tracking-tight leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#FFC300] text-[#341766]'
                          : 'bg-[#6934B8]/10 text-[#6934B8] group-hover:bg-[#6934B8]/15'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#341766]/85 text-sm sm:text-base font-medium leading-relaxed px-5 sm:px-6 pl-15 sm:pl-16 border-l-4 border-[#6934B8] ml-4 sm:ml-5 py-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-10 text-center shadow-lg">
            <AlertCircle className="w-10 h-10 text-[#6934B8] mx-auto mb-3" />
            <p className="font-black text-lg uppercase tracking-tight mb-1 text-[#341766]">
              No results found
            </p>
            <p className="text-sm font-bold text-[#341766]/70 mb-6">
              Try a different search term or contact our WhatsApp help desk directly.
            </p>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I could not find an answer to my question.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC300] text-[#341766] font-black text-xs uppercase tracking-widest hover:bg-[#e6b000] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        )}
      </section>

      {/* ==========================================================
          RECOMMENDED DEVICES
      ========================================================== */}
      <section className="py-16 bg-[#F5F3F9] border-y border-[#6934B8]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#6934B8]" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                Recommended Setup
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] uppercase tracking-tight mb-3">
              Best <span className="text-[#6934B8]">Devices &amp; Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-[#341766]/70 font-bold max-w-xl mx-auto">
              The best IPTV players and minimum internet speeds for a buffer free viewing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Android & Firestick',
                desc: 'Highest stability and fastest channel zapping.',
                apps: ['IPTV Smarters Pro (Recommended)', 'TiviMate IPTV Player Pro', 'IBO Player Pro'],
                speed: 'Min. Speed: 20 Mbps',
              },
              {
                icon: Tv,
                title: 'Samsung & LG Smart TV',
                desc: 'Stream directly without an external box.',
                apps: ['IPTV Smarters Pro (webOS / Tizen)', 'Smart IPTV (SIPTV)', 'IBO Player Pro'],
                speed: 'Min. Speed: 25 Mbps',
              },
              {
                icon: Cpu,
                title: 'Apple TV & iOS',
                desc: 'Sharp 4K interface built for Apple devices.',
                apps: ['IPTVX (tvOS)', 'GSE Smart IPTV', 'IPTV Smarters Player Lite'],
                speed: 'Min. Speed: 25 Mbps',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-white border border-[#6934B8]/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[#6934B8] hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-4 group-hover:bg-[#6934B8] transition-colors">
                      <Icon className="w-6 h-6 text-[#6934B8] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-black text-[#341766] uppercase mb-1">{card.title}</h3>
                    <p className="text-xs text-[#341766]/60 font-bold mb-4">{card.desc}</p>
                    <ul className="space-y-2 text-xs font-bold text-[#341766]/80">
                      {card.apps.map((app) => (
                        <li key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#6934B8]/10 text-[11px] font-black text-[#6934B8]">
                    {card.speed}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          TROUBLESHOOTING
      ========================================================== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#6934B8] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#FFC300]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#341766] uppercase tracking-tight">
              Quick Self Help for Small Glitches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: 'Restart Your Router', desc: 'Power off your modem and TV for 30 seconds to clear the DNS cache and network congestion.' },
              { n: 2, title: 'Refresh the Playlist', desc: 'In your IPTV app, choose Update Playlist or Reload Portal to load new channels and EPG.' },
              { n: 3, title: 'Switch Stream Format', desc: 'In your player settings, switch the stream type from TS to HLS for smoother data delivery.' },
            ].map((step) => (
              <div key={step.n} className="p-5 bg-[#F5F3F9] rounded-2xl border border-[#6934B8]/15">
                <span className="w-8 h-8 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm flex items-center justify-center mb-3">
                  {step.n}
                </span>
                <h3 className="font-black text-sm uppercase mb-1 text-[#341766]">{step.title}</h3>
                <p className="text-xs font-bold text-[#341766]/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <div className="w-full flex justify-center items-center my-10">
        <ShareButtons />
      </div>

      {/* ==========================================================
          SUPPORT CTA
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFC300]/50 bg-[#341766] p-8 md:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,195,0,0.15),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#341766] px-4 py-2 rounded-full mb-4 shadow-md">
              <LifeBuoy className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">Personal Help</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
              Still Have a Specific Question?
            </h2>

            <p className="text-white/85 font-bold text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Our team is available 24/7 on WhatsApp for installation help, channel questions, and free 24 hour trial lines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I have a question about the ${FOCUS_KEYWORD} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-xs uppercase tracking-widest hover:bg-[#e6b000] transition-all hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </a>
              <Link
                href="/pricing"
                className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#6934B8] font-black text-xs uppercase tracking-widest hover:scale-105 hover:bg-[#6934B8] hover:text-white transition-all shadow-xl border-2 border-white"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="cursor-pointer inline-flex items-center gap-2 text-[#6934B8] hover:text-[#341766] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
}