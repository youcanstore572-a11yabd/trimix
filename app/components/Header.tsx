'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Close mobile navigation drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Setup', href: '/setup' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#6934B8]/15 py-2.5 shadow-md'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Brand Logo */}
            <div className="flex bg-white py-2 px-4 rounded-full items-center">
              <Link href="/" className="flex items-center group cursor-pointer" aria-label={`${CONSTANTS.BRAND_NAME} Home`}>
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} - Premium IPTV Provider Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-full"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Pill */}
            <nav className="hidden lg:block" aria-label="Main Navigation">
              <ul
                className={`flex items-center gap-1.5 backdrop-blur-md px-4 py-1.5 rounded-full border shadow-sm transition-colors duration-300 ${
                  scrolled
                    ? 'bg-[#F5F3F9] border-[#6934B8]/15'
                    : 'bg-white/70 border-white/40'
                }`}
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`font-black uppercase tracking-wider text-xs xl:text-sm transition-all duration-200 px-4 py-2 rounded-full inline-block cursor-pointer ${
                          active
                            ? 'bg-[#6934B8] text-white shadow-md'
                            : 'text-[#341766] hover:text-[#6934B8] hover:bg-[#6934B8]/10'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/pricing"
                className="group/btn cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-2 sm:py-3 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_15px_45px_rgba(255,195,0,0.65)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/60 mb-4"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-[#6934B8] p-2.5 rounded-xl bg-white border border-[#6934B8]/30 shadow-sm focus:outline-none z-50 relative active:scale-95 transition-transform"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#6934B8]" /> : <Menu className="w-6 h-6 text-[#6934B8]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Drawer — light theme */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="w-full max-w-sm px-6 flex flex-col items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer w-full text-center py-4 rounded-2xl text-lg font-black tracking-widest uppercase transition-all duration-200 border ${
                isActive(link.href)
                  ? 'text-white bg-[#6934B8] border-[#6934B8] shadow-lg'
                  : 'text-[#341766] bg-[#F5F3F9] border-[#6934B8]/20 hover:bg-[#FFC300] hover:text-[#341766] hover:border-[#FFC300]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-full pt-4">
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
                className="group/btn cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-2 sm:py-3 rounded-full bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#FFC300]/40 hover:from-[#FFC300] hover:to-[#E6B000] hover:shadow-[0_15px_45px_rgba(255,195,0,0.65)] active:scale-95 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]/60 mb-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}