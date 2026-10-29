import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import DomainAdvancedFeaturesSection from './Sections/DomainAdvancedFeaturesSection';
import DomainExpirationStepsSection from './Sections/DomainExpirationStepsSection';
import DomainFinalCtaSection from './Sections/DomainFinalCtaSection';
import DomainHealthInsightsSection from './Sections/DomainHealthInsightsSection';
import DomainMonitoringFeaturesSection from './Sections/DomainMonitoringFeaturesSection';
import DomainMonitoringHero from './Sections/DomainMonitoringHero';
import {
  PulseWatchAlertingSection,
  PulseWatchStatusPages,
  PulseWatchTeamSection,
} from './Sections/DomainMonitoringSection';
import DomainMonitoringTypesSection from './Sections/DomainMonitoringTypesSection';
import DomainTestimonialsSection from './Sections/DomainTestimonialsSection';

const DomainMonitoringPage = () => {
  return (
    <div>
      <DomainMonitoringHero />
      <LogoMarquee />
      <DomainMonitoringFeaturesSection />
      <DomainAdvancedFeaturesSection />
      <DomainExpirationStepsSection />
      <PulseWatchStatusPages />
      <PulseWatchTeamSection />
      <PulseWatchAlertingSection />
      <DomainHealthInsightsSection />
      <DomainMonitoringTypesSection />
      <DomainTestimonialsSection />
      <DomainFinalCtaSection />
    </div>
  );
};

export default DomainMonitoringPage;
