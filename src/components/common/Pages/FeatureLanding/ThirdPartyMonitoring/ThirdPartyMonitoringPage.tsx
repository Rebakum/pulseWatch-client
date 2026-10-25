import BringThirdPartySection from './BringThirdPartySection';
import FaqSection from './FaqSection';
import IncidentHistorySection from './IncidentHistorySection';
import ThirdPartyFeatureRows from './ThirdPartyFeatureRows';
import ThirdPartyMonitoringHero from './ThirdPartyMonitoringHero';
import ThirdPartyMonitoringWorks from './ThirdPartyMonitoringWorks';
import TrackProvidersSection from './TrackProvidersSection';
import WatchWhatMatters from './WatchWhatMatters';

export default function ThirdPartyMonitoringPage() {
  return (
    <div>
      <ThirdPartyMonitoringHero />
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
