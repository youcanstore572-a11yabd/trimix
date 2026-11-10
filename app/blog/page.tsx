import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  Search,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------------------------
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/blog`;
const POSTS_PER_PAGE = 6;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `${BRAND} Blog | Setup Guides, Tips & News 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `${BRAND} blog with setup guides, app reviews, and streaming tips for Firestick, Smart TV and mobile. Updated weekly with fresh news.`
);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Blog - Setup Guides and Streaming Tips`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    `${FOCUS_KEYWORD} blog`,
    `${FOCUS_KEYWORD} guide`,
    `${FOCUS_KEYWORD} tips`,
    'best iptv provider',
    'iptv provider blog',
    'iptv setup guide',
    'iptv firestick setup',
    'iptv smarters pro guide',
    'iptv reviews',
    'iptv subscription',
    '4k iptv',
    'iptv smart tv guide',
    'streaming tips',
    'iptv news 2026',
  ],
};

// ---------------------------------------------------------------------------
// CATEGORY CONFIG
// ---------------------------------------------------------------------------
const CATEGORIES = [
  { id: 'all', label: 'All Posts' },
  { id: 'setup', label: 'Setup Guides' },
  { id: 'review', label: 'Reviews' },
  { id: 'sports', label: 'Live Sports' },
  { id: 'tips', label: 'Tips & Tricks' },
  { id: 'news', label: 'News' },
];

function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || kw.includes('setup guide')) return 'setup';
  if (title.includes('review') || title.includes('compare') || title.includes('best')) return 'review';
  if (title.includes('sport') || kw.includes('live sports')) return 'sports';
  if (title.includes('tip') || title.includes('troubleshoot')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Setup Guide',
    review: 'Review',
    sports: 'Live Sports',
    tips: 'Tips & Tricks',
    news: 'News',
  };
  return map[id] || 'Guide';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime;
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} min read`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// SORT POSTS BY DATE DESC
// ---------------------------------------------------------------------------
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts[0];
const restPosts = sortedPosts.slice(1);

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS
// ---------------------------------------------------------------------------
const BlogSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${PAGE_URL}/#blog`,
        name: `${BRAND} Blog`,
        description: `Setup guides, reviews, and ${FOCUS_KEYWORD} tips for Firestick, Smart TV, and mobile streaming.`,
        url: PAGE_URL,
        inLanguage: 'en-US',
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}/#article`,
          headline: post.title,
          description: post.description || post.excerpt || '',
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: { '@id': `${SITE_URL}/#organization` },
          image: {
            '@type': 'ImageObject',
            url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
          },
          keywords: (post.keywords || []).join(', '),
        })),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}/#collection`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="blog-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// BLOG CARD COMPONENT
// ---------------------------------------------------------------------------
function BlogCard({ post, priority = false }: { post: any; priority?: boolean }) {
  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="cursor-pointer group relative flex flex-col bg-[#EDEADE] rounded-3xl overflow-hidden border-2 border-[#6934B8]/30 hover:border-[#FFD532] hover:shadow-[0_20px_50px_rgba(255,213,50,0.25)] hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#000814]">
        <Image
          src={post.image}
          alt={`${post.title} - ${BRAND} blog`}
          width={800}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6934B8] text-[#EDEADE] text-[10px] font-black uppercase tracking-wider shadow-lg">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#000814]/80 backdrop-blur-md text-[#EDEADE] text-[10px] font-black uppercase tracking-wider border border-white/10">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#341766]/60 mb-3">
          <Calendar className="w-3 h-3 text-[#6934B8]" />
          <span>{dateStr}</span>
          <span className="text-[#6934B8]">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-base md:text-lg font-black text-[#341766] uppercase tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-[#6934B8] transition-colors">
          {post.title}
        </h3>

        <p className="text-[#341766]/70 text-sm font-medium leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.description || post.excerpt || ''}
        </p>

        <div className="pt-4 border-t border-[#341766]/10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[#6934B8] font-black text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
            Read Article
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <div className="w-8 h-8 rounded-xl bg-[#6934B8]/10 border border-[#6934B8]/30 flex items-center justify-center text-[#6934B8] group-hover:bg-[#FFD532] group-hover:text-[#341766] group-hover:border-[#FFD532] transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// FEATURED CARD COMPONENT
// ---------------------------------------------------------------------------
function FeaturedCard({ post }: { post: any }) {
  const categoryLabel = getCategoryLabel(getPostCategory(post));
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="cursor-pointer group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#EDEADE] rounded-[2rem] overflow-hidden border-2 border-[#FFD532] hover:shadow-[0_25px_60px_rgba(255,213,50,0.3)] transition-all duration-500"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#000814]">
        <Image
          src={post.image}
          alt={`${post.title} - Featured ${BRAND} article`}
          width={900}
          height={600}
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#000814]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6934B8] text-[#EDEADE] text-[11px] font-black uppercase tracking-widest shadow-xl border border-[#FFD532]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD532]" />
            Featured
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#341766]/60 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6934B8]/10 text-[#6934B8] border border-[#6934B8]/30">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#6934B8]" />
            {dateStr}
          </span>
          <span className="text-[#6934B8]">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#6934B8]" />
            {readTime}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#341766] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#6934B8] transition-colors">
          {post.title}
        </h2>

        <p className="text-[#341766]/70 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
          {post.description || post.excerpt || ''}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD532] text-[#341766] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all shadow-lg border border-[#341766]/20">
            Read Full Article
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-[#341766]/50 text-xs font-bold uppercase tracking-wider">
            by {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function BlogListing() {
  const postsForGrid = restPosts;
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const currentPosts = postsForGrid.slice(0, POSTS_PER_PAGE);

  const tagCounts: Record<string, number> = {};
  blogPosts.forEach((post) => {
    (post.keywords || []).forEach((kw: string) => {
      const clean = kw.toLowerCase().trim();
      if (clean.length > 2 && clean.length < 40) {
        tagCounts[clean] = (tagCounts[clean] || 0) + 1;
      }
    });
  });
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 16)
    .map(([tag]) => tag);

  return (
    <>
      <BlogSchema />

      <div className="flex flex-col min-h-screen bg-[#341766] text-[#EDEADE]">

        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6934B8]/20 blur-[150px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #6934B8 1px, transparent 1px), linear-gradient(to bottom, #6934B8 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#6934B8] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFD532]/30">
              <BookOpen className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#EDEADE] font-black text-xs uppercase tracking-widest">
                {FOCUS_KEYWORD} Blog
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#EDEADE] mb-6">
              {BRAND.toUpperCase()} <br />
              <span className="text-[#FFD532]">BLOG & GUIDES</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#EDEADE]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Setup guides, app reviews, streaming tips, and the latest news. Everything you need to get the most out of your {FOCUS_KEYWORD} subscription.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFD532]" />
                {blogPosts.length} Articles
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD532]" />
                Updated Weekly
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 text-[#FFD532]" />
                24/7 Support
              </span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER CHIPS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  cat.id === 'all'
                    ? 'bg-[#FFD532] text-[#341766] border-[#FFD532] shadow-lg shadow-[#FFD532]/30'
                    : 'bg-[#EDEADE]/5 text-[#EDEADE]/70 border-white/10 hover:bg-[#6934B8]/20 hover:text-[#EDEADE] hover:border-[#6934B8]/60'
                }`}
                aria-label={`Filter by ${cat.label}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED POST */}
        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#FFD532] rounded-full" />
              <h2 className="text-sm font-black uppercase tracking-widest text-[#FFD532]">
                Featured Article
              </h2>
            </div>
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#FFD532] rounded-full" />
            <h2 className="text-sm font-black uppercase tracking-widest text-[#FFD532]">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EDEADE]/5 text-[#EDEADE]/40 border border-white/10 text-xs font-black uppercase tracking-widest cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`cursor-pointer w-10 h-10 rounded-full text-xs font-black transition-all ${
                    idx === 0
                      ? 'bg-[#FFD532] text-[#341766] shadow-lg shadow-[#FFD532]/30'
                      : 'bg-[#EDEADE]/5 text-[#EDEADE]/70 border border-white/10 hover:bg-[#6934B8]/20 hover:text-[#EDEADE] hover:border-[#6934B8]/60'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                type="button"
                disabled={totalPages <= 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  totalPages > 1
                    ? 'bg-[#6934B8]/20 text-[#FFD532] border border-[#FFD532]/40 hover:bg-[#FFD532] hover:text-[#341766] cursor-pointer'
                    : 'bg-[#EDEADE]/5 text-[#EDEADE]/40 border border-white/10 cursor-not-allowed'
                }`}
                aria-label="Next page"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        {/* WHATSAPP CTA STRIP */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFD532]/40 bg-gradient-to-br from-[#6934B8] via-[#341766] to-[#6934B8] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,213,50,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFD532] text-[#341766] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Need Help?
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#EDEADE] uppercase tracking-tighter leading-tight mb-4">
                Get Free {FOCUS_KEYWORD} Setup Help
              </h3>
              <p className="text-[#EDEADE]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Our team is on WhatsApp 24/7 to help with Firestick, Smart TV, or any device. Guided IPTV Smarters Pro activation included.
              </p>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hi ${BRAND}, I found your blog and need setup help.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD532] text-[#341766] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#341766]/30"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="bg-[#EDEADE] rounded-3xl p-8 md:p-12 border-2 border-[#6934B8]/30 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#341766] leading-tight mb-4">
              Ready to Stream <span className="text-[#6934B8]">{FOCUS_KEYWORD}?</span>
            </h3>
            <p className="text-[#341766]/70 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
              Choose from 3, 6, or 12 month plans starting at USD $29. Guided WhatsApp setup, 36,000+ channels, and 120,000+ movies and TV shows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pricing"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD532] text-[#341766] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#341766]/20"
              >
                View {BRAND} Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/setup"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#341766] text-[#EDEADE] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all border-2 border-[#FFD532]"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}