'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/channels-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// ---------------------------------------------------------------------------
// Lightweight Circular US Flag
// ---------------------------------------------------------------------------
const FlagUS = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-us"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-us)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
        <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
      ))}
      <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
    </g>
  </svg>
);

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Trimix IPTV', href: '/trimix-iptv' },
  { name: 'Pricing & Plans', href: '/pricing' },
  { name: 'Setup Guide', href: '/setup' },
  { name: 'Reviews & Feedback', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog & Guide', href: '/blog' },
  { name: 'Support', href: '/support' },
  { name: 'Reseller Program', href: '/reseller' },
];

const legalLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund & Guarantee Policy', href: '/refund-policy' },
  { name: 'DMCA Policy', href: '/dmca' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#341766] text-white pt-16 border-t-4 border-[#6934B8] overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC300]/70 to-transparent" />

      {/* Main Footer Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex cursor-pointer"
                aria-label={`${CONSTANTS.FOCUS_KEYWORD} - Home`}
              >
                <div className="w-auto h-15 bg-[#F5F3F9] py-2 px-4 rounded-full flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt={`${CONSTANTS.FOCUS_KEYWORD} Logo`}
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              <p className="text-sm md:text-base font-bold text-white/85 max-w-sm leading-relaxed mb-5">
                Stream 36,000+ live channels and 120,000+ movies &amp; shows in 4K Ultra HD with{" "}
                <strong className="text-[#FFC300]">{CONSTANTS.FOCUS_KEYWORD}</strong>.
                Premium {CONSTANTS.SECONDARY_FOCUS_KEYWORD} plans, instant setup, and 24/7 support — all with no contract.
              </p>

              {/* Coverage Focus Badge */}
              <div className="inline-flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-white/70 shrink-0">
                  Serving:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                  <div className="flex items-center gap-1 group cursor-default" title="United States">
                    <FlagUS />
                    <span className="text-[10px] font-black uppercase text-white group-hover:text-[#FFC300] transition-colors">
                      US
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={CONSTANTS.SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.FOCUS_KEYWORD} on Twitter`}
                className="group cursor-pointer w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FFC300] hover:border-[#FFC300] transition-all duration-300 active:scale-95"
              >
                <Twitter className="w-4 h-4 text-white/80 group-hover:text-[#341766] transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.FOCUS_KEYWORD} on Instagram`}
                className="group cursor-pointer w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FFC300] hover:border-[#FFC300] transition-all duration-300 active:scale-95"
              >
                <Instagram className="w-4 h-4 text-white/80 group-hover:text-[#341766] transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.FOCUS_KEYWORD} on Facebook`}
                className="group cursor-pointer w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FFC300] hover:border-[#FFC300] transition-all duration-300 active:scale-95"
              >
                <Facebook className="w-4 h-4 text-white/80 group-hover:text-[#341766] transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFC300] pb-1 inline-block">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-white/80 hover:text-[#FFC300] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel Packages */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFC300] pb-1 inline-block">
              Channel Packages
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/channels/${category.slug}`}
                    className="cursor-pointer text-white/80 hover:text-[#FFC300] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFC300] pb-1 inline-block">
              Legal
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-white/80 hover:text-[#FFC300] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM FOOTER BAR — brand purple with white payment shells          */}
      {/* ------------------------------------------------------------------- */}
      <div
        className="relative border-t-2 border-[#FFC300]/40 py-6 px-6 lg:px-12 shadow-lg z-20"
        style={{ backgroundColor: '#6934B8' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright text */}
          <p className="text-base md:text-sm font-extrabold text-white tracking-wide text-center md:text-left drop-shadow-sm">
            © {new Date().getFullYear()} <span className="text-[#FFC300]">{CONSTANTS.FOCUS_KEYWORD}</span>. All rights reserved.
          </p>

          {/* Payment cards on white shell */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {CONSTANTS.PAYMENT_METHODS.map((item) => (
              <div
                key={item.name}
                className="relative h-10 w-16 shrink-0 rounded-lg border border-white/30 bg-white p-1 shadow-sm hover:scale-105 hover:border-[#FFC300] hover:shadow-[0_0_15px_rgba(255,195,0,0.4)] transition-all duration-200"
                title={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain p-1 filter drop-shadow-sm opacity-95"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}