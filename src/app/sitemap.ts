import { env } from '@/config/env';
import { ROOT_PAGE_SLUGS } from '@/constants/page-registry';
import { TOOL_SLUGS } from '@/constants/feature-pages';
import type { MetadataRoute } from 'next';

const DEDICATED_ROOT_PATHS = ['/', '/enterprise', '/pricing'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;

  return [
    ...DEDICATED_ROOT_PATHS.map((path) => ({
      url: path === '/' ? base : `${base}${path}`,
    })),
    ...ROOT_PAGE_SLUGS.map((slug) => ({ url: `${base}/${slug}` })),
    ...TOOL_SLUGS.map((slug) => ({ url: `${base}/tools/${slug}` })),
  ];
}
