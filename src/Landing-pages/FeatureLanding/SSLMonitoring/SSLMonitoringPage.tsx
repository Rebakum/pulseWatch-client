import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import SslAdvancedFeaturesSection from './Sections/SslAdvancedFeaturesSection';
import {
  SSLAlertingSection,
  SSLStatusPages,
  SSLTeamSection,
} from './Sections/SSLAlartMonitoringSeections';
import SslArticlesSection from './Sections/SslArticlesSection';
import SslFaqSection from './Sections/SslFaqSection';
import SslFinalCtaSection from './Sections/SslFinalCtaSection';
import SslHealthInsightsSection from './Sections/SslHealthInsightsSection';
import SSLMonitoringHero from './Sections/SSLMonitoringHero';
import SSLMonitoringReliabilitySection from './Sections/SSLMonitoringReliabilitySection';
import SslMonitoringTypesSection from './Sections/SslMonitoringTypesSection';
import SSLMonitoringWorks from './Sections/SSLMonitoringWorks';
import SslTestimonialsSection from './Sections/SslTestimonialsSection';

export default function SSLMonitoringPage() {
  return (
    <div>
      <SSLMonitoringHero />
      <LogoMarquee />
      <SslAdvancedFeaturesSection />
      <SSLMonitoringReliabilitySection />
      <SSLMonitoringWorks />
      <SslHealthInsightsSection />
      <SslMonitoringTypesSection />
      <SslTestimonialsSection />
      <SSLStatusPages />
      <SSLTeamSection />
      <SSLAlertingSection />
      <SslFaqSection />
      <SslArticlesSection />
      <SslFinalCtaSection />
    </div>
  );
}
