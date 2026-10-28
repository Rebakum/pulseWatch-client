import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import StatusPagesSection from '../KeywordMonitoring/Sections/KeywordMonitotoringStatusPageSection';
import TeamMembersSection from '../KeywordMonitoring/Sections/TeamMembersSection';
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
      <PingMonitoringSetupShowcase />
      <PingMonitoringAdvancedFeatures />
      <PingMonitoringInsightCards />
      <PingMonitoringTypeCards />
      <StatusPagesSection />
      <TeamMembersSection />
      <PingReliabilitySection />
      <PingMonitoringFaq />
      <PingMonitoringArticles />
      <PingMonitoringFreeAccountCta />
    </div>
  );
};

export default PingMonitoringpge;
