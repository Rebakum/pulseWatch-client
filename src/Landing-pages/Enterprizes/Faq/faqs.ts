export type Faq = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const faqs: Faq[] = [
  {
    question: 'Does {brand} have SOC 2 certification?',
    answer:
      'Yes. {brand} has completed an independent SOC 2 audit, and Enterprise plans also include SSO, audit logs and a contractual SLA. If you need the latest report for procurement or a vendor review, please',
    link: { label: 'book a demo', href: '/contact' },
  },
  {
    question: 'Can I manage Enterprise monitors through the API?',
    answer:
      'Yes. The {brand} API covers the full monitor lifecycle — create, pause, edit and delete monitors, manage alert contacts, and set maintenance windows. Responses come back in JSON, XML or JSON-P, so it drops straight into your existing scripts and CI pipelines.',
  },
  {
    question: 'Who is {brand} Enterprise best suited for?',
    answer:
      'Teams running business-critical websites, APIs and infrastructure — typically 50+ endpoints, several environments and more than one person on call. Agencies, SaaS companies and in-house platform teams use {brand} Enterprise to standardise monitoring without paying observability-suite prices.',
  },
  {
    question: 'Can I share uptime with customers without exposing my internal dashboard?',
    answer:
      'Yes. Public status pages show exactly what you choose — overall and per-service uptime, incident history and maintenance schedules — while your internal dashboard, alert contacts and team members stay private. Pages can be served from your own domain with your own branding.',
  },
  {
    question: 'What should I monitor first when rolling out Enterprise?',
    answer:
      'Start with the endpoints your customers actually hit: your marketing site or app, your core API, and your login and checkout flows. Add SSL and domain expiry monitors next, then heartbeats for cron jobs and background workers so silent failures surface too.',
  },
  {
    question: 'Can we roll out monitoring across hundreds of endpoints without adding admin overhead?',
    answer:
      'Yes. Monitors can be created and maintained in bulk through the API or Terraform provider, and new monitors inherit defaults from templates, so rolling out hundreds of endpoints takes minutes rather than weeks. Checks run from multiple regions with no extra infrastructure for you to manage.',
  },
  {
    question: 'Can different teams use the same account without exposing full admin access?',
    answer:
      'Yes. Roles let you grant admin, write, read or notify-only access per person or per team. Support can watch uptime without touching configuration, while only a handful of admins change monitors and alert routing.',
  },
  {
    question: 'Will {brand} fit into our existing incident workflow and tool stack?',
    answer:
      'Almost certainly. {brand} pushes alerts to Slack, Microsoft Teams, PagerDuty, Opsgenie, Zapier and plain webhooks, so incidents land in the tools your team already lives in, and the API can feed your internal dashboards as well.',
  },
];
