import type {
  ArticleCardsSectionData,
  FaqSectionData,
  TestimonialsSectionData,
} from '@/types/landing';

import ArticleCards from '../FeatureLanding/WebsiteMonitoring/sections/ArticleCards';
import FaqSection from '../FeatureLanding/WebsiteMonitoring/sections/FaqSection';
import Testimonials from '../FeatureLanding/WebsiteMonitoring/sections/Testimonials';
import KeywordFreeAccountCta from '../FeatureLanding/KeywordMonitoring/KeywordFreeAccountCta';

const TESTIMONIALS: TestimonialsSectionData = {
  title: [
    { text: 'What users love about our ping monitoring' },
    { text: '.', tone: 'brand' },
  ],
  items: [
    {
      name: 'PulseWatch user',
      role: 'Software engineer',
      headline: 'A quick way to know when a host goes offline',
      body: 'Ping checks help me spot connectivity problems quickly, and the response-time history makes it easier to see when a server starts slowing down.',
      source: 'G2.com',
    },
    {
      name: 'PulseWatch user',
      role: 'IT team lead',
      headline: 'Simple monitoring for the devices we rely on',
      body: 'It is straightforward to add a host and choose how often it should be checked. Alerts help our team investigate network interruptions sooner.',
      source: 'G2.com',
    },
    {
      name: 'PulseWatch user',
      role: 'Developer',
      headline: 'Useful visibility into uptime and latency',
      body: 'Having reachability and response-time information together gives us a clearer picture when diagnosing a server or network issue.',
      source: 'Trustpilot.com',
    },
  ],
};

const FAQ: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'What is ping monitoring and how does it work?',
      answer:
        'Ping monitoring periodically sends an ICMP echo request to a host or IP address. If the host responds within the timeout, it is reachable; if it does not, the check is marked as down and an alert can be sent.',
    },
    {
      question: 'What metrics does ping monitoring measure?',
      answer:
        'Ping checks can report whether a host is reachable, its round-trip response time, and packet loss across checks or monitoring locations.',
    },
    {
      question: 'What is a good ping response time?',
      answer:
        'A good response time depends on distance and network requirements. Lower and more consistent latency is generally better; compare a host with its normal baseline and alert on meaningful increases.',
    },
    {
      question: "What's the difference between ping monitoring and website monitoring?",
      answer:
        'Ping monitoring checks network-level reachability using ICMP. Website monitoring makes an HTTP or HTTPS request and can validate a page response, status code, or content.',
    },
    {
      question: "What's the difference between ping monitoring and port monitoring?",
      answer:
        'Ping checks whether a host responds to ICMP. Port monitoring attempts a connection to a specific TCP or UDP service port, which can verify that an application service is accepting connections.',
    },
    {
      question: 'What types of devices can I monitor with ping?',
      answer:
        'You can monitor servers, routers, network appliances, and other devices that are reachable from the monitoring locations and configured to respond to ICMP echo requests.',
    },
    {
      question: "My server shows as down but it's actually up. What's wrong?",
      answer:
        'The host or firewall may block ICMP, a network route may be unavailable from the check location, or the response may exceed the timeout. Confirm that ICMP echo requests are allowed and review checks from multiple regions.',
    },
    {
      question: 'Can I monitor both an IP address and a domain name?',
      answer:
        'Yes. Configure a ping monitor with a public IP address or a hostname that resolves to the host you want to check.',
    },
    {
      question: 'How do I check my ping?',
      answer:
        'Create a ping monitor for a hostname or IP address. PulseWatch will run checks at the configured interval and show reachability and response-time results in your dashboard.',
    },
    {
      question: 'Is ping monitoring free?',
      answer:
        'Ping monitoring is available with a free PulseWatch account. Check the current plans page for monitor limits and the latest feature details.',
    },
    {
      question: 'How often does PulseWatch check my server with ping?',
      answer:
        'The check interval depends on your monitor settings and plan. Choose an available interval when creating or editing a monitor.',
    },
    {
      question: 'Does PulseWatch support IPv6 ping monitoring?',
      answer:
        'IPv6 availability depends on the monitor configuration and the selected monitoring location. Use an IPv6 address and verify that the host permits ICMPv6 echo requests.',
    },
  ],
};

const ARTICLES: ArticleCardsSectionData = {
  title: 'Relevant articles.',
  items: [
    {
      icon: 'target',
      title: '10 Best Ping Monitoring Tools for 2026',
      description:
        'Compare ping monitoring tools, their features, pricing, and the types of network checks they support.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'ethernet',
      title: 'Mastering Network Monitoring: Your Guide to Uninterrupted Excellence',
      description:
        'Learn how to identify latency, packet loss, bursts, and other network issues before they affect users.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'clock',
      title: 'The Invisible Threat: Understanding Domain Hijacking and Its Consequences',
      description:
        'Understand how domain hijacking affects availability and what monitoring can reveal when traffic is redirected.',
      cta: { label: 'Read more' },
    },
  ],
};

export function PingMonitoringTestimonials() {
  return <Testimonials data={TESTIMONIALS} />;
}

export function PingMonitoringFaq() {
  return <FaqSection data={FAQ} />;
}

export function PingMonitoringArticles() {
  return <ArticleCards data={ARTICLES} />;
}

export function PingMonitoringFreeAccountCta() {
  return <KeywordFreeAccountCta />;
}
