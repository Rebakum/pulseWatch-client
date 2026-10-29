import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import AutomatedDNSMonitoringHero from './Sections/AutomatedDNSMonitoringHero';
import DnsAdvancedFeaturesSection from './Sections/DnsAdvancedFeaturesSection';
import DnsFaqSection from './Sections/DnsFaqSection';
import DnsFinalCtaSection from './Sections/DnsFinalCtaSection';
import DnsHealthInsightsSection from './Sections/DnsHealthInsightsSection';
import DNSMonitoringFeaturesSection from './Sections/DNSMonitoringFeaturesSection';
import DNSMonitoringStepsSection from './Sections/DNSMonitoringStepsSection';
import DnsMonitoringTypesSection from './Sections/DnsMonitoringTypesSection';
import PulseWatchCombinedFeatures from './Sections/PulseWatchCombinedFeatures';

export default function DnsMonitoringPage() {
  return (
    <div>
      <AutomatedDNSMonitoringHero />
      <LogoMarquee />
      <DnsAdvancedFeaturesSection />
      <DNSMonitoringFeaturesSection />
      <DNSMonitoringStepsSection />
      <DnsHealthInsightsSection />
      <DnsMonitoringTypesSection />
      <PulseWatchCombinedFeatures />
      <DnsFaqSection />
      <DnsFinalCtaSection />
    </div>
  );
}
