// app/sitemap.ts
import { MetadataRoute } from 'next';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { channelsData } from '@/lib/channels-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${CONSTANTS.DOMAIN}`;

  // Use real, stable modification dates instead of dynamic `new Date()`
  // so Googlebot trusts your freshness signals and prioritizes real updates.
  const coreLastMod = new Date('2026-11-16T00:00:00.000Z');
  const channelsLastMod = new Date('2026-11-12T00:00:00.000Z');

  // -------------------------------------------------------------------------
  // 1. CORE STATIC PAGES (High-Intent & Revenue Routes Only)
  // -------------------------------------------------------------------------
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/trimix-iptv`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reseller`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/setup`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ];

  // -------------------------------------------------------------------------
  // 2. CHANNELS INDEX & DYNAMIC CATEGORIES
  // -------------------------------------------------------------------------
  const channelsIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/channels`,
      lastModified: channelsLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const channelPages: MetadataRoute.Sitemap = channelsData.map((category) => ({
    url: `${baseUrl}/channels/${category.slug}`,
    lastModified: channelsLastMod,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // -------------------------------------------------------------------------
  // 3. DYNAMIC BLOG POSTS
  // -------------------------------------------------------------------------
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // -------------------------------------------------------------------------
  // COMBINE & RETURN (Legal pages intentionally excluded from sitemap)
  // -------------------------------------------------------------------------
  return [
    ...corePages,
    ...channelsIndex,
    ...channelPages,
    ...blogPostPages,
  ];
}