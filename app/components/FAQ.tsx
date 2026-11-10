'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export const faqs = [
  {
    q: 'What is IPTV and how does it work?',
    a: `IPTV stands for Internet Protocol Television. Instead of a cable or satellite box, your channels and movies stream over your internet connection. With ${CONSTANTS.BRAND_NAME}, you can watch 36,000+ live channels and over 120,000 movies and shows in 4K on your Smart TV, Firestick, phone, or tablet. Setup takes minutes and your login lands in your inbox right after checkout.`,
  },
  {
    q: `What makes ${CONSTANTS.BRAND_NAME} the best IPTV Provider?`,
    a: `${CONSTANTS.BRAND_NAME} delivers a massive channel lineup — 36,000+ live channels covering the NFL, NBA, MLB, NHL, UFC, Premier League, and all major PPV events, plus 120,000+ movies and shows on demand. Our anti-freeze servers run dedicated capacity across global edge locations, so your stream stays smooth even during the Super Bowl, NBA Finals, or a packed pay-per-view night.`,
  },
  {
    q: 'Which devices are compatible with your IPTV services?',
    a: 'Almost anything you already own — Samsung and LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, plus MAG and Formuler set-top boxes. Not sure about your device? Message our 24/7 support team and we will confirm it before you subscribe.',
  },
  {
    q: 'How does the setup and activation process work?',
    a: `Once you pick your ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} plan and the number of screens you need, your M3U playlist and Xtream Codes login arrive by email within five minutes. Install a player like IPTV Extreme Pro, TiviMate, or Smart IPTV, paste your credentials, and you are streaming. Activation is instant and setup takes under five minutes.`,
  },
  {
    q: 'Can I request a free trial before I pay?',
    a: 'Yes, and we recommend it. Request a free trial and we will set you up so you can test the 4K picture quality, check the channel lineup for live sports, and make sure everything runs smooth on your device and internet connection. No contract and no pressure.',
  },
  {
    q: 'How do I install the IPTV player on my Smart TV or Firestick?',
    a: 'For Smart TVs and Firestick, download a supported player like IPTV Extreme Pro, TiviMate, Smart IPTV, or IPTV Smarters from your app store, then enter the login details we send you by email. If any step is unclear, our 24/7 support team will walk you through it step by step until you are watching.',
  },
  {
    q: 'What payment methods do you accept and what currency is used?',
    a: `All prices are in US dollars (USD $) with no contract — cancel anytime. We accept Credit Card, PayPal, and Crypto through a secure encrypted checkout. Choose a 3, 6, or 12 month ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} and pick 1, 2, or 3 screens for your household.`,
  },
  {
    q: 'Do you offer support during my IPTV Subscription?',
    a: `Yes, right through your whole ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}. Reach our team any time by email and live chat for help with installation, setup, or anything else that comes up. That includes tips to get the most out of your player app and quick fixes if you ever notice buffering on your end.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#F5F3F9] relative overflow-hidden"
      aria-label={`Frequently Asked Questions about ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6934B8]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFC300]/15 blur-[100px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border border-[#6934B8]/25 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#FFC300]" />
          <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
            Help Center
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-6 uppercase tracking-tight leading-none">
          FREQUENTLY ASKED <span className="text-[#6934B8]">QUESTIONS</span>
        </h2>
        <p className="text-[#341766]/75 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about{' '}
          <strong className="text-[#341766] font-bold">{CONSTANTS.BRAND_NAME}</strong>{' '}
          — IPTV Subscriptions, the instant email setup process, free trial, and the full channel lineup.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`relative rounded-2xl transition-all duration-300 overflow-hidden border-2 ${
                  isOpen
                    ? 'bg-white border-[#FFC300] shadow-xl shadow-[#FFC300]/25'
                    : 'bg-white border-[#6934B8]/15 hover:border-[#6934B8]/50 shadow-sm'
                }`}
              >
                {/* Accent Left Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isOpen ? 'bg-[#FFC300]' : 'bg-[#6934B8]'
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="cursor-pointer w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-all duration-300 focus:outline-none rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-center gap-4 pr-2">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#FFC300] text-[#341766]'
                          : 'bg-[#6934B8] text-white'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-[#6934B8]' : 'text-[#341766]'
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FFC300] text-[#341766] rotate-180'
                        : 'bg-[#6934B8]/10 text-[#6934B8]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="text-[#341766]/80 font-medium leading-relaxed pl-16 sm:pl-20 pr-6 sm:pr-8 text-sm sm:text-base border-t border-[#6934B8]/10 pt-4 mt-1">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}