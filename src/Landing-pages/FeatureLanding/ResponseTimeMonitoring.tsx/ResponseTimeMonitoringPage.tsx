import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import ResponseTimeArticles from './Sections/ResponseTimeArticles';
import ResponseTimeFaq from './Sections/ResponseTimeFaq';
import ResponseTimeFeatureHighlights from './Sections/ResponseTimeFeatureHighlights';
import ResponseTimeFinalCta from './Sections/ResponseTimeFinalCta';
import ResponseTimeHealthInsights from './Sections/ResponseTimeHealthInsights';
import ResponseTimeMonitoringHero from './Sections/ResponseTimeMonitoringHero';
import ResponseTimeMonitoringTypes from './Sections/ResponseTimeMonitoringTypes';
import {
  ReponsTimeStatusPages,
  ReponsTimeTeamSection,
  ResponsTimeAlertingSection,
} from './Sections/ResponsTimeAlertingSection';
import ResponsTimeReliabilitySection from './Sections/ResponsTimeReliabilitySection';

export default function ResponseTimeMonitoringPage() {
  return (
    <div>
      <ResponseTimeMonitoringHero />
      <LogoMarquee />
      <ResponseTimeFeatureHighlights />
      <ResponsTimeReliabilitySection />
      <ResponseTimeHealthInsights />
      <ResponseTimeMonitoringTypes />
      <ReponsTimeStatusPages />
      <ReponsTimeTeamSection />
      <ResponsTimeAlertingSection />
      <ResponseTimeFaq />
      <ResponseTimeArticles />
      <ResponseTimeFinalCta />
    </div>
  );
}
