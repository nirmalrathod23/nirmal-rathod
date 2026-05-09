import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nirmal-rathod.vercel.app';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/experience',
    '/skills',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages];
}
