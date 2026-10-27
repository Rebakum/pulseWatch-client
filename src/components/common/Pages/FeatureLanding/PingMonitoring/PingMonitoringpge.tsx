import LogoMarquee from '../../Home/LogoMarquee';
import StatusPagesSection from '../KeywordMonitoring/KeywordMonitotoringStatusPageSection';
import TeamMembersSection from '../KeywordMonitoring/TeamMembersSection';
import {
  PingMonitoringArticles,
  PingMonitoringFaq,
  PingMonitoringFreeAccountCta,
} from './PingMonitoringBottomSections';
import PingMonitoringHero from './PingMonitoringHero';
import {
  PingMonitoringAdvancedFeatures,
  PingMonitoringInsightCards,
  PingMonitoringTypeCards,
} from './PingMonitoringSections';
import PingMonitoringSetupShowcase from './PingMonitoringSetupShowcase';
import PingReliabilitySection from './PingReliabilitySection';

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
