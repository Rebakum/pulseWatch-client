import {
  Activity,
  Bell,
  ChartNoAxesCombined,
  KeyRound,
  Mail,
  MessageCircle,
  MessageSquare,
  MonitorCheck,
  MonitorUp,
  Phone,
  ShieldCheck,
  Smartphone,
  TimerReset,
  ThumbsUp,
  Webhook,
  Zap,
} from 'lucide-react';

export const CHANNELS = [
  { title: 'Email', Icon: Mail },
  { title: 'SMS', Icon: Smartphone },
  { title: 'Voice call', Icon: Phone },
  { title: 'Mobile app push', Icon: Bell },
  { title: 'Microsoft Teams', Icon: MessageSquare },
  { title: 'Slack', Icon: MessageCircle },
  { title: 'Google Chat', Icon: MessageSquare },
  { title: 'PagerDuty', Icon: Activity },
  { title: 'Pushbullet', Icon: Zap },
  { title: 'Webhooks', Icon: Webhook },
] as const;

export const BENEFITS = [
  {
    title: 'Improved customer experience',
    description:
      'Uptime monitoring enables you to provide a seamless user experience, which can enhance relationships and loyalty among your customers.',
    Icon: ThumbsUp,
  },
  {
    title: 'Get valuable insights and reports',
    description:
      'Stay informed and up-to-date with monthly reports delivered via email. These summaries provide a detailed overview of your overall uptime, number of incidents, total downtime, and the longest incident.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Build trust with status pages',
    description:
      'Custom status pages can serve as a demonstration of your SLA. Promote transparency and reduce the workload of your customer support team.',
    Icon: ShieldCheck,
  },
];

export const MONITORS = [
  { title: 'Website monitoring', Icon: MonitorUp, href: '/website-monitoring' },
  { title: 'SSL monitoring', Icon: ShieldCheck, href: '/ssl-monitoring' },
  { title: 'Port monitoring', Icon: MonitorCheck, href: '/port-monitoring' },
  { title: 'Cron job monitoring', Icon: TimerReset, href: '/cron-job-monitoring' },
  { title: 'Keyword monitoring', Icon: KeyRound, href: '/keyword-monitoring' },
  { title: 'Ping monitoring', Icon: Activity, href: '/ping-monitoring' },
] as const;

export const BUSINESS_FEATURES = [
  {
    title: 'Protect brand reputation',
    description:
      'Enhance customer loyalty and trust of your customers while avoiding bad social reviews and product ratings.',
  },
  {
    title: 'No tech skills required',
    description:
      'Setting up your first monitor is simple and can be done without any installation.',
  },
  {
    title: 'Responsive live chat',
    description:
      'Our quick-response customer support team is ready to assist you via email or chat.',
  },
] as const;

export const REVIEWS = [
  {
    name: 'Will B., CEO & President',
    title: 'Great tool to monitor status of your website',
    text: 'I cannot say anything negative about PulseWatch. It lets us know when clients cannot access their accounts and provides real-time updates.',
  },
  {
    name: 'Costas V., Technical Manager & Supervisor',
    title: 'Great value with the free plan!',
    text: 'Easily easy to use, add monitors of different kinds and monitor your services. Beats the competition in response time even with the free plan.',
  },
  {
    name: 'Mark L., Operations Manager',
    title: 'Great service',
    text: 'Great service that allows you to monitor the downtime of the website in multiple ways. Integrations with different software allow for an easy notification stream.',
  },
  {
    name: 'Eyal C., CEO',
    title: 'Must have tool!',
    text: 'Easy to use, simple, monitoring our sites are needed. Couldn’t ask for more.',
  },
  {
    name: 'Drew M., CEO',
    title: 'Great product, great support!',
    text: 'It just worked. Intuitive interface. Support answered my question fast and was very helpful.',
  },
  {
    name: 'Bret W., Managing Director',
    title: 'Reliable, expandable and extremely well priced',
    text: 'I always know within seconds of a server or endpoint going down and can take action. Excellent price, excellent service.',
  },
] as const;

export const FAQS = [
  {
    question: 'Can I delegate different access levels to my team members?',
    answer:
      'PulseWatch allows you to assign different access permissions to your employees based on their roles and responsibilities. You can grant them access to manage monitors, view reports, add or edit monitors, or receive alerts while keeping configuration access limited.',
  },
  {
    question: 'Do you offer tailored solutions for larger enterprises?',
    answer:
      'Yes. Larger teams can scale monitoring, notification channels, and team access to their needs. Visit our enterprise page to explore advanced options.',
  },
  {
    question: 'How does uptime monitoring support strategic decision-making?',
    answer:
      'Uptime history and reports help you understand reliability trends, prioritize improvements, and make informed decisions about the services your business depends on.',
  },
] as const;
