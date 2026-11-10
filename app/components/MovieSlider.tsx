'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;

// ---------------------------------------------------------------------------
// IMAGE COUNTS
// ---------------------------------------------------------------------------
const MOVIES_COUNT = 16;
const SERIES_COUNT = 16;
const SPORTS_COUNT = 14;

// ---------------------------------------------------------------------------
// UNIQUE TITLES + UNIQUE ALTS (one per image, no duplicates)
// ---------------------------------------------------------------------------
const MOVIE_TITLES = [
  'Latest Action Blockbuster',
  'Top-Rated Drama Film',
  '4K Sci-Fi Cinema Release',
  'Award-Winning Thriller',
  'Family Adventure Movie',
  'Epic Fantasy Feature',
  'Bestselling Comedy Film',
  'Classic Cinema Remaster',
  'International Box Office Hit',
  'Superhero Movie Premiere',
  'Suspense Mystery Film',
  'Hollywood Romance Release',
  'Historical War Drama',
  'Animated Feature Film',
  'Crime Documentary Feature',
  'Independent Cinema Pick',
];

const MOVIE_ALTS = [
  `Streaming the latest action blockbuster in crisp 4K on ${FOCUS_KEYWORD}`,
  `Award-winning drama film playing on Firestick via ${FOCUS_KEYWORD}`,
  `Sci-fi cinema release in Ultra HD for movie night on ${FOCUS_KEYWORD}`,
  `Suspense thriller available on demand on Roku with ${FOCUS_KEYWORD}`,
  `Family adventure film ready to watch on Apple TV with ${FOCUS_KEYWORD}`,
  `Epic fantasy feature in razor-sharp 4K on Android TV via ${FOCUS_KEYWORD}`,
  `Top-rated comedy now streaming on ${FOCUS_KEYWORD}`,
  `Classic cinema remaster in Full HD on demand with ${FOCUS_KEYWORD}`,
  `International box office hit playing on Smart TV via ${FOCUS_KEYWORD}`,
  `Superhero premiere in the on-demand library on Firestick via ${FOCUS_KEYWORD}`,
  `Mystery film streaming on ${FOCUS_KEYWORD}`,
  `Hollywood romance release now showing on Roku via ${FOCUS_KEYWORD}`,
  `Historical war drama in 4K Ultra HD on Apple TV via ${FOCUS_KEYWORD}`,
  `Animated family feature streaming on Android TV via ${FOCUS_KEYWORD}`,
  `Crime documentary playing on demand via ${FOCUS_KEYWORD}`,
  `Independent film pick streaming on ${SECONDARY_KEYWORD}`,
];

const SERIES_TITLES = [
  'Trending Drama Series',
  'Binge-Worthy Crime Show',
  'Award-Winning TV Series',
  'Sci-Fi Streaming Series',
  'Comedy Sitcom Boxset',
  'Popular Fantasy Series',
  'Reality TV Show Collection',
  'Mystery Thriller Series',
  'Historical Period Drama',
  'Medical Drama Series',
  'Animated Series for Adults',
  'Romantic Drama Boxset',
  'Political Thriller Show',
  'Superhero TV Series',
  'Documentary Series Collection',
  'International Streaming Series',
];

const SERIES_ALTS = [
  `Trending drama show streaming in 4K on Smart TV with ${FOCUS_KEYWORD}`,
  `Binge-worthy crime show ready on Firestick via ${FOCUS_KEYWORD}`,
  `Award-winning TV show playing on Android TV with ${FOCUS_KEYWORD}`,
  `Sci-fi show available on demand with ${FOCUS_KEYWORD}`,
  `Comedy sitcom boxset ready to watch on Roku via ${FOCUS_KEYWORD}`,
  `Popular fantasy show streaming in Ultra HD on ${FOCUS_KEYWORD}`,
  `Reality TV collection on Apple TV via ${FOCUS_KEYWORD}`,
  `Mystery thriller playing on demand with ${FOCUS_KEYWORD}`,
  `Historical period drama in Full HD on Firestick via ${FOCUS_KEYWORD}`,
  `Medical drama on the on-demand library with ${FOCUS_KEYWORD}`,
  `Animated adult show streaming in crisp 4K via ${FOCUS_KEYWORD}`,
  `Romantic drama boxset playing on ${FOCUS_KEYWORD}`,
  `Political thriller in 4K on Smart TV via ${FOCUS_KEYWORD}`,
  `Superhero TV show playing on ${SECONDARY_KEYWORD}`,
  `Documentary collection on Roku via ${FOCUS_KEYWORD}`,
  `International show streaming on Apple TV via ${FOCUS_KEYWORD}`,
];

const SPORTS_TITLES = [
  'Live NFL Football Game',
  'NBA Basketball Live Match',
  'MLB Baseball Broadcast',
  'UFC Pay-Per-View Event',
  'Formula 1 Race Broadcast',
  'NHL Hockey Live Game',
  'Premier League Soccer Match',
  'Tennis Grand Slam Match',
  'NCAA College Football',
  'Boxing Championship Fight',
  'ESPN Live Sports Stream',
  'Golf PGA Tour Live',
  'MLS Soccer Match',
  'Main Event PPV Broadcast',
];

const SPORTS_ALTS = [
  `Live NFL football game streaming in 4K on Firestick via ${FOCUS_KEYWORD}`,
  `NBA basketball live match on Smart TV with ${FOCUS_KEYWORD}`,
  `MLB baseball broadcast streaming live on Roku via ${FOCUS_KEYWORD}`,
  `UFC pay-per-view event playing in 60FPS via ${FOCUS_KEYWORD}`,
  `Formula 1 race broadcast live on Apple TV via ${FOCUS_KEYWORD}`,
  `NHL hockey live game in crisp 4K on ${FOCUS_KEYWORD}`,
  `Premier League soccer match streaming live via ${FOCUS_KEYWORD}`,
  `Tennis Grand Slam match playing in Full HD via ${FOCUS_KEYWORD}`,
  `NCAA college football live on Android TV via ${FOCUS_KEYWORD}`,
  `Boxing championship fight streaming live tonight via ${FOCUS_KEYWORD}`,
  `ESPN live sports stream playing in 4K via ${FOCUS_KEYWORD}`,
  `Golf PGA Tour live on ${FOCUS_KEYWORD}`,
  `MLS soccer match streaming live via ${FOCUS_KEYWORD}`,
  `Main Event PPV broadcast in 4K Ultra HD via ${FOCUS_KEYWORD}`,
];

// ---------------------------------------------------------------------------
// DATA ARRAYS
// Rebranded image folder names: dodo-iptv-* → trimix-iptv-*
// Rename your asset files in public/img/sliders/... accordingly, or tell me
// to keep the old filenames and I'll revert just these path prefixes.
// ---------------------------------------------------------------------------
const movies = Array.from({ length: MOVIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/trimix-iptv-movies-${number}`,
    alt: MOVIE_ALTS[i],
  };
});

const series = Array.from({ length: SERIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/trimix-iptv-serie-${number}`,
    alt: SERIES_ALTS[i],
  };
});

const sports = Array.from({ length: SPORTS_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/trimix-iptv-sports-${number}`,
    alt: SPORTS_ALTS[i],
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ---------------------------------------------------------------------------
// INFINITE SLIDER
// ---------------------------------------------------------------------------
const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  fadeBgColor = '#FFFFFF',
  cardBorderColor = 'rgba(105,52,184,0.2)',
  cardBgColor = '#F5F3F9',
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  fadeBgColor?: string;
  cardBorderColor?: string;
  cardBgColor?: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-3" aria-hidden="true">
      {/* Side Fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeBgColor}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeBgColor}, transparent)` }}
      />

      <motion.div
        className="flex w-max gap-4 md:gap-6 px-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          const isFirstHalf = idx < items.length;
          const isPriority = isFirstHalf && idx < 6;

          const isDuplicate = idx >= items.length;
          const altText = isDuplicate ? '' : item.alt;

          return (
            <button
              key={key}
              onClick={scrollToPricing}
              tabIndex={idx >= items.length ? -1 : 0}
              aria-hidden="true"
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 block cursor-pointer group text-left bg-transparent border-none p-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative aspect-[2/3] rounded-xl overflow-hidden border shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ borderColor: cardBorderColor, backgroundColor: cardBgColor }}
              >
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={altText}
                    width={208}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    priority={isPriority}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full" style={{ backgroundColor: cardBgColor }} />
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN SECTION
// Light-theme section backgrounds:
//   Row 1 (Movies)  → white
//   Row 2 (Series)  → #F5F3F9
//   Row 3 (Sports)  → white
// ---------------------------------------------------------------------------
export default function MovieSlider() {
  return (
    <section className="w-full" aria-label={`${FOCUS_KEYWORD} media catalog overview`}>
      {/* ROW 1: Movies (White Background) */}
      <div className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#6934B8] text-white text-xs font-black uppercase tracking-wider">
              4K Cinema
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#341766] uppercase tracking-tight">
              Latest Blockbuster Releases
            </h2>
          </div>
          <p className="text-[#341766]/75 text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Part of the 120,000+ on-demand library inside every {SECONDARY_KEYWORD}. Stream the newest cinema hits in crisp Ultra HD, ready to watch on any device you own.
          </p>
        </div>
        <InfiniteSlider
          items={movies}
          direction="left"
          speed={45}
          fadeBgColor="#FFFFFF"
          cardBorderColor="rgba(105,52,184,0.2)"
          cardBgColor="#F5F3F9"
        />
      </div>

      {/* ROW 2: Series (Light Gray Background) */}
      <div className="w-full py-12 sm:py-16 bg-[#F5F3F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#FFC300] text-[#341766] text-xs font-black uppercase tracking-wider">
              VOD Series
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#341766] uppercase tracking-tight">
              Trending TV Shows &amp; Boxsets
            </h2>
          </div>
          <p className="text-[#341766]/75 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Binge complete boxsets from leading global networks. Fresh titles land every day across our {FOCUS_KEYWORD} service.
          </p>
        </div>
        <InfiniteSlider
          items={series}
          direction="right"
          speed={40}
          fadeBgColor="#F5F3F9"
          cardBorderColor="rgba(105,52,184,0.2)"
          cardBgColor="#FFFFFF"
        />
      </div>

      {/* ROW 3: Sports (White Background) */}
      <div className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#6934B8] text-white text-xs font-black uppercase tracking-wider">
              Live Sports
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#341766] uppercase tracking-tight">
              Live Sports &amp; PPV Events
            </h2>
          </div>
          <p className="text-[#341766]/75 text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Catch every kickoff, tip-off, and fight night live — including ESPN, Fox Sports, Formula 1, and Main Event PPV, all inside {FOCUS_KEYWORD}.
          </p>
        </div>
        <InfiniteSlider
          items={sports}
          direction="left"
          speed={50}
          fadeBgColor="#FFFFFF"
          cardBorderColor="rgba(105,52,184,0.2)"
          cardBgColor="#F5F3F9"
        />
      </div>
    </section>
  );
}