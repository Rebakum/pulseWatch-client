import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import IncidentFaqSection from './Sections/IncidentFaqSection';
import IncidentFeatureHighlightsSection from './Sections/IncidentFeatureHighlightsSection';
import IncidentFeaturesSection from './Sections/Incidentfeaturessection';
import IncidentFinalCtaSection from './Sections/IncidentFinalCtaSection';
import IncidentHealthInsightsSection from './Sections/IncidentHealthInsightsSection';
import IncidentManagementHero from './Sections/IncidentManagementHero';
import IncidentMonitoringTypesSection from './Sections/IncidentMonitoringTypesSection';
import IncidentTestimonialsSection from './Sections/IncidentTestimonialsSection';
import StatusAppAlertingSections from './Sections/Statusappalertingsections ';

export default function IncidentManagementPage() {
  return (
    <div className="w-full overflow-x-clip">
      <IncidentManagementHero />
      <LogoMarquee />
      <IncidentFeaturesSection />
      <IncidentFeatureHighlightsSection />
      <IncidentHealthInsightsSection />
      <IncidentMonitoringTypesSection />
      <StatusAppAlertingSections />
      <IncidentTestimonialsSection />
      <IncidentFaqSection />
      <IncidentFinalCtaSection />
    </div>
  );
}
