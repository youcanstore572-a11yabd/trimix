'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { ReactElement } from 'react';

// ---------------------------------------------------------------------------
// SVG FLAG COMPONENTS
// ---------------------------------------------------------------------------
const FlagUS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    {[0, 3.7, 7.4, 11.1, 14.8, 18.5, 22.2].map((y, i) => (
      <rect key={i} y={y} width="32" height="1.85" fill="#B22234" />
    ))}
    <rect width="13" height="11.1" fill="#3C3B6E" />
  </svg>
);

const FlagCA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <rect width="8" height="24" fill="#D80621" />
    <rect x="24" width="8" height="24" fill="#D80621" />
    <path fill="#D80621" d="M16 6l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 17l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 6z" />
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#012169" />
    <path stroke="#FFF" strokeWidth="4.8" d="M0 0l32 24M32 0L0 24" />
    <path stroke="#C8102E" strokeWidth="2.4" d="M0 0l32 24M32 0L0 24" />
    <path stroke="#FFF" strokeWidth="8" d="M16 0v24M0 12h32" />
    <path stroke="#C8102E" strokeWidth="4.8" d="M16 0v24M0 12h32" />
  </svg>
);

const FlagAU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#000080" />
    <path stroke="#FFF" strokeWidth="2" d="M0 0l16 12M16 0L0 12" />
    <path stroke="#CC0000" strokeWidth="1" d="M0 0l16 12M16 0L0 12" />
    <path stroke="#FFF" strokeWidth="3" d="M8 0v12M0 6h16" />
    <path stroke="#CC0000" strokeWidth="1.5" d="M8 0v12M0 6h16" />
    <circle cx="24" cy="5" r="1" fill="#FFF" />
    <circle cx="27" cy="11" r="1" fill="#FFF" />
    <circle cx="23" cy="17" r="1" fill="#FFF" />
    <circle cx="28" cy="20" r="1" fill="#FFF" />
    <circle cx="21" cy="9" r="0.8" fill="#FFF" />
  </svg>
);

const FlagDK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#C60C30" />
    <rect x="9" width="4" height="24" fill="#FFF" />
    <rect y="10" width="32" height="4" fill="#FFF" />
  </svg>
);

const FlagSE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#006AA7" />
    <rect x="9" width="4" height="24" fill="#FECC00" />
    <rect y="10" width="32" height="4" fill="#FECC00" />
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#000" />
    <rect y="8" width="32" height="8" fill="#DD0000" />
    <rect y="16" width="32" height="8" fill="#FFCE00" />
  </svg>
);

const FlagFR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#002395" />
    <rect x="10.67" width="10.67" height="24" fill="#FFF" />
    <rect x="21.33" width="10.67" height="24" fill="#ED2939" />
  </svg>
);

const FlagIT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#009246" />
    <rect x="10.67" width="10.67" height="24" fill="#FFF" />
    <rect x="21.33" width="10.67" height="24" fill="#CE2B37" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#AA151B" />
    <rect y="6" width="32" height="12" fill="#F1BF00" />
  </svg>
);

const FlagPT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#DA291C" />
    <rect width="12" height="24" fill="#006600" />
    <circle cx="12" cy="12" r="4" fill="#FFD700" />
    <circle cx="12" cy="12" r="2.4" fill="#DA291C" />
  </svg>
);

const FlagBE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#000" />
    <rect x="10.67" width="10.67" height="24" fill="#FDDA24" />
    <rect x="21.33" width="10.67" height="24" fill="#EF3340" />
  </svg>
);

const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="12" fill="#FFF" />
    <rect y="12" width="32" height="12" fill="#DC143C" />
  </svg>
);

const FlagIE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#169B62" />
    <rect x="10.67" width="10.67" height="24" fill="#FFF" />
    <rect x="21.33" width="10.67" height="24" fill="#FF883E" />
  </svg>
);

const FlagNL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#AE1C28" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#21468B" />
  </svg>
);

const FlagCH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#DA291C" />
    <rect x="14" y="6" width="4" height="12" fill="#FFF" />
    <rect x="10" y="10" width="12" height="4" fill="#FFF" />
  </svg>
);

const FlagAT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#ED2939" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#ED2939" />
  </svg>
);

const FlagGR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    {[0, 3.4, 6.9, 10.3, 13.7, 17.1, 20.6, 24].map((y, i) => (
      <rect key={i} y={y} width="32" height="3.4" fill="#0D5EAF" />
    ))}
    <rect width="13.7" height="13.7" fill="#0D5EAF" />
    <rect x="5.5" width="2.7" height="13.7" fill="#FFF" />
    <rect y="5.5" width="13.7" height="2.7" fill="#FFF" />
  </svg>
);

const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#BA0C2F" />
    <rect x="9" width="4" height="24" fill="#FFF" />
    <rect y="10" width="32" height="4" fill="#FFF" />
    <rect x="10" width="2" height="24" fill="#00205B" />
    <rect y="11" width="32" height="2" fill="#00205B" />
  </svg>
);

const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <rect x="9" width="4" height="24" fill="#003580" />
    <rect y="10" width="32" height="4" fill="#003580" />
  </svg>
);

const FlagJP = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <circle cx="16" cy="12" r="6" fill="#BC002D" />
  </svg>
);

const FlagCN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#DE2910" />
    <circle cx="6" cy="6" r="2.4" fill="#FFDE00" />
    <circle cx="11" cy="3" r="0.9" fill="#FFDE00" />
    <circle cx="12.5" cy="5.5" r="0.9" fill="#FFDE00" />
    <circle cx="12.5" cy="8.5" r="0.9" fill="#FFDE00" />
    <circle cx="11" cy="11" r="0.9" fill="#FFDE00" />
  </svg>
);

const FlagAE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#00732F" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#000" />
    <rect width="8" height="24" fill="#FF0000" />
  </svg>
);

const FlagQA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <path d="M9 0h23v24H9L15 21L9 18L15 15L9 12L15 9L9 6L15 3L9 0z" fill="#8A1538" />
  </svg>
);

const FlagIN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#FF9933" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#138808" />
    <circle cx="16" cy="12" r="2.4" fill="none" stroke="#000080" strokeWidth="0.6" />
  </svg>
);

const FlagPK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#01411C" />
    <rect width="8" height="24" fill="#FFF" />
    <circle cx="21" cy="11" r="4" fill="#FFF" />
    <circle cx="22.5" cy="10" r="3.6" fill="#01411C" />
    <circle cx="22" cy="7" r="0.6" fill="#FFF" />
  </svg>
);

// ---------------------------------------------------------------------------
// COUNTRY LIST
// ---------------------------------------------------------------------------
type CountryEntry = { name: string; code: string; Flag: () => ReactElement };

const COUNTRY_POOL: CountryEntry[] = [
  { name: 'Canada', code: 'CA', Flag: FlagCA },
  { name: 'United Kingdom', code: 'UK', Flag: FlagUK },
  { name: 'Australia', code: 'AU', Flag: FlagAU },
  { name: 'Denmark', code: 'DK', Flag: FlagDK },
  { name: 'Sweden', code: 'SE', Flag: FlagSE },
  { name: 'Germany', code: 'DE', Flag: FlagDE },
  { name: 'France', code: 'FR', Flag: FlagFR },
  { name: 'Italy', code: 'IT', Flag: FlagIT },
  { name: 'Spain', code: 'ES', Flag: FlagES },
  { name: 'Portugal', code: 'PT', Flag: FlagPT },
  { name: 'Belgium', code: 'BE', Flag: FlagBE },
  { name: 'Poland', code: 'PL', Flag: FlagPL },
  { name: 'Ireland', code: 'IE', Flag: FlagIE },
  { name: 'Netherlands', code: 'NL', Flag: FlagNL },
  { name: 'Switzerland', code: 'CH', Flag: FlagCH },
  { name: 'Austria', code: 'AT', Flag: FlagAT },
  { name: 'Greece', code: 'GR', Flag: FlagGR },
  { name: 'Norway', code: 'NO', Flag: FlagNO },
  { name: 'Finland', code: 'FI', Flag: FlagFI },
  { name: 'Japan', code: 'JP', Flag: FlagJP },
  { name: 'China', code: 'CN', Flag: FlagCN },
  { name: 'UAE', code: 'AE', Flag: FlagAE },
  { name: 'Qatar', code: 'QA', Flag: FlagQA },
];

const USA_ENTRY: CountryEntry = { name: 'United States', code: 'US', Flag: FlagUS };

// ---------------------------------------------------------------------------
// SEQUENCE BUILDER — USA every 7 countries, never two USA in a row
// ---------------------------------------------------------------------------
const buildCountrySequence = (total: number): CountryEntry[] => {
  const sequence: CountryEntry[] = [];
  let poolIndex = 0;

  for (let i = 0; i < total; i++) {
    const shouldInsertUSA = i > 0 && i % 7 === 0;
    const previousIsUSA = sequence[sequence.length - 1]?.code === 'US';

    if (shouldInsertUSA && !previousIsUSA) {
      sequence.push(USA_ENTRY);
    } else {
      while (COUNTRY_POOL[poolIndex % COUNTRY_POOL.length].code === 'US') {
        poolIndex++;
      }
      sequence.push(COUNTRY_POOL[poolIndex % COUNTRY_POOL.length]);
      poolIndex++;
    }
  }

  return sequence;
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function CountryFlagsBar() {
  const loopItems = useMemo(() => {
    const base = buildCountrySequence(56);
    return [...base, ...base];
  }, []);

  return (
    <section className="w-screen max-w-[100vw] bg-[#ffc300] py-6 my-6 relative z-10 overflow-hidden ml-[calc(50%-50vw)]">
      <div className="w-full mb-4">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B]">
            36,000+ Live Channels From 100+ Countries
          </span>
        </div>
      </div>

      {/* Full viewport width infinite slider */}
      <div className="relative w-screen max-w-[100vw] overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#FFD532] to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#FFD532] to-transparent" />

        <motion.div
          className="flex gap-3 sm:gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          {loopItems.map((country, idx) => {
            const { Flag } = country;
            const isUSA = country.code === 'US';
            return (
              <div
                key={`${country.code}-${idx}`}
                className={`flex items-center gap-3 shrink-0 w-[180px] sm:w-[200px] h-[60px] sm:h-[64px] px-4 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  isUSA
                    ? 'bg-[#04208B] border-[#FFD532] shadow-lg shadow-[#04208B]/40'
                    : 'bg-[#04208B] border-[#1C65CE]/60 hover:border-[#FFD532]/70'
                }`}
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 shadow-md ring-2 ring-[#FFD532]/60 bg-white">
                  <Flag />
                </div>
                <span
                  className={`flex-1 text-[12px] sm:text-[13px] font-black uppercase tracking-wider leading-tight truncate ${
                    isUSA ? 'text-[#FFD532]' : 'text-[#EDEADE]'
                  }`}
                >
                  {country.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}