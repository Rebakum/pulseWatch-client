import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import PortEasySetupSteps from './Sections/PortEasySetupSteps';
import PortMonitoringHero from './Sections/PortMonitoringHero';
import PortReliabilitySection from './Sections/PortReliabilitySection';
import StatusPagesSection from './Sections/PortStatusPagesSection';
import TeamMembersSection from './Sections/PortTeamMembersSection';
import {
  PortAdvancedFeaturesSection,
  PortAlertingSection,
  PortBenefitsSection,
  PortServiceCoverageSection,
  PortSignalsSection,
  PortUseCasesSection,
} from './Sections/PortMonitoringContentSections';
import {
  PortMonitoringArticles,
  PortMonitoringFaq,
  PortMonitoringFreeAccountCta,
  PortMonitoringTestimonials,
} from './Sections/PortMonitoringBottomSections';

export default function PortMonitoringPage() {
  return (
    <div>
      <PortMonitoringHero />
      <LogoMarquee />
      <PortReliabilitySection />
      <PortEasySetupSteps />
      <StatusPagesSection />
      <TeamMembersSection />
      <PortAdvancedFeaturesSection />
      <PortSignalsSection />
      <PortServiceCoverageSection />
      <PortAlertingSection />
      <PortBenefitsSection />
      <PortUseCasesSection />
      <PortMonitoringTestimonials />
      <PortMonitoringFaq />
      <PortMonitoringArticles />
      <PortMonitoringFreeAccountCta />
    </div>
  );
}
