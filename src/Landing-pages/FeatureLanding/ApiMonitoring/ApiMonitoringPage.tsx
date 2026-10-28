import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import ApiAlertingSection from './Sections/ApiAlertingSection';
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
  ApiBenefitsSection,
  ApiMonitorTypes,
  ApiSignals,
} from './Sections/ApiMonitoringSections';
import ApiMonitoringSetup from './Sections/ApiMonitoringSetup';
import ApiReliabilitySection from './Sections/ApiReliabilitySection';
import ApiStatusPagesSection from './Sections/ApiStatusPagesSection';
import ApiTeamSection from './Sections/ApiTeamSection';

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
