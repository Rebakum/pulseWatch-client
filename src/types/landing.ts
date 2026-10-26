/**
 * Landing page section model.
 *
 * `LandingSection` is a discriminated union keyed by `type`. Each member pairs a
 * section type with its own strongly typed data shape:
 *
 *   | { type: 'hero'; data: HeroSectionData }
 *   | { type: 'featureRows'; data: FeatureRowsSectionData }
 *   | { type: 'iconCards'; data: IconCardsSectionData }
 *   | { type: 'setupShowcase'; data: SetupShowcaseSectionData }
 *   | { type: 'advancedFeatures'; data: AdvancedFeaturesSectionData }
 *   | { type: 'spotlightRows'; data: SpotlightRowsSectionData }
 *   | { type: 'testimonials'; data: TestimonialsSectionData }
 *   | { type: 'articleCards'; data: ArticleCardsSectionData }
 *   | { type: 'faq'; data: FaqSectionData }
 *
 * To add a section type:
 *   1. Define its data interface and add a `| { type: '…'; data: … }` union member.
 *   2. Create the section component under the relevant feature landing directory.
 *   3. Register it in `SECTION_COMPONENTS` and the `renderSection` switch inside
 *      `WebsiteMonitoring.tsx` (the `satisfies` map and `never` guard produce a
 *      compile error until you do).
 */

/**
 * Styled heading fragment. `tone` colours a single segment — used for semantic
 * accent words ("up"/"down") or a brand-gradient terminal period.
 */
export interface HeadingSegment {
  text: string;
  tone?: 'up' | 'red' | 'brand';
}

export interface HeroSectionData {
  title: string;
  highlight: string;
  description: string;
  cta?: { label: string; href: string };
}

export type FeatureRowVisualType = 'monitorSchedule' | 'notificationChannels' | 'mobileApp';

export interface FeatureRowBadge {
  sublabel: string;
  label: string;
}

export interface FeatureRowData {
  title: string;
  description: string;
  visual: FeatureRowVisualType;
  badges?: FeatureRowBadge[];
}

export interface FeatureRowsSectionData {
  rows: FeatureRowData[];
}

export type IconCardIcon =
  | 'website'
  | 'keyword'
  | 'ping'
  | 'port'
  | 'cron'
  | 'dns'
  | 'api'
  | 'udp'
  | 'tcp'
  | 'thirdParty'
  | 'responseTime'
  | 'packetLoss'
  | 'sslExpiry'
  | 'domainExpiry';

export interface IconCardItem {
  label: string;
  icon: IconCardIcon;
}

export interface IconCardsSectionData {
  title: HeadingSegment[];
  description: string;
  items: IconCardItem[];
}

export interface SetupShowcaseSectionData {
  title: HeadingSegment[];
  description: string;
  cta: { label: string; href: string };
}

export interface AdvancedFeatureItem {
  title: string;
  description: string;
}

export interface AdvancedFeaturesSectionData {
  title: HeadingSegment[];
  items: AdvancedFeatureItem[];
  cta: { label: string; href: string };
}

export type SpotlightVisual = 'statusPage' | 'teamInvite' | 'alertingStack';

export interface SpotlightCta {
  label: string;
  href: string;
  /** `light` renders the white hairline variant; defaults to the brand-blue outline. */
  variant?: 'brand' | 'light';
  /** Appends a chevron (used by the "Check LIVE demo" style CTA). */
  arrow?: boolean;
}

export interface SpotlightRowData {
  title: string;
  description: string;
  ctas: SpotlightCta[];
  visual: SpotlightVisual;
}

export interface SpotlightRowsSectionData {
  rows: SpotlightRowData[];
}

export interface TestimonialItem {
  name: string;
  role?: string;
  headline: string;
  body: string;
  /** Review platform shown as "Reviewed on {source}". */
  source: string;
}

export interface TestimonialsSectionData {
  title: HeadingSegment[];
  items: TestimonialItem[];
}

export type ArticleCardIcon = 'ethernet' | 'clock' | 'target';

export interface ArticleCardItem {
  icon: ArticleCardIcon;
  title: string;
  description: string;
  /** `href` is optional until article routes exist — omitted renders a static pill. */
  cta: { label: string; href?: string };
}

export interface ArticleCardsSectionData {
  title: string;
  items: ArticleCardItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  title: string;
  items: FaqItem[];
}

export type LandingSection =
  | { type: 'hero'; data: HeroSectionData }
  | { type: 'featureRows'; data: FeatureRowsSectionData }
  | { type: 'iconCards'; data: IconCardsSectionData }
  | { type: 'setupShowcase'; data: SetupShowcaseSectionData }
  | { type: 'advancedFeatures'; data: AdvancedFeaturesSectionData }
  | { type: 'spotlightRows'; data: SpotlightRowsSectionData }
  | { type: 'testimonials'; data: TestimonialsSectionData }
  | { type: 'articleCards'; data: ArticleCardsSectionData }
  | { type: 'faq'; data: FaqSectionData };

export type LandingSectionType = LandingSection['type'];
