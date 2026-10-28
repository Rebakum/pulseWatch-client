import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import {
  ApiMonitoringArticles,
  ApiMonitoringFaq,
  ApiMonitoringFreeAccountCta,
  ApiMonitoringTestimonials,
  ApiMonitoringUseCases,
} from './Sections/ApiMonitoringBottomSections';
import ApiMonitoringHero from './Sections/ApiMonitoringHero';
import {
  ApiAdvancedFeatures,
  ApiAlertingSection,
  ApiBenefitsSection,
  ApiMonitorTypes,
  ApiSignals,
  ApiStatusPagesSection,
  ApiTeamSection,
} from './Sections/ApiMonitoringSections';
import ApiMonitoringSetup from './Sections/ApiMonitoringSetup';
import ApiReliabilitySection from './Sections/ApiReliabilitySection';

export default function ApiMonitoringPage() {
  return (
    <div>
      <ApiMonitoringHero />
      <LogoMarquee />
      <ApiReliabilitySection />
      <ApiMonitoringSetup />
      <ApiStatusPagesSection />
      <ApiTeamSection />
      <ApiAdvancedFeatures />
      <ApiSignals />
      <ApiMonitorTypes />
      <ApiAlertingSection />
      <ApiBenefitsSection />
      <ApiMonitoringUseCases />
      <ApiMonitoringTestimonials />
      <ApiMonitoringFaq />
      <ApiMonitoringArticles />
      <ApiMonitoringFreeAccountCta />
    </div>
  );
}
