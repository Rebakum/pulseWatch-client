export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What is {brand}?',
    answer:
      '{brand} is an uptime monitoring platform. It checks your websites, APIs and servers around the clock and alerts you the moment something goes wrong, so you can fix issues before your users notice.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. The Free plan costs $0, includes 50 monitors with 5-minute checks and one public status page, and needs no credit card. You can upgrade whenever you need faster checks or more features.',
  },
  {
    question: 'Which {brand} plan should I choose?',
    answer:
      'Free suits personal projects and side sites. Solo adds 60-second checks and advanced monitor types for freelancers and small sites. Team adds 30-second checks, login seats and status page subscribers for small teams. Scale gives you 15-second checks, unlimited status pages and the highest limits for high-volume setups.',
  },
  {
    question: "What's the difference between the Free and Solo plans?",
    answer:
      'Solo checks every 60 seconds instead of 5 minutes and adds API, UDP, DNS, SSL, domain expiry and heartbeat monitoring, slow response alerts and maintenance windows. You also get 3 status pages with custom design and your own domain, and data retention grows from 3 to 12 months.',
  },
  {
    question: 'How often does {brand} check my website?',
    answer:
      'It depends on your plan: every 5 minutes on Free, 60 seconds on Solo, 30 seconds on Team and 15 seconds on Scale.',
  },
  {
    question: 'How do I get an alert when my website is down?',
    answer:
      'Every plan can alert you by email, SMS, voice call and Email2SMS. Paid plans add Slack, Mattermost, Telegram and Microsoft Teams, and Team and Scale also support webhooks, Zapier and PagerDuty.',
  },
  {
    question: 'Can I buy SMS or voice call credits separately?',
    answer:
      'Yes. Paid plans include free SMS / voice call credits (see the comparison table above), and extra credits can be added to any plan, including Free.',
  },
  {
    question: 'How do login seats and notify seats differ?',
    answer:
      'Login seats can sign in to the dashboard and manage monitors. Notify-only seats only receive alerts and cannot sign in. Team includes 3 login seats and Scale includes 5, and more can be added. Notify-only seats can be added from the Solo plan upwards.',
  },
  {
    question: 'What payment methods does {brand} accept?',
    answer: 'We accept Visa, Mastercard, Discover and American Express.',
  },
  {
    question: "What is {brand}'s refund policy?",
    answer:
      'We offer a 14-day money back guarantee, so you can try {brand} risk-free. If it is not for you, ask for a refund within 14 days.',
  },
  {
    question: 'Can I cancel my plan without losing my account?',
    answer:
      'Yes. There is no lock-in, you can cancel anytime, and the Free plan is always there if you only need the basics.',
  },
];
