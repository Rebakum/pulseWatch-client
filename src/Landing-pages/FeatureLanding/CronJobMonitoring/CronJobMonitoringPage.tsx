import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import CornJobMonitoringRelibilitySection from './Sections/CornJobMonitoringRelibilitySection';
import {
  CronJobMonitoringArticles,
  CronJobMonitoringFaq,
  CronJobMonitoringFreeAccountCta,
  CronJobMonitoringTestimonials,
  CronJobMonitoringUseCases,
} from './Sections/CronJobMonitoringBottomSections';
import CronJobMonitoringHero from './Sections/CronJobMonitoringHero';
import {
  CronJobAdvancedFeatures,
  CronJobAlertingSection,
  CronJobBenefitsSection,
  CronJobMonitorTypes,
  CronJobSignals,
} from './Sections/CronJobMonitoringSections';
import CronJobSetupSteps from './Sections/CronJobSetupSteps';
import { CronJobStatusPagesSection } from './Sections/CronJobStatusPagesSection';
import { CronJobTeamSection } from './Sections/CronJobTeamSection';

const CronJobMonitoringPage = () => (
  <div>
    <CronJobMonitoringHero />
    <LogoMarquee />
    <CornJobMonitoringRelibilitySection />
    <CronJobSetupSteps />
    <CronJobStatusPagesSection />
    <CronJobTeamSection />
    <CronJobAdvancedFeatures />
    <CronJobSignals />
    <CronJobMonitorTypes />
    <CronJobAlertingSection />
    <CronJobBenefitsSection />
    <CronJobMonitoringUseCases />
    <CronJobMonitoringTestimonials />
    <CronJobMonitoringFaq />
    <CronJobMonitoringArticles />
    <CronJobMonitoringFreeAccountCta />
  </div>
);

export default CronJobMonitoringPage;
