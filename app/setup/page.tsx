'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import {
  MonitorSmartphone,
  Tv,
  Apple,
  Laptop,
  Sparkles,
  Lock,
  Zap,
  Users,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  Download,
  KeyRound,
  AlertCircle,
  X,
  ChevronDown,
  Gift,
  ShoppingCart,
  Plug,
  ShieldCheck,
  Globe,
  Phone,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;

const IBO_DOWNLOAD_URL = 'https://iboplayer.pro/';

// ---------------------------------------------------------------------------
// DEVICES
// ---------------------------------------------------------------------------
const devices = [
  { id: 'firestick', name: 'Firestick / Android TV', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Devices', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

// ---------------------------------------------------------------------------
// STEP DATA
// ---------------------------------------------------------------------------
const stepData = {
  firestick: {
    title: `Setup ${FOCUS_KEYWORD} on Firestick & Android TV`,
    icon: MonitorSmartphone,
    steps: [
      {
        number: 1,
        title: `Choose Your ${FOCUS_KEYWORD} Plan`,
        description: `Pick the ${SECONDARY_KEYWORD} that fits your household. Choose 3, 6, or 12 months with 1, 2, or 3 simultaneous screens. Every plan includes the full 36,000+ channel lineup, 120,000+ movies and TV shows, and 4K/60FPS streams on supported channels.`,
        chips: ['20,000+ Channels', '120,000+ Movies', '4K & 60FPS', 'USD Pricing'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `View ${FOCUS_KEYWORD} Plans`, href: '/pricing', type: 'internal' },
        tip: `The 12 month VIP plan saves up to 49% and unlocks priority server routing on global edge nodes.`,
      },
      {
        number: 2,
        title: 'Contact Support on WhatsApp',
        description: 'Message our team on WhatsApp with your chosen plan and screen count. We confirm pricing in USD and send a secure one-time payment link right in the chat. Average reply time is under 2 minutes, 24/7.',
        chips: ['Credit Card', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Chat on WhatsApp', type: 'whatsapp', message: 'Hi! I want to subscribe and get setup help on my Firestick.' },
        tip: 'Have your device ready before you message us. Support will send the download link for IPTV Smarter Pro the moment payment is confirmed.',
      },
      {
        number: 3,
        title: 'Download IPTV Smarter Pro',
        description: 'IPTV Smarter Pro is the fastest and most stable IPTV player for Firestick and Android TV. It supports 4K HDR, electronic program guide (EPG), parental controls, and comes with a built-in trial so you can test playback before you enter your credentials.',
        chips: ['4K HDR', 'Low RAM', 'Fast Zapping', 'Built In Trial'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Download IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'On Firestick, enable Apps from Unknown Sources in Settings → My Fire TV → Developer Options, then use the Downloader app to sideload IPTV Smarter Pro if it is not in the Amazon App Store.',
      },
      {
        number: 4,
        title: 'Choose Your Setup Method',
        description: `Two ways to connect your ${FOCUS_KEYWORD} subscription to IPTV Smarter Pro. Pick whichever feels easier — both deliver identical 4K streaming performance.`,
        methods: [
          { title: 'Auto Setup by Support', subtitle: 'Recommended', points: ['Send us your Device Key', 'We activate remotely in under 60 seconds', 'Channel list loads automatically'], highlighted: true },
          { title: 'Manual Setup', subtitle: 'DIY', points: ['Support sends M3U URL or Xtream Codes', 'You paste credentials in the app', 'Channels load in seconds'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Not sure which to pick? Go with Auto. Our support team handles 100% of the setup for you — no typing, no errors, no guesswork.',
      },
      {
        number: 5,
        title: 'Load Content & Wait 1 to 2 Minutes',
        description: 'Once activated, IPTV Smarter Pro downloads your full catalog in the background. Channels, movies, TV shows, the 7-day EPG guide, and your favorites list all populate automatically. Keep the app open during this first load — it only happens once.',
        chips: ['1 to 2 min', 'EPG Auto Load', 'Favorites Ready'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'If content is still loading after 3 minutes, check that your Firestick has at least 1 GB of free storage and a stable WiFi connection.',
      },
      {
        number: 6,
        title: `Start Streaming ${FOCUS_KEYWORD}!`,
        description: 'You are live. Enjoy instant access to 36,000+ live channels covering sports, news, movies, kids content, and international networks.',
        stats: [
          { value: '20,000+', label: 'Live Channels' },
          { value: '120,000+', label: 'Movies & TV Shows' },
          { value: '4K/60FPS', label: 'Quality' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Done!',
        icon: PlayCircle,
        tip: 'Pin your favorite channels and add teams to the sports shortcut. Channel surfing becomes instant.',
      },
    ],
  },
  smarttv: {
    title: `Setup ${FOCUS_KEYWORD} on Smart TV`,
    icon: Tv,
    steps: [
      {
        number: 1,
        title: `Choose Your ${FOCUS_KEYWORD} Plan`,
        description: 'Select 3, 6, or 12 month access with 1, 2, or 3 simultaneous screens. Perfect for family households streaming different content in different rooms.',
        chips: ['20,000+ Channels', '120,000+ Movies', 'Samsung & LG', 'USD Pricing'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `View ${FOCUS_KEYWORD} Plans`, href: '/pricing', type: 'internal' },
        tip: 'Multi-screen plans work best for families watching sports, movies, and kids content at the same time.',
      },
      {
        number: 2,
        title: 'Contact Support on WhatsApp',
        description: 'Message our team on WhatsApp. We confirm your plan in USD and send a secure one-time payment link right in chat. Tell us your TV brand and we will send a custom setup guide for Samsung Tizen, LG webOS, Sony Android TV, or Google TV.',
        chips: ['Credit Card', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Chat on WhatsApp', type: 'whatsapp', message: `Hi! I want to setup ${FOCUS_KEYWORD} on my Smart TV.` },
        tip: 'App store availability depends on your TV model and year. Most modern Samsung and LG models have IPTV Smarter Pro available directly. Older models may need a Firestick.',
      },
      {
        number: 3,
        title: 'Install IPTV Smarter Pro',
        description: 'IPTV Smarter Pro runs natively on Samsung Tizen (2017+), LG webOS (2018+), Android TV, and Google TV. No extra hardware required. It supports 4K HDR, EPG, and instant channel zapping right from your TV remote.',
        chips: ['Samsung Tizen', 'LG webOS', 'Android TV', '4K HDR'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Download IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Search "IPTV Smarter Pro" in your TV app store. If it is not available, message support — we will send an alternative install link for your model.',
      },
      {
        number: 4,
        title: 'Choose Your Setup Method',
        description: `Connect your ${FOCUS_KEYWORD} subscription the easy way. Auto activation by our support team, or manual login with your own M3U URL or Xtream Codes credentials.`,
        methods: [
          { title: 'Auto Setup by Support', subtitle: 'Recommended', points: ['Send us your Device Key', 'We link your subscription', 'Channels appear automatically'], highlighted: true },
          { title: 'Manual Setup', subtitle: 'DIY', points: ['Support sends M3U or Xtream', 'You enter in Add Playlist', 'Channels load instantly'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Auto setup works on every Smart TV brand that supports IPTV Smarter Pro. Just send us your Device Key and we do the rest.',
      },
      {
        number: 5,
        title: 'Load Content & Wait 1 to 2 Minutes',
        description: 'IPTV Smarter Pro downloads your live channels, movies and TV shows library, and the full 7-day EPG guide automatically. Everything syncs in the background while you watch.',
        chips: ['1 to 2 min', 'EPG Auto Load', 'Parental Controls'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Do not close the app during the first load. Everything will be ready in under 2 minutes on a stable connection.',
      },
      {
        number: 6,
        title: `Stream ${FOCUS_KEYWORD} in 4K`,
        description: 'Your Smart TV is ready. Enjoy buffer-free 4K IPTV with every major sports league, premium networks, and thousands of international channels.',
        stats: [
          { value: '20,000+', label: 'Live Channels' },
          { value: '120,000+', label: 'Movies & TV Shows' },
          { value: '4K', label: 'Ultra HD' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Done!',
        icon: PlayCircle,
        tip: 'For the sharpest 4K, connect your TV via Ethernet or 5GHz WiFi. Avoid 2.4GHz for live sports.',
      },
    ],
  },
  apple: {
    title: `Setup ${FOCUS_KEYWORD} on Apple Devices`,
    icon: Apple,
    steps: [
      {
        number: 1,
        title: `Choose Your ${FOCUS_KEYWORD} Plan`,
        description: 'Pick the plan that fits your Apple household. Choose 3, 6, or 12 months with 1, 2, or 3 simultaneous screens. Works across iPhone, iPad, Apple TV 4K, and Mac.',
        chips: ['20,000+ Channels', '120,000+ Movies', 'iPhone / iPad', 'Apple TV 4K'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `View ${FOCUS_KEYWORD} Plans`, href: '/pricing', type: 'internal' },
        tip: 'The 12 month VIP plan unlocks AirPlay 2 optimizations for Apple TV streaming and priority server routing.',
      },
      {
        number: 2,
        title: 'Contact Support on WhatsApp',
        description: 'Our support team handles everything over WhatsApp. Confirm your plan in USD, complete secure payment, and receive credentials instantly in chat.',
        chips: ['Credit Card', 'PayPal', 'Crypto', 'Apple Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Chat on WhatsApp', type: 'whatsapp', message: 'Hi! I need setup help for my Apple device.' },
        tip: 'Family Sharing users, mention it to support for multi-device guidance across iPhone, iPad, and Apple TV.',
      },
      {
        number: 3,
        title: 'Install IPTV Smarter Pro',
        description: 'IPTV Smarter Pro works natively on iPhone, iPad, and Apple TV 4K with AirPlay 2, Picture in Picture, and iCloud sync for favorites and EPG data. Available on the App Store for iOS and tvOS.',
        chips: ['iOS + tvOS', 'AirPlay 2', 'Picture in Picture', 'iCloud Sync'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Download IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'On Apple TV, use the Apple TV Remote app on your iPhone to type your credentials much faster than with the Siri Remote.',
      },
      {
        number: 4,
        title: 'Choose Your Setup Method',
        description: 'Auto activation by our team, or manual login with your M3U URL or Xtream Codes credentials. Both methods deliver identical 4K streaming performance.',
        methods: [
          { title: 'Auto Setup by Support', subtitle: 'Recommended', points: ['Send your Device Key', 'We activate remotely', 'Auto loads your channels'], highlighted: true },
          { title: 'Manual Setup', subtitle: 'DIY', points: ['We send M3U or Xtream', 'Enter in Add Playlist', 'Instant channel load'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Auto setup is fastest. Activation typically completes in under 60 seconds on all Apple devices.',
      },
      {
        number: 5,
        title: 'Load Content & Wait 1 to 2 Minutes',
        description: 'Your channels, movies and TV shows library, and full 7-day EPG guide load automatically in IPTV Smarter Pro. Favorites sync across iPhone, iPad, and Apple TV via iCloud.',
        chips: ['1 to 2 min', 'EPG Auto Load', 'iCloud Favorites'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Favorites sync automatically across all Apple devices signed into the same iCloud account.',
      },
      {
        number: 6,
        title: `Stream ${FOCUS_KEYWORD} in 4K`,
        description: 'Your Apple device is ready. Enjoy premium 4K IPTV with AirPlay casting, Picture in Picture support, and the full sports and entertainment lineup.',
        stats: [
          { value: '20,000+', label: 'Live Channels' },
          { value: '120,000+', label: 'Movies & TV Shows' },
          { value: '4K HDR', label: 'Quality' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Done!',
        icon: PlayCircle,
        tip: 'Enable Reduce Loud Sounds in tvOS audio settings for balanced audio during live sports broadcasts.',
      },
    ],
  },
  pc: {
    title: `Setup ${FOCUS_KEYWORD} on PC & Mac`,
    icon: Laptop,
    steps: [
      {
        number: 1,
        title: `Choose Your ${FOCUS_KEYWORD} Plan`,
        description: 'Pick 3, 6, or 12 month access. Multi-screen plans work great for dual-monitor setups or home office background streaming.',
        chips: ['20,000+ Channels', '120,000+ Movies', 'Windows & Mac', 'USD Pricing'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `View ${FOCUS_KEYWORD} Plans`, href: '/pricing', type: 'internal' },
        tip: '2 or 3 screen plans are perfect for home office background streaming alongside a TV in another room.',
      },
      {
        number: 2,
        title: 'Contact Support on WhatsApp',
        description: 'Reach our support team on WhatsApp. We confirm the plan in USD and send a secure one-time payment link. Ask for the M3U URL if you plan to use VLC for instant playback.',
        chips: ['Credit Card', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Chat on WhatsApp', type: 'whatsapp', message: `Hi! I need setup ${FOCUS_KEYWORD} on PC or Mac.` },
        tip: 'For Windows, ask for the M3U URL if you want to stream immediately in VLC before installing a full IPTV player.',
      },
      {
        number: 3,
        title: 'Download IPTV Smarter Pro',
        description: 'IPTV Smarter Pro runs on Windows 10/11 and macOS (Intel + Apple Silicon) with keyboard shortcuts, multi-window support, and full 4K hardware-accelerated playback.',
        chips: ['Windows 10/11', 'macOS', 'Multi window', '4K Ready'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Download IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'VLC Media Player also works if you prefer a lightweight option. Just paste the M3U URL into VLC → Open Network Stream.',
      },
      {
        number: 4,
        title: 'Choose Your Setup Method',
        description: 'Auto setup by our support team, or manual entry of your M3U URL or Xtream Codes credentials directly in IPTV Smarter Pro.',
        methods: [
          { title: 'Auto Setup by Support', subtitle: 'Recommended', points: ['Send your Device Key', 'We activate remotely', 'App connects instantly'], highlighted: true },
          { title: 'Manual Setup', subtitle: 'DIY', points: ['We send M3U URL', 'Or Xtream Codes', 'Paste and play'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'On VLC, press Ctrl+L (Windows) or Cmd+L (Mac) to view the playlist sidebar and manage channels.',
      },
      {
        number: 5,
        title: 'Load Content & Wait 1 to 2 Minutes',
        description: 'Your full IPTV catalog loads automatically. 36,000+ live channels, 120,000+ movies and TV shows, and the complete 7-day EPG guide.',
        chips: ['1 to 2 min', 'EPG Auto Load', 'Favorites Sync'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Keep the app in focus during first load for the fastest sync. Background loading works but takes slightly longer.',
      },
      {
        number: 6,
        title: `Stream ${FOCUS_KEYWORD} in 4K`,
        description: 'Your PC or Mac is ready. Stream live sports, movies, and international networks in 4K Ultra HD with hardware-accelerated playback.',
        stats: [
          { value: '20,000+', label: 'Live Channels' },
          { value: '120,000+', label: 'Movies & TV Shows' },
          { value: '4K', label: 'Quality' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Done!',
        icon: PlayCircle,
        tip: 'Enable hardware acceleration in IPTV Smarter Pro settings for smoother 4K playback and lower CPU usage.',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ — Short 8 items
// ---------------------------------------------------------------------------
const setupFaqs = [
  {
    q: 'How do I receive my login details after purchasing a plan?',
    a: 'Everything is handled live over WhatsApp. Once you confirm your plan and complete payment, our support team sends your setup details directly in the chat, usually within minutes.',
  },
  {
    q: `Which IPTV player do you recommend for setup ${FOCUS_KEYWORD}?`,
    a: 'We recommend IPTV Smarter Pro for the fastest channel zapping, lowest RAM usage, and best 4K performance across Firestick, Smart TVs, Apple devices, and PC or Mac. It is our top pick for smooth playback.',
  },
  {
    q: 'Do I need to activate IPTV Smarter Pro separately?',
    a: 'The activation service is included free with every subscription. Choose Auto Setup (send us your Device Key and we activate remotely) or Manual Setup (enter your M3U or Xtream Codes yourself).',
  },
  {
    q: `How long does setup ${FOCUS_KEYWORD} take?`,
    a: 'Most customers are streaming within 10 minutes. Installing IPTV Smarter Pro takes about 2 minutes, activation takes 1 to 2 minutes, and content loading takes 1 to 2 minutes.',
  },
  {
    q: 'Can I use my login credentials on multiple devices?',
    a: 'Yes. You can install the app on unlimited devices. The number of simultaneous streams depends on your plan, with 1 screen on the Starter, and 2 or 3 screens on the Multi-Room plans.',
  },
  {
    q: 'What should I do if I get a login error in IPTV Smarter Pro?',
    a: 'Confirm you selected the Xtream Codes API method (not M3U) and that there are no extra spaces in your username or password. If it persists, message us on WhatsApp and most issues resolve within 2 minutes.',
  },
  {
    q: `What internet speed do I need for 4K ${FOCUS_KEYWORD} streaming?`,
    a: 'For 4K Ultra HD we recommend 30 Mbps minimum. Full HD 1080p runs smoothly on 15 Mbps. Our anti-freeze server technology adapts to your connection speed automatically.',
  },
  {
    q: `Do I need a VPN to use ${FOCUS_KEYWORD}?`,
    a: 'No. Our global servers are optimized and secure. If your internet provider applies streaming throttling during peak hours, you can enable a VPN without issues.',
  },
];

// ---------------------------------------------------------------------------
// LONG-FORM Q&A
// ---------------------------------------------------------------------------
const longFormFaqs = [
  {
    q: `What devices work best for setup ${FOCUS_KEYWORD}?`,
    a: `For the best ${FOCUS_KEYWORD} experience, we recommend Amazon Firestick 4K Max for streaming sticks, Samsung Tizen or LG webOS Smart TVs for built-in apps, Apple TV 4K for the AirPlay ecosystem, and any Windows 11 or macOS Sonoma desktop for full 4K playback. All of these devices support IPTV Smarter Pro, our recommended IPTV player, and handle 4K and 60FPS content without frame drops. Older devices like Firestick Lite or second-generation Apple TV still work but cap out at Full HD. For the smoothest 4K performance, choose hardware from the last two generations.`,
  },
  {
    q: 'How does remote activation actually work?',
    a: `Remote activation is the easiest setup ${FOCUS_KEYWORD} method. After you contact us on WhatsApp and complete payment, our support team asks for your device identifier. For IPTV Smarter Pro this is a Device Key or MAC address shown on the app welcome screen. We register that key on our server, link it to your subscription, and within 60 seconds your channel list loads automatically the moment you reopen the app. No typing, no manual credentials, no risk of errors. If you prefer to handle it yourself, we also send the standard M3U URL and Xtream Codes credentials. Both methods produce identical 4K streaming performance.`,
  },
  {
    q: 'What if I have an older Smart TV that cannot install IPTV Smarter Pro?',
    a: `If your Smart TV is more than 5 years old and cannot install IPTV Smarter Pro directly, you still have options. The most popular solution is an Amazon Firestick 4K Max. It plugs into any HDMI port and turns older TVs into full 4K ${FOCUS_KEYWORD} streamers in under 5 minutes. Alternatively, an Android TV box, Nvidia Shield, or Apple TV 4K delivers the same result. Our WhatsApp support team regularly helps customers upgrade older televisions with a low-cost streaming stick. Message us and we will recommend the best device for your specific TV model and viewing habits.`,
  },
  {
    q: 'Can I switch devices later or move my subscription?',
    a: `Yes, absolutely. Your ${FOCUS_KEYWORD} subscription is tied to your account, not to a single device. If you upgrade from a Firestick to an Apple TV, add a second Smart TV, or move your setup to a new PC, simply contact our WhatsApp support team and we will re-activate the subscription on your new device, usually within 2 minutes. Device changes are unlimited and free for the entire duration of your subscription. If you need simultaneous streaming in multiple rooms, we offer 2-screen and 3-screen plans so your household can watch different content at the same time without interruption.`,
  },
];

// ---------------------------------------------------------------------------
// STEP ITEM
// ---------------------------------------------------------------------------
function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4 md:gap-6">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView
                ? 'bg-[#FFC300] shadow-lg shadow-[#FFC300]/40 scale-110'
                : 'bg-[#FFC300]/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.08 }}
          >
            <span className={`text-xl md:text-2xl font-black transition-all duration-300 ${isInView ? 'text-[#341766]' : 'text-[#FFC300]'}`}>
              {step.number}
            </span>
          </motion.div>
          {!isLast && (
            <motion.div
              className="relative w-0.5 flex-1 min-h-[60px] my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.12 + 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FFC300] to-[#6934B8]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.2 }}
              />
            </motion.div>
          )}
        </div>

        <motion.div
          className="flex-1 pb-10 md:pb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className={`bg-white border-2 rounded-2xl p-5 md:p-6 transition-all duration-500 ${isInView ? 'border-[#6934B8] shadow-md' : 'border-[#6934B8]/15'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#F5F3F9] border border-[#6934B8]/15">
                  <Icon className="w-5 h-5 text-[#6934B8]" />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#341766]">
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5F3F9] border border-[#6934B8]/10">
                <Clock className="w-3 h-3 text-[#6934B8]" />
                <span className="text-[#341766]/60 text-[10px] md:text-xs font-bold">{step.duration}</span>
              </div>
            </div>

            <p className="text-[#341766]/80 font-medium leading-relaxed text-sm md:text-base mb-4">
              {step.description}
            </p>

            {step.chips && (
              <div className="flex flex-wrap gap-2 mb-4">
                {step.chips.map((chip: string) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6934B8]/10 border border-[#6934B8]/20 text-[#341766] text-[10px] md:text-xs font-black uppercase tracking-wider">
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {step.methods && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {step.methods.map((m: any) => (
                  <div key={m.title} className={`rounded-xl p-4 border-2 transition-all ${m.highlighted ? 'bg-[#6934B8]/5 border-[#6934B8]' : 'bg-[#F5F3F9] border-[#6934B8]/15'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${m.highlighted ? 'bg-[#6934B8] text-white' : 'bg-[#6934B8]/10 text-[#6934B8]'}`}>
                        {m.subtitle}
                      </span>
                    </div>
                    <h4 className="text-sm font-black uppercase text-[#341766] mb-2">{m.title}</h4>
                    <ul className="space-y-1">
                      {m.points.map((p: string) => (
                        <li key={p} className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-[#341766]/70">
                          <CheckCircle2 className="w-3 h-3 text-[#6934B8] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {step.stats.map((s: any) => (
                  <div key={s.label} className="rounded-xl bg-[#6934B8] text-center py-3 px-2 border border-[#FFC300]/30">
                    <div className="text-base md:text-lg font-black text-[#FFC300] leading-none">{s.value}</div>
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-white mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {step.cta && (
              <div className="mb-4">
                {step.cta.type === 'internal' && (
                  <Link href={step.cta.href} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC300] text-[#341766] text-xs font-black uppercase tracking-widest hover:bg-[#e6b000] transition-all hover:scale-105 shadow-md">
                    {step.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {step.cta.type === 'external' && (
                  <a href={step.cta.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6934B8] text-white text-xs font-black uppercase tracking-widest hover:bg-[#341766] transition-all hover:scale-105 shadow-md">
                    <Download className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
                {step.cta.type === 'whatsapp' && (
                  <a href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(step.cta.message)}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all hover:scale-105 shadow-md">
                    <MessageCircle className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
              </div>
            )}

            {isInView && step.tip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-3 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/20 flex gap-2.5"
              >
                <div className="w-6 h-6 rounded-md bg-[#6934B8]/15 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-[#6934B8]" />
                </div>
                <div>
                  <p className="text-[#6934B8] font-black text-[10px] uppercase tracking-wider">Pro Tip</p>
                  <p className="text-[#341766]/75 text-xs font-medium mt-0.5">{step.tip}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const CurrentIcon = currentData.icon;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoOpen(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) iframeRef.current.src = '';
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F5F3F9] to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`Setup ${FOCUS_KEYWORD} on Firestick, Smart TV, Apple and Android`}
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
            backgroundImage: `linear-gradient(to right, #6934B8 1px, transparent 1px), linear-gradient(to bottom, #6934B8 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6934B8]/15 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 pt-24 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-[#6934B8]/20">
                <Sparkles className="w-4 h-4 text-[#FFC300]" />
                <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                  Easy {FOCUS_KEYWORD} Setup
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#341766] tracking-tighter uppercase mb-6 leading-none text-center">
                SETUP {FOCUS_KEYWORD.toUpperCase()} <br />
                <span className="text-[#6934B8]">IN UNDER 10 MINUTES</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-[#341766]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Install <strong className="text-[#341766]">IPTV Smarter Pro</strong> and let our support team handle the rest on WhatsApp. {FOCUS_KEYWORD} setup made simple for Firestick, Smart TV, Apple, and PC or Mac.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#6934B8] text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#6934B8]" /> Secure Setup</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#6934B8]" /> 10 Min Setup</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#6934B8]" /> 24/7 Support</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#6934B8]" /> 50,000+ Viewers</span>
              </div>
            </FadeInItem>


            <FadeInItem className="mt-8 relative flex justify-center">
              <button
                onClick={openVideo}
                className="cursor-pointer inline-flex items-center justify-center p-2 rounded-full bg-white border border-[#6934B8]/20 hover:border-[#6934B8]/50 transition-all duration-300 relative z-10 shadow-sm group"
                aria-label={`Watch setup ${FOCUS_KEYWORD} video tutorial`}
              >
                <div className="flex items-center gap-4 bg-[#F5F3F9] px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-[#6934B8]/15 hover:bg-white transition-colors">
                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFC300] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#341766] font-black uppercase tracking-widest text-xs sm:text-sm md:text-base">
                      Video Tutorial
                    </p>
                    <p className="text-[#341766]/60 text-[10px] sm:text-xs font-bold uppercase tracking-wide mt-0.5">
                      Visual step by step guide
                    </p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-full bg-[#FFC300]/20 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          CTA BANNER — Free Trial (dark purple)
      ========================================================== */}
      <section className="w-full bg-[#341766] py-10 px-4 sm:px-6 border-y-4 border-[#FFC300]/30 shadow-xl relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#FFC300] text-[#341766] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md animate-bounce">
              FREE 24 HOUR TRIAL
            </div>
            <div className="absolute inset-0 rounded-full bg-[#FFC300]/40 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            TRY {FOCUS_KEYWORD.toUpperCase()} WITH IPTV SMARTER PRO FREE!
          </h4>
          <p className="text-white/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            36,000+ live channels, 120,000+ movies and TV shows, live sports and PPV. Activated via WhatsApp in minutes.
          </p>
          <div className="w-full sm:w-auto mt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi! I would like the free 24 hour trial for ${FOCUS_KEYWORD} setup.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFC300] text-[#341766] hover:bg-white hover:text-[#6934B8] hover:scale-105 transition-all duration-300 px-8 sm:px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" /> <span>Get Free Trial</span>
            </a>
            <Link
              href="/pricing"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#6934B8] hover:bg-[#6934B8] hover:text-white transition-all duration-300 px-8 sm:px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl border-2 border-white"
            >
              View Plans <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          DEVICE SELECTION
      ========================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter leading-none">
            Setup {FOCUS_KEYWORD} on <span className="text-[#6934B8]">Your Device</span>
          </h2>
          <p className="text-[#341766]/70 text-base md:text-lg font-bold max-w-2xl mx-auto mt-4">
            Select your platform below for detailed step-by-step {FOCUS_KEYWORD} setup instructions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-4 sm:p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer group ${
                  isActive
                    ? 'bg-[#6934B8] text-white border-2 border-[#FFC300] shadow-xl scale-[1.02]'
                    : 'bg-white text-[#341766] border border-[#6934B8]/15 hover:border-[#6934B8]/50'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC300] text-[#341766] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors ${isActive ? 'bg-white/15 text-[#FFC300]' : 'bg-[#F5F3F9] text-[#6934B8]'}`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide mb-2">{device.name}</h3>
                <p className={`text-[10px] sm:text-xs font-bold ${isActive ? 'text-white/70' : 'text-[#341766]/50'}`}>
                  {device.steps} easy steps
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==========================================================
          TIMELINE
      ========================================================== */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6934B8] text-white font-black uppercase text-xs tracking-widest mb-4 shadow-md max-w-full border border-[#FFC300]/30">
            <CurrentIcon className="w-4 h-4 text-[#FFC300] shrink-0" />
            <span className="truncate">{currentData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter">
            Setup {FOCUS_KEYWORD} <span className="text-[#6934B8]">Step by Step</span>
          </h2>
          <p className="text-[#341766]/60 text-sm md:text-base font-bold uppercase tracking-widest mt-2">
            Follow the steps for a flawless setup in under 10 minutes
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem key={step.number} step={step} index={index} isLast={index === currentData.steps.length - 1} />
          ))}
        </div>

        {/* Success Card */}
        <motion.div
          className="text-center mt-12 p-6 sm:p-8 md:p-10 rounded-3xl bg-white border-2 border-[#FFC300] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-[#6934B8] mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-3">
            {FOCUS_KEYWORD} Setup Complete!
          </h3>
          <p className="text-[#6934B8] font-bold text-sm sm:text-base max-w-md mx-auto mb-8">
            You are ready to stream with IPTV Smarter Pro. Enjoy 36,000+ channels and 120,000+ movies and TV shows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link href="/" className="cursor-pointer w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 hover:bg-[#e6b000]">
              Back to Home
            </Link>
            <Link href="/pricing" className="cursor-pointer w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-white text-[#6934B8] font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:bg-[#6934B8] hover:text-white border-2 border-[#6934B8]">
              View Plans
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ==========================================================
          WHY SETUP WITH US
      ========================================================== */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#F5F3F9]">
        <FadeIn className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#6934B8]" />
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
              Why Customers Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Why Setup {FOCUS_KEYWORD} <span className="text-[#6934B8]">With Our Team?</span>
          </h2>
          <p className="text-[#341766]/70 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Thousands of households trust our hands-on WhatsApp support to handle their entire {FOCUS_KEYWORD} setup, from plan selection to IPTV Smarter Pro activation. Here is why customers pick us over generic DIY guides.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'True Global Support Team',
              desc: 'Real people, priced in USD, available around the clock. No offshore scripts, no language barriers.',
            },
            {
              icon: Zap,
              title: 'Done-For-You Activation',
              desc: 'Send us your Device Key on WhatsApp and we handle 100% of the technical side. You only need to install IPTV Smarter Pro. Everything else is on us.',
            },
            {
              icon: Clock,
              title: 'Setup in Under 10 Minutes',
              desc: `Average setup ${FOCUS_KEYWORD} time from first message to first live channel is 8 to 10 minutes. Fastest customers activate in under 5 minutes.`,
            },
            {
              icon: PlayCircle,
              title: 'IPTV Smarter Pro Expertise',
              desc: 'We are specialists in IPTV Smarter Pro, one of the most stable IPTV players available. We know its settings, quirks, and optimizations inside out.',
            },
            {
              icon: MessageCircle,
              title: 'Real-Time WhatsApp Chat',
              desc: 'No email tickets, no waiting days for replies. Our support answers on WhatsApp in under 2 minutes, 24 hours a day, 7 days a week.',
            },
            {
              icon: Lock,
              title: 'Secure Global Payments',
              desc: 'Pay safely with Credit Card, PayPal, Crypto, or Apple & Google Pay. All transactions are encrypted and processed with 256-bit SSL.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-white border border-[#6934B8]/15 rounded-2xl p-6 md:p-7 hover:border-[#6934B8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#6934B8]" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#341766] uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-[#341766]/75 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeIn className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[#341766]/70 text-sm sm:text-base font-medium leading-relaxed mb-8">
            Setup {FOCUS_KEYWORD} does not need to be complicated. Our team has activated thousands of subscriptions across Firestick, Smart TVs, Apple devices, Android boxes, and computers. Every customer gets the same white-glove service: real-time WhatsApp chat, live guidance, and a complete IPTV Smarter Pro activation service. Whether you are cord-cutting for the first time or upgrading from a slow cable package, we will get you streaming in under 10 minutes.
          </p>
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi! I want ${FOCUS_KEYWORD} setup help from your team.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest shadow-lg shadow-[#FFC300]/30 hover:scale-105 hover:bg-[#e6b000] transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Get {FOCUS_KEYWORD} Setup Help
          </a>
        </FadeIn>
      </section>

      {/* ==========================================================
          SUPPORT GRID
      ========================================================== */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-6 sm:p-8 text-center shadow-md group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#F5F3F9] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#6934B8]/10 transition-colors">
              <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-[#6934B8]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
              Free 24 Hour {FOCUS_KEYWORD} Trial
            </h3>
            <p className="text-[#6934B8] text-sm font-medium mb-5">
              Try IPTV Smarter Pro and our full service free for 24 hours. Message our WhatsApp team to activate instantly.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi! I would like the free 24 hour ${FOCUS_KEYWORD} trial.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-[#341766] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Request Free Trial <ArrowRight className="w-4 h-4 text-[#6934B8]" />
            </a>
          </div>

          <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-6 sm:p-8 text-center shadow-md group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#341766] mb-2 uppercase tracking-wide">
              24/7 {FOCUS_KEYWORD} Setup Support
            </h3>
            <p className="text-[#6934B8] text-sm font-medium mb-5">
              Our team handles everything over WhatsApp: plan, payment, IPTV Smarter Pro activation, and full {FOCUS_KEYWORD} setup.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi! I need ${FOCUS_KEYWORD} setup help.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-green-700 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Chat on WhatsApp <ArrowRight className="w-4 h-4 text-green-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Share */}
      <div className="w-full flex justify-center items-center mb-10 bg-white">
        <ShareButtons />
      </div>

      {/* ==========================================================
          FAQ — Short 8 items
      ========================================================== */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white relative" aria-label={`Setup ${FOCUS_KEYWORD} FAQs`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#6934B8]/10 blur-[120px] rounded-full pointer-events-none" />

        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F5F3F9] px-4 py-2 rounded-full mb-6 border border-[#6934B8]/20">
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">Setup FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tighter leading-none">
            Setup {FOCUS_KEYWORD} <span className="text-[#6934B8]">Questions</span>
          </h2>
          <p className="text-[#341766]/70 font-bold text-base md:text-lg max-w-2xl mx-auto mt-4">
            Quick answers to the most common {FOCUS_KEYWORD} setup questions.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`cursor-pointer w-full text-left bg-white border-2 ${openFaqIndex === i ? 'border-[#FFC300]' : 'border-[#6934B8]/15'} rounded-2xl p-5 sm:p-6 hover:border-[#6934B8] transition-all duration-300 group shadow-sm`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#6934B8]' : 'text-[#341766] group-hover:text-[#6934B8]'} flex items-start sm:items-center gap-3 text-left`}>
                    <span className={`${openFaqIndex === i ? 'text-[#6934B8]' : 'text-[#341766]/30'} font-black text-xl sm:text-2xl shrink-0`}>Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#6934B8]' : 'text-[#341766]/30 group-hover:text-[#6934B8]/50'}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#341766]/80 font-medium leading-relaxed text-sm sm:text-base pl-9 sm:pl-12 border-l-4 border-[#6934B8] ml-1 sm:ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ==========================================================
          LONG-FORM Q&A
      ========================================================== */}
      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#F5F3F9] relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#6934B8]/10 blur-[130px] rounded-full pointer-events-none" />

        <FadeIn className="text-center mb-12 md:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Globe className="w-4 h-4 text-[#6934B8]" />
            <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
              Deep Dive Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Setup {FOCUS_KEYWORD} <span className="text-[#6934B8]">Explained in Depth</span>
          </h2>
          <p className="text-[#341766]/70 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Longer answers for the questions our support team hears most often. Each answer helps you get the most out of your {FOCUS_KEYWORD} subscription and IPTV Smarter Pro setup.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-6 relative z-10">
          {longFormFaqs.map((item, idx) => (
            <FadeInItem key={idx} className="bg-white border border-[#6934B8]/15 rounded-2xl p-6 md:p-8 hover:border-[#6934B8] transition-colors shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#341766] uppercase tracking-tight mb-4 flex items-start gap-3">
                <span className="text-[#6934B8] text-2xl shrink-0">Q.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-[#341766]/80 font-medium leading-relaxed text-sm sm:text-base pl-6 sm:pl-8 border-l-4 border-[#6934B8]">
                {item.a}
              </p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi! I have a question about ${FOCUS_KEYWORD} setup.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#341766] text-white font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#6934B8] transition-transform shadow-lg border-2 border-[#FFC300]"
          >
            <Phone className="w-5 h-5 text-[#FFC300]" /> Ask Our Team on WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* ==========================================================
          VIDEO MODAL
      ========================================================== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeVideo(); }}
        >
          <div className="relative w-full max-w-4xl">
            <button onClick={closeVideo} className="cursor-pointer absolute -top-12 right-0 text-white/70 hover:text-[#FFC300] transition-colors flex items-center gap-2 text-xs sm:text-sm font-bold z-10 uppercase tracking-widest">
              <X className="w-5 h-5 shrink-0" /> Close Video
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#6934B8] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`Setup ${FOCUS_KEYWORD} - Complete Installation Tutorial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}