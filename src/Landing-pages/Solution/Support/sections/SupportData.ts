import {
  Activity,
  Info,
  Mail,
  MessageCircleMore,
  MessageSquareText,
  MonitorUp,
  Phone,
  ShieldCheck,
  Smartphone,
  TimerReset,
  Users,
  Zap,
} from 'lucide-react';

export const statusRows = [
  { label: 'UptimeRobot', percent: '99.98%' },
  { label: 'Monitoring API', percent: '100.00%' },
  { label: 'Support App', percent: '99.95%' },
];

export const statusBenefitCards = [
  {
    icon: Activity,
    title: 'Enhanced customer satisfaction',
    description: 'Transparent communication and quick updates reduce frustration and build trust.',
  },
  {
    icon: Info,
    title: 'Inform users in advance',
    description:
      'Share announcements about upcoming maintenance or outages before they turn into support tickets.',
  },
  {
    icon: Users,
    title: 'Advanced team collaboration',
    description:
      'Improve communication between support, engineering, and customer success teams with shared status visibility.',
  },
];

export const monitoredTiles = [
  { icon: MonitorUp, title: 'Website monitoring', action: 'Learn more' },
  { icon: ShieldCheck, title: 'SSL monitoring', action: 'Learn more' },
  { icon: TimerReset, title: 'Domain expiry monitoring', action: 'Learn more' },
  { icon: Zap, title: 'Key monitoring', action: 'Learn more' },
];

export const supportChannels = [
  { name: 'Email', Icon: Mail },
  { name: 'SMS', Icon: Smartphone },
  { name: 'Voice call', Icon: Phone },
  { name: 'Slack', Icon: MessageSquareText },
  { name: 'Discord', Icon: MessageCircleMore },
  { name: 'PagerDuty', Icon: Zap },
];

export const customerReviews = [
  {
    name: 'Lee E., Director of Information Technology',
    text: 'The public status page has been a huge win for us. It keeps customers informed without overwhelming our support team, and the setup was fast and simple.',
  },
  {
    name: 'Dean C., Senior Software Engineer',
    text: 'Great experience so far. We can announce incidents and share updates with customers without having to answer repetitive support questions.',
  },
  {
    name: 'Roberto B., Executive Vice President',
    text: 'Simple and reliable. Our customers trust the page for real-time updates, and it keeps our team focused on resolving issues instead of answering “is it down?” emails.',
  },
];

export const faqItems = [
  {
    question: 'How does uptime monitoring by UptimeRobot work?',
    answer:
      'We monitor your website or API from multiple locations and trigger alerts when a check fails or a service becomes unavailable. You can tune checks, error thresholds, and alert routing to fit your infrastructure.',
    open: true,
  },
  {
    question: 'How can users subscribe to live updates from the status page?',
    answer:
      'Subscribers can opt in to email notifications, and you can tailor messages to inform customers whenever there is an incident, maintenance window, or recovery notice.',
  },
  {
    question: 'Can I get uptime monthly reports to my email?',
    answer:
      'Yes. You can configure email reports and automated summaries so stakeholders keep receiving concise updates without having to check the dashboard manually.',
  },
  {
    question: 'Can I use status pages and UptimeRobot for improved collaboration?',
    answer:
      'Absolutely. Shared incidents and public updates give support, engineering, and customer teams a single source of truth during outages and maintenance windows.',
  },
];
