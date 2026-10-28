import type { LandingSection, LandingSectionType } from '@/types/landing';
import { Fragment, type ComponentType } from 'react';
import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import AdvancedFeatures from './sections/AdvancedFeatures';
import ArticleCards from './sections/ArticleCards';
import FaqSection from './sections/FaqSection';
import FeatureRows from './sections/FeatureRows';
import HeroSection from './sections/HeroSection';
import IconCards from './sections/IconCards';
import SetupShowcase from './sections/SetupShowcase';
import SpotlightRows from './sections/SpotlightRows';
import Testimonials from './sections/Testimonials';

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
  faq: FaqSection,
} satisfies SectionComponentMap;

interface LandingPageProps {
  sections: readonly LandingSection[];
}

const renderSection = (section: LandingSection, index: number) => {
  switch (section.type) {
    case 'hero': {
      const SectionComponent = SECTION_COMPONENTS.hero;
      return (
        <Fragment key={index}>
          <SectionComponent data={section.data} />
          <LogoMarquee />
        </Fragment>
      );
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
    case 'faq': {
      const SectionComponent = SECTION_COMPONENTS.faq;
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
