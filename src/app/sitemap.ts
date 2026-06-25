import type { MetadataRoute } from 'next';

import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', ...navigation.map((item) => item.href)];

  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8
  }));
}

