import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import KeywordAdvancedFeatures from './Sections/KeywordAdvancedFeatures';
import KeywordArticles from './Sections/KeywordArticles';
import KeywordFaq from './Sections/KeywordFaq';
import KeywordFeatureRows from './Sections/KeywordFeatureRows';
import KeywordFreeAccountCta from './Sections/KeywordFreeAccountCta';
import KeywordIconCards from './Sections/KeywordIconCards';
import KeywordInsightCards from './Sections/KeywordInsightCards';
import KeywordMonitoringHero from './Sections/KeywordMonitoringHero';
import StatusPagesSection from './Sections/KeywordMonitotoringStatusPageSection';
import KeywordSetupShowcase from './Sections/KeywordSetupShowcase';
import KeywordTestimonials from './Sections/KeywordTestimonials';
import TeamMembersSection from './Sections/TeamMembersSection';

export default function KeywordMonitoringPage() {
  return (
    <div>
      <KeywordMonitoringHero />
      <LogoMarquee />
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
