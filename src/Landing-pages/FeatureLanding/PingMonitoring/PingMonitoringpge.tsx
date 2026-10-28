import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import StatusPagesSection from './Sections/PingStatusPagesSection';
import TeamMembersSection from './Sections/PingTeamMembersSection';
import {
  PingMonitoringArticles,
  PingMonitoringFaq,
  PingMonitoringFreeAccountCta,
} from './Sections/PingMonitoringBottomSections';
import PingMonitoringHero from './Sections/PingMonitoringHero';
import {
  PingMonitoringAdvancedFeatures,
  PingMonitoringInsightCards,
  PingMonitoringTypeCards,
} from './Sections/PingMonitoringSections';
import PingMonitoringSetupShowcase from './Sections/PingMonitoringSetupShowcase';
import PingReliabilitySection from './Sections/PingReliabilitySection';

const PingMonitoringpge = () => {
  return (
    <div>
      <PingMonitoringHero />
      <LogoMarquee />
      <PingReliabilitySection />
      <PingMonitoringSetupShowcase />
      <PingMonitoringAdvancedFeatures />
      <PingMonitoringInsightCards />
      <PingMonitoringTypeCards />
      <StatusPagesSection />
      <TeamMembersSection />
      <PingMonitoringFaq />
      <PingMonitoringArticles />
      <PingMonitoringFreeAccountCta />
    </div>
  );
};

export default PingMonitoringpge;
