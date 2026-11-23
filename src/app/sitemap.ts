import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.irynasheremeta.com/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.irynasheremeta.com/about',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.irynasheremeta.com/tools',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
