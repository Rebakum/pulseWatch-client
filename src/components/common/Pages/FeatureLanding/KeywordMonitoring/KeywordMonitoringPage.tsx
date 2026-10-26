import KeywordAdvancedFeatures from './KeywordAdvancedFeatures';
import KeywordArticles from './KeywordArticles';
import KeywordFaq from './KeywordFaq';
import KeywordFeatureRows from './KeywordFeatureRows';
import KeywordFreeAccountCta from './KeywordFreeAccountCta';
import KeywordIconCards from './KeywordIconCards';
import KeywordInsightCards from './KeywordInsightCards';
import KeywordMonitoringHero from './KeywordMonitoringHero';
import StatusPagesSection from './KeywordMonitotoringStatusPageSection';
import KeywordSetupShowcase from './KeywordSetupShowcase';
import KeywordTestimonials from './KeywordTestimonials';
import TeamMembersSection from './TeamMembersSection';

export default function KeywordMonitoringPage() {
  return (
    <div>
      <KeywordMonitoringHero />
      <KeywordFeatureRows />
      <KeywordSetupShowcase />
      <KeywordAdvancedFeatures />
      <KeywordInsightCards />
      <StatusPagesSection />
      <TeamMembersSection />
      <KeywordIconCards />
      <KeywordTestimonials />
      <KeywordFaq />
      <KeywordArticles />
      <KeywordFreeAccountCta />
    </div>
  );
}
