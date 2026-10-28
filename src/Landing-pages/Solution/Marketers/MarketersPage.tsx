import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import MarketersBenefits from './Sections/MarketersBenefits';
import MarketersCta from './Sections/MarketersCta';
import MarketersFaq from './Sections/MarketersFaq';
import MarketersFeatureRows from './Sections/MarketersFeatureRows';
import MarketersHero from './Sections/MarketersHero';
import MarketersIntegrations from './Sections/MarketersIntegrations';
import MarketersMonitoringOverview from './Sections/MarketersMonitoringOverview';
import MarketersValue from './Sections/MarketersValue';

export default function MarketersPage() {
  return (
    <main aria-label="Uptime monitoring for marketers">
      <MarketersHero />
      <LogoMarquee />
      <MarketersFeatureRows />
      <MarketersIntegrations />
      <MarketersValue />
      <MarketersMonitoringOverview />
      <MarketersBenefits />
      <MarketersFaq />
      <MarketersCta />
    </main>
  );
}
