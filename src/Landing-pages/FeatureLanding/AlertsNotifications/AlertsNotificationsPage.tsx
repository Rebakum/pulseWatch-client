import ITAlertingHero from './Sections/AertsNotificationsHero';
import AlertSetupSection from './Sections/AlertSetupSection';
import AlertMonitorTypesSection from './Sections/AlertMonitorTypesSection';
import MonitoredServicesSection from './Sections/MonitoredServicesSection';
import AlertingTestimonialsSection from './Sections/AlertingTestimonialsSection';
import AlertingFaqSection from './Sections/AlertingFaqSection';
import AdvancedAlertFeatures from './Sections/AdvancedAlertFeatures';
import AlertsFinalCta from './Sections/AlertsFinalCta';

export default function AlertsNotificationsPage() {
  return (
    <div>
      <ITAlertingHero />
      <AlertSetupSection />
      <AlertMonitorTypesSection />
      <MonitoredServicesSection />
      <AdvancedAlertFeatures />
      <AlertingTestimonialsSection />
      <AlertingFaqSection />
      <AlertsFinalCta />
    </div>
  );
}
