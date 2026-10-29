import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import {
  MultiLocationStatusPages,
  MultiLocationTeamSection,
} from './Sections/MultiLocationClosingSections';
import MultiLocationCustomerStoriesSection from './Sections/MultiLocationCustomerStoriesSection';
import MultiLocationFaqSection from './Sections/MultiLocationFaqSection';
import MultiLocationFinalCtaSection from './Sections/MultiLocationFinalCtaSection';
import MultiLocationHealthInsightsSection from './Sections/MultiLocationHealthInsightsSection';
import MultiLocationHowItWorksSection from './Sections/MultiLocationHowItWorksSection';
import MultiLocationLearningResourcesSection from './Sections/MultiLocationLearningResourcesSection';
import MultiLocationMonitoringCardsSection from './Sections/MultiLocationMonitoringCardsSection';
import MultiLocationHero from './Sections/MultiLocationMonitoringHero';
import MultiLocationReferenceFeaturesSection from './Sections/MultiLocationReferenceFeaturesSection';
import MultiLocationReliabilitySection from './Sections/MultiLocationReliabilitySection';
import MultiLocationSetupSection from './Sections/MultiLocationSetupSection';

export default function MultiLocationMonitoringPage() {
  return (
    <div>
      <MultiLocationHero />
      <LogoMarquee />
      <MultiLocationReliabilitySection />
      <MultiLocationReferenceFeaturesSection />
      <MultiLocationSetupSection />
      <MultiLocationStatusPages />
      <MultiLocationTeamSection />
      <MultiLocationHowItWorksSection />
      <MultiLocationHealthInsightsSection />
      <MultiLocationMonitoringCardsSection />
      <MultiLocationCustomerStoriesSection />
      <MultiLocationFaqSection />
      <MultiLocationLearningResourcesSection />
      <MultiLocationFinalCtaSection />
    </div>
  );
}
