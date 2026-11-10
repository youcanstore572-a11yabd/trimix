'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center py-20 sm:py-24 md:py-30 bg-white">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`${CONSTANTS.BRAND_NAME} - Page not found on the best IPTV service`}
          className="w-full h-full object-cover opacity-30 brightness-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#F5F3F9]/85 to-white/95" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6934B8]/15 rounded-full blur-[120px] animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">

          {/* 404 Number Layout Container */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#FFC300]">4</span>
              <span className="text-[#6934B8]">0</span>
              <span className="text-[#341766]">4</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#341766] mb-4 uppercase tracking-tighter">
            Page Not Found
          </h1>

          <div className="w-24 h-1.5 bg-[#FFC300] mx-auto mb-8 rounded-full" />

          <p className="text-[#341766]/75 text-base sm:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
            That page is off the air. The link might be old, or the address may have a typo. Use the shortcuts below to get back to streaming 20,000+ live channels, 120,000+ movies, and 4K Ultra HD sports on {CONSTANTS.BRAND_NAME}.
          </p>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="cursor-pointer group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border-2 border-[#6934B8]/15 hover:border-[#6934B8] hover:shadow-lg transition-all duration-300"
            >
              <Home className="w-5 h-5 text-[#6934B8] group-hover:text-[#FFC300] group-hover:scale-110 transition-all" />
              <span className="text-[#341766] text-xs font-black uppercase tracking-wider">Home</span>
            </Link>

            <Link
              href="/pricing"
              className="cursor-pointer group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border-2 border-[#6934B8]/15 hover:border-[#6934B8] hover:shadow-lg transition-all duration-300"
            >
              <Tv className="w-5 h-5 text-[#6934B8] group-hover:text-[#FFC300] group-hover:scale-110 transition-all" />
              <span className="text-[#341766] text-xs font-black uppercase tracking-wider">Plans</span>
            </Link>

            <Link
              href="/setup"
              className="cursor-pointer group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border-2 border-[#6934B8]/15 hover:border-[#6934B8] hover:shadow-lg transition-all duration-300"
            >
              <Film className="w-5 h-5 text-[#6934B8] group-hover:text-[#FFC300] group-hover:scale-110 transition-all" />
              <span className="text-[#341766] text-xs font-black uppercase tracking-wider">Setup</span>
            </Link>

            <Link
              href="/blog"
              className="cursor-pointer group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border-2 border-[#6934B8]/15 hover:border-[#6934B8] hover:shadow-lg transition-all duration-300"
            >
              <Search className="w-5 h-5 text-[#6934B8] group-hover:text-[#FFC300] group-hover:scale-110 transition-all" />
              <span className="text-[#341766] text-xs font-black uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 hover:bg-[#e6b000] shrink-0 shadow-xl border-2 border-[#FFC300]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Back to Home
            </Link>

            <Link
              href="/pricing"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#6934B8] text-[#6934B8] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 hover:bg-[#6934B8] hover:text-white shrink-0 shadow-xl"
            >
              View IPTV Subscription Plans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}