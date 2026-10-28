import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import BringThirdPartySection from './Sections/BringThirdPartySection';
import FaqSection from './Sections/FaqSection';
import IncidentHistorySection from './Sections/IncidentHistorySection';
import ThirdPartyFeatureRows from './Sections/ThirdPartyFeatureRows';
import ThirdPartyMonitoringHero from './Sections/ThirdPartyMonitoringHero';
import ThirdPartyMonitoringWorks from './Sections/ThirdPartyMonitoringWorks';
import TrackProvidersSection from './Sections/TrackProvidersSection';
import WatchWhatMatters from './Sections/WatchWhatMatters';

export default function ThirdPartyMonitoringPage() {
  return (
    <div>
      <ThirdPartyMonitoringHero />
      <LogoMarquee />
      <ThirdPartyFeatureRows />
      <ThirdPartyMonitoringWorks />
      <WatchWhatMatters />
      <TrackProvidersSection />
      <IncidentHistorySection />
      <FaqSection />
      <BringThirdPartySection />
    </div>
  );
}
