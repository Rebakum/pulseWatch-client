import type { LandingSection } from '@/types/landing';
import UdpFreeAccountCta from './Sections/UdpFreeAccountCta';
import UdpLandingPage from './Sections/UdpLandingPage';

const UDP_SECTIONS: readonly LandingSection[] = [
  {
    type: 'hero',
    data: {
      title: 'Monitor UDP ports for services that fail',
      highlight: 'quietly.',
      description:
        'Check connectionless UDP services, catch missing responses, and find packet loss before DNS, NTP, streaming, or network applications are affected.',
      cta: { label: 'Start monitoring for free', href: '/register' },
    },
  },
  {
    type: 'featureRows',
    data: {
      rows: [
        {
          title: 'Monitor UDP services on any port.',
          description:
            'Check DNS, NTP, SNMP, VPN, voice, and custom UDP services on the ports your infrastructure depends on.',
          visual: 'monitorSchedule',
        },
        {
          title: 'Send a custom payload.',
          description:
            'Configure the UDP request content your service expects, then verify that the target responds correctly.',
          visual: 'notificationChannels',
        },
        {
          title: 'Define your packet-loss threshold.',
          description:
            'Track lost responses and timeouts over time, and get alerted when network reliability drops below your target.',
          visual: 'monitorSchedule',
        },
        {
          title: 'Validate responses with a keyword.',
          description:
            'Where the monitored service returns text, check for expected response content instead of relying on reachability alone.',
          visual: 'mobileApp',
        },
      ],
    },
  },
  {
    type: 'setupShowcase',
    data: {
      title: [{ text: 'Set up UDP monitoring in seconds.' }],
      description:
        'Choose a host and UDP port, configure the request and response check, then set the interval and alerts that fit your service.',
      cta: { label: 'Start monitoring in 30 seconds', href: '/register' },
    },
  },
  {
    type: 'spotlightRows',
    data: {
      rows: [
        {
          title: 'Build trust with clear service status pages.',
          description:
            'Share the availability of the network services your product depends on and keep customers informed during planned or unexpected incidents.',
          ctas: [
            { label: 'Check LIVE demo', href: '/status-pages', variant: 'light', arrow: true },
            { label: 'Explore Status Pages', href: '/status-pages' },
          ],
          visual: 'statusPage',
        },
        {
          title: 'Bring your network team into the loop.',
          description:
            'Give engineers and on-call responders access to monitor history and incident context so UDP service issues reach the right people.',
          ctas: [{ label: 'Explore incident management', href: '/incident-management' }],
          visual: 'teamInvite',
        },
      ],
    },
  },
  {
    type: 'advancedFeatures',
    data: {
      title: [
        { text: 'Advanced features for dependable UDP monitoring' },
        { text: '.', tone: 'brand' },
      ],
      items: [
        {
          title: 'Custom UDP payloads',
          description:
            'Send the request data required by your DNS, NTP, SNMP, or custom UDP service.',
        },
        {
          title: 'Packet-loss thresholds',
          description:
            'Track timeouts and missing responses and set a threshold that fits your network.',
        },
        {
          title: 'Multi-location checks',
          description:
            'Compare UDP service availability from monitoring regions and identify location-specific issues.',
        },
        {
          title: 'Response validation',
          description:
            'Check returned data or expected keywords where the monitored UDP protocol provides a response.',
        },
      ],
      cta: { label: 'Book an Enterprise demo', href: '/enterprise' },
    },
  },
  {
    type: 'iconCards',
    data: {
      title: [
        { text: 'Know more than just ' },
        { text: 'up', tone: 'up' },
        { text: ' or ' },
        { text: 'down', tone: 'red' },
        { text: '.' },
      ],
      description:
        'Review response time, packet loss, and availability together to understand how your UDP services behave over time.',
      items: [
        { label: 'Response time', icon: 'responseTime' },
        { label: 'Packet loss', icon: 'packetLoss' },
        { label: 'Service availability', icon: 'udp' },
      ],
    },
  },
  {
    type: 'iconCards',
    data: {
      title: [{ text: 'All your network monitoring in one place' }, { text: '.', tone: 'brand' }],
      description:
        'Keep UDP checks alongside the other services that make up your stack, all in one monitoring dashboard.',
      items: [
        { label: 'Website monitoring', icon: 'website' },
        { label: 'Keyword monitoring', icon: 'keyword' },
        { label: 'Ping monitoring', icon: 'ping' },
        { label: 'Port monitoring', icon: 'port' },
        { label: 'Cron job monitoring', icon: 'cron' },
        { label: 'DNS monitoring', icon: 'dns' },
        { label: 'API monitoring', icon: 'api' },
        { label: 'UDP monitoring', icon: 'udp' },
        { label: 'TCP monitoring', icon: 'tcp' },
      ],
    },
  },
  {
    type: 'spotlightRows',
    data: {
      rows: [
        {
          title: 'Catch UDP service incidents before they affect users.',
          description:
            'Get notified about timeouts, missing responses, and packet loss through email, SMS, voice calls, or integrations your team already uses.',
          ctas: [{ label: 'Explore IT alerting', href: '/alerts-notifications' }],
          visual: 'alertingStack',
        },
      ],
    },
  },
  {
    type: 'iconCards',
    data: {
      title: [{ text: 'Benefits of UDP monitoring' }, { text: '.', tone: 'brand' }],
      description:
        'Turn network-level signals into useful visibility for the services and devices your team operates.',
      items: [
        { label: 'Detect silent packet loss', icon: 'packetLoss' },
        { label: 'Find regional network issues', icon: 'dns' },
        { label: 'Monitor critical UDP services', icon: 'udp' },
      ],
    },
  },
  {
    type: 'iconCards',
    data: {
      title: [{ text: 'What people monitor over UDP' }, { text: '.', tone: 'brand' }],
      description:
        'Use UDP checks for network services and applications where a missing or delayed response can indicate a problem.',
      items: [
        { label: 'DNS queries', icon: 'dns' },
        { label: 'NTP time services', icon: 'clock' },
        { label: 'SNMP devices', icon: 'thirdParty' },
        { label: 'VPN services', icon: 'network' },
        { label: 'Voice and streaming', icon: 'udp' },
        { label: 'Custom UDP services', icon: 'tcp' },
      ],
    },
  },
  {
    type: 'testimonials',
    data: {
      title: [{ text: 'What teams value about UDP monitoring' }, { text: '.', tone: 'brand' }],
      items: [
        {
          name: 'Network operations team',
          role: 'Infrastructure',
          headline: 'A clearer view of UDP service health',
          body: 'Keeping response history and packet-loss signals together helps the team spot network problems and investigate where they begin.',
          source: 'PulseWatch',
        },
        {
          name: 'Platform engineering team',
          role: 'Site reliability',
          headline: 'Useful visibility into DNS and network checks',
          body: 'Monitoring the UDP services we depend on gives us another way to catch timeouts before they turn into wider availability issues.',
          source: 'PulseWatch',
        },
        {
          name: 'IT operations team',
          role: 'Network services',
          headline: 'Know when a service stops responding',
          body: 'Scheduled checks and alerts help us notice missing responses without having to watch each service manually.',
          source: 'PulseWatch',
        },
      ],
    },
  },
  {
    type: 'faq',
    data: {
      title: 'Frequently asked questions.',
      items: [
        {
          question: 'What is UDP monitoring?',
          answer:
            'UDP monitoring sends checks to a host and UDP port to help verify that the service responds as expected. Because UDP is connectionless, checks validate the service-level response rather than a TCP-style connection handshake.',
        },
        {
          question: 'What UDP services can I monitor?',
          answer:
            'Common use cases include DNS, NTP, SNMP, VPN, voice, streaming, and custom UDP services. The exact request and response validation depend on the protocol and service.',
        },
        {
          question: 'Can UDP monitoring detect packet loss?',
          answer:
            'UDP checks can record timeouts or missing responses across repeated probes. Comparing those results over time can help reveal packet loss or an unreachable service.',
        },
        {
          question: 'Can I send a custom UDP payload?',
          answer:
            'Where supported by the monitor configuration, you can provide the request payload expected by your target service and validate its response.',
        },
        {
          question: 'Can I monitor UDP from multiple locations?',
          answer:
            'Multi-location checks can help compare service behavior from different regions and identify location-specific routing or network issues.',
        },
        {
          question: 'How is UDP monitoring different from TCP port monitoring?',
          answer:
            'TCP establishes a connection before data exchange. UDP does not establish a connection, so a UDP check relies on the target service response, configured payload, or timeout behavior rather than a TCP handshake.',
        },
        {
          question: 'Can I get alerted when a UDP service stops responding?',
          answer:
            'Yes. Configure monitor notifications to alert your team when checks time out, responses are missing, or a configured threshold is exceeded.',
        },
      ],
    },
  },
  {
    type: 'articleCards',
    data: {
      title: 'Relevant articles.',
      items: [
        {
          icon: 'ethernet',
          title: 'UDP Monitoring: A Guide to Connectionless Checks',
          description:
            'Understand how UDP probes work and what their responses can tell you about network services.',
          cta: { label: 'Read more' },
        },
        {
          icon: 'clock',
          title: 'How to Monitor DNS and NTP Services',
          description:
            'Learn what to check when monitoring essential UDP-based infrastructure services.',
          cta: { label: 'Read more' },
        },
        {
          icon: 'target',
          title: 'Understanding Packet Loss and Network Timeouts',
          description:
            'Explore how missing responses affect service reliability and how monitoring can help identify issues.',
          cta: { label: 'Read more' },
        },
      ],
    },
  },
];

export default function UdpMonitoringPage() {
  return (
    <>
      <UdpLandingPage sections={UDP_SECTIONS} />
      <UdpFreeAccountCta />
    </>
  );
}
