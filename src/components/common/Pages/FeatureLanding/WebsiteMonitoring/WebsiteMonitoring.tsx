import type { LandingSection, LandingSectionType } from '@/types/landing';
import type { ComponentType } from 'react';
import AdvancedFeatures from './sections/AdvancedFeatures';
import ArticleCards from './sections/ArticleCards';
import FeatureRows from './sections/FeatureRows';
import HeroSection from './sections/HeroSection';
import IconCards from './sections/IconCards';
import SetupShowcase from './sections/SetupShowcase';
import SpotlightRows from './sections/SpotlightRows';
import Testimonials from './sections/Testimonials';

/**
 * Maps every section type to its component. Each key receives exactly the data
 * shape declared for that union member, so a missing or miswired section is a
 * compile error — no `any`, no assertions.
 */
type SectionComponentMap = {
  [K in LandingSectionType]: ComponentType<{
    data: Extract<LandingSection, { type: K }>['data'];
  }>;
};

const SECTION_COMPONENTS = {
  hero: HeroSection,
  featureRows: FeatureRows,
  iconCards: IconCards,
  setupShowcase: SetupShowcase,
  advancedFeatures: AdvancedFeatures,
  spotlightRows: SpotlightRows,
  testimonials: Testimonials,
  articleCards: ArticleCards,
} satisfies SectionComponentMap;

interface LandingPageProps {
  sections: readonly LandingSection[];
}

/**
 * Narrows each section to its member before rendering. The `never` assignment
 * in the default branch fails the build if a union member has no case here.
 */
const renderSection = (section: LandingSection, index: number) => {
  switch (section.type) {
    case 'hero': {
      const SectionComponent = SECTION_COMPONENTS.hero;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'featureRows': {
      const SectionComponent = SECTION_COMPONENTS.featureRows;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'iconCards': {
      const SectionComponent = SECTION_COMPONENTS.iconCards;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'setupShowcase': {
      const SectionComponent = SECTION_COMPONENTS.setupShowcase;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'advancedFeatures': {
      const SectionComponent = SECTION_COMPONENTS.advancedFeatures;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'spotlightRows': {
      const SectionComponent = SECTION_COMPONENTS.spotlightRows;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'testimonials': {
      const SectionComponent = SECTION_COMPONENTS.testimonials;
      return <SectionComponent key={index} data={section.data} />;
    }
    case 'articleCards': {
      const SectionComponent = SECTION_COMPONENTS.articleCards;
      return <SectionComponent key={index} data={section.data} />;
    }
    default: {
      const exhaustive: never = section;
      return exhaustive;
    }
  }
};

export default function LandingPage({ sections }: LandingPageProps) {
  return <>{sections.map(renderSection)}</>;
}
