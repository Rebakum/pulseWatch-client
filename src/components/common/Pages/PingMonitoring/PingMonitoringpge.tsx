import PingMonitoringHero from './PingMonitoringHero';
import PingMonitoringSetupShowcase from './PingMonitoringSetupShowcase';
import {
  PingMonitoringAdvancedFeatures,
  PingMonitoringInsightCards,
  PingMonitoringTypeCards,
} from './PingMonitoringSections';
import {
  PingMonitoringArticles,
  PingMonitoringFaq,
  PingMonitoringFreeAccountCta,
} from './PingMonitoringBottomSections';
import StatusPagesSection from '../FeatureLanding/KeywordMonitoring/KeywordMonitotoringStatusPageSection';
import TeamMembersSection from '../FeatureLanding/KeywordMonitoring/TeamMembersSection';
import PingReliabilitySection from './PingReliabilitySection';

const PingMonitoringpge = () => {
  return (
    <div>
      <PingMonitoringHero />
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
