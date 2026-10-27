import {
  FEATURE_PAGES,
  RESOURCE_PAGES,
  SOLUTION_PAGES,
  TOOL_PAGES,
  type FeatureLandingPage,
} from './feature-pages';
import { NAV_ITEMS, type NavItem, type NavLink } from './navigation';

/**
 * Flat root slugs served by static routes instead of `(public)/[feature]`.
 * A registry slug matching one of these would be silently shadowed, so the
 * build fails if one is ever added.
 */
const RESERVED_ROOT_SLUGS = new Set([
  'enterprise',
  'pricing',
  'tools',
  'login',
  'register',
  'forgot-password',
  'dashboard',
]);

/** Root paths that resolve without a registry entry. */
const DEDICATED_ROOT_PATHS = new Set(['/', '/enterprise', '/pricing']);

const TOOLS_PREFIX = '/tools/';
const SOLUTIONS_PREFIX = '/solutions/';

const assertUniquePageSlugs = () => {
  const slugs = new Set<string>();

  for (const source of [FEATURE_PAGES, SOLUTION_PAGES, RESOURCE_PAGES]) {
    for (const slug of Object.keys(source)) {
      if (slugs.has(slug)) {
        throw new Error(`Duplicate landing page slug "${slug}" across registries.`);
      }
      if (RESERVED_ROOT_SLUGS.has(slug)) {
        throw new Error(
          `Landing page slug "${slug}" collides with a static route. Rename it or remove the route.`,
        );
      }
      slugs.add(slug);
    }
  }
};

assertUniquePageSlugs();

const buildRootPageRegistry = (): Record<string, FeatureLandingPage> => {
  const registry: Record<string, FeatureLandingPage> = {};

  for (const source of [FEATURE_PAGES, RESOURCE_PAGES]) {
    for (const [slug, page] of Object.entries(source)) {
      registry[slug] = page;
    }
  }

  return registry;
};

/** Flat feature and resource pages, keyed by slug. */
export const ROOT_PAGES: Record<string, FeatureLandingPage> = buildRootPageRegistry();

/** Slug list for `(public)/[feature]` generateStaticParams. */
export const ROOT_PAGE_SLUGS: string[] = Object.keys(ROOT_PAGES);

/** Solution pages served beneath `/solutions/[solution]`. */
export const SOLUTION_SLUGS: string[] = Object.keys(SOLUTION_PAGES);

export function findRootPage(slug: string): FeatureLandingPage | undefined {
  return ROOT_PAGES[slug];
}

export function findSolutionPage(slug: string): FeatureLandingPage | undefined {
  return SOLUTION_PAGES[slug];
}

export function findToolPage(slug: string): FeatureLandingPage | undefined {
  return TOOL_PAGES[slug];
}

const collectNavLinks = (items: NavItem[]): NavLink[] =>
  items.flatMap((item) => [
    ...(item.href ? [{ label: item.label, href: item.href } satisfies NavLink] : []),
    ...(item.groups ?? []).flatMap((group) => group.links),
  ]);

const findBrokenNavLinks = (links: NavLink[]): string[] =>
  links.flatMap((link) => {
    const href = link.href;
    if (!href.startsWith('/')) {
      return [];
    }

    if (DEDICATED_ROOT_PATHS.has(href)) {
      return [];
    }

    if (href.startsWith(TOOLS_PREFIX)) {
      const slug = href.slice(TOOLS_PREFIX.length);
      return TOOL_PAGES[slug] ? [] : [`${link.label} → ${href} (missing TOOL_PAGES entry)`];
    }

    if (href.startsWith(SOLUTIONS_PREFIX)) {
      const slug = href.slice(SOLUTIONS_PREFIX.length);
      return SOLUTION_PAGES[slug] ? [] : [`${link.label} → ${href} (missing SOLUTION_PAGES entry)`];
    }

    const slug = href.slice(1);
    if (ROOT_PAGES[slug]) {
      return [];
    }
    return [`${link.label} → ${href} (no registry entry or dedicated route)`];
  });

// Fail the build (and dev server) if navigation drifts away from the registries.
const brokenNavLinks = findBrokenNavLinks(collectNavLinks(NAV_ITEMS));
if (brokenNavLinks.length > 0) {
  throw new Error(`NAV_ITEMS links point to pages that do not resolve:\n- ${brokenNavLinks.join('\n- ')}`);
}
