import type { LandingSection } from '@/types/landing';

export interface FeatureLandingHighlight {
  title: string;
  description: string;
}

export interface LandingPageSeo {
  title?: string;
  description?: string;
}

export interface FeatureLandingPage {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  highlights: FeatureLandingHighlight[];
  /** Overrides for the generated SEO title/description. Falls back to content. */
  seo?: LandingPageSeo;
  /** Page-level publication state. Nav badges remain driven by `isComingSoon`. */
  status?: 'published' | 'coming-soon';
  /** Ordered section list. Absent/empty falls back to the default FeatureLanding layout. */
  sections?: readonly LandingSection[];
}

export const FEATURE_PAGES: Record<string, FeatureLandingPage> = {
  'website-monitoring': {
    slug: 'website-monitoring',
    eyebrow: 'Website & endpoint monitoring',
    title: 'Know the moment your',
    highlight: 'website goes down',
    description:
      'Monitor your websites and endpoints from around the world and get alerted the second a check fails — before your customers notice.',
    highlights: [
      {
        title: 'Global checks',
        description: 'Verify availability from multiple regions to skip false positives.',
      },
      {
        title: '30-second intervals',
        description: 'Catch outages fast with monitoring intervals down to 30 seconds.',
      },
      {
        title: 'Rich incident context',
        description: 'Every alert includes response codes, timings, and error traces.',
      },
    ],
    sections: [
      {
        type: 'hero',
        data: {
          title: 'Downtimes happen. Get notified with',
          highlight: 'website monitoring.',
          description:
            "Don't be the last one to notice that your website is down. Try PulseWatch — the world's leading website monitoring service!",
          cta: { label: 'Start monitoring for free', href: '/website-monitoring' },
        },
      },
      {
        type: 'featureRows',
        data: {
          rows: [
            {
              title: 'Sleep well thanks to our reliable 30-sec checks.',
              description:
                'Your website can be checked every 30 seconds so you can get an instant notification in case things go wrong.',
              visual: 'monitorSchedule',
            },
            {
              title: 'Choose your preferred type of notifications.',
              description:
                'Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)',
              visual: 'notificationChannels',
            },
            {
              title: 'Stay notified on the go with our Android/iOS app.',
              description:
                'Get instant notifications, manage monitors and check your uptime statistics on the go with our sleek mobile app.',
              visual: 'mobileApp',
              badges: [
                { sublabel: 'GET IT ON', label: 'Google Play' },
                { sublabel: 'Download on the', label: 'App Store' },
              ],
            },
          ],
        },
      },
      {
        type: 'iconCards',
        data: {
          title: [{ text: 'Every layer of your stack, monitored' }, { text: '.', tone: 'brand' }],
          description:
            'Websites, APIs, servers, cron jobs. If it can go down, PulseWatch can watch it. Nine monitor types, one place to set them up.',
          items: [
            { label: 'Keyword monitoring', icon: 'keyword' },
            { label: 'Ping monitoring', icon: 'ping' },
            { label: 'Port monitoring', icon: 'port' },
            { label: 'Cron job monitoring', icon: 'cron' },
            { label: 'DNS monitoring', icon: 'dns' },
            { label: 'API monitoring', icon: 'api' },
            { label: 'UDP monitoring', icon: 'udp' },
            { label: 'TCP monitoring', icon: 'tcp' },
            { label: 'Third party monitoring', icon: 'thirdParty' },
          ],
        },
      },
      {
        type: 'setupShowcase',
        data: {
          title: [{ text: 'Set up website monitoring in seconds.' }],
          description:
            'Be the first who knows that your website is down. Reliable monitoring warns you before any significant troubles and saves you money.',
          cta: { label: 'Start monitoring in 30 seconds', href: '/register' },
        },
      },
      {
        type: 'advancedFeatures',
        data: {
          title: [
            { text: 'Advanced features for advanced users' },
            { text: '.', tone: 'brand' },
          ],
          items: [
            {
              title: 'Multi-location checks',
              description:
                'Create monitors with specific monitoring regions you can choose and catch issues that only appear in specific locations.',
            },
            {
              title: 'Recurring notifications',
              description:
                "Set threshold and recurrence parameters so that you don't miss any serious outage.",
            },
            {
              title: 'Maintenance windows',
              description: 'Set up maintenance windows to pause the monitoring during the maintenance.',
            },
            {
              title: 'Custom HTTP requests',
              description: "Need to set an advanced HTTP header? We've got you covered!",
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
            { text: 'up', tone: 'green' },
            { text: ' or ' },
            { text: 'down', tone: 'red' },
            { text: '.' },
          ],
          description:
            'Multi-location checks, response time tracking, SSL and domain expiry alerts. The details that turn raw uptime data into something you can actually act on.',
          items: [
            { label: 'Response time', icon: 'responseTime' },
            { label: 'SSL expiry', icon: 'sslExpiry' },
            { label: 'Domain expiry', icon: 'domainExpiry' },
          ],
        },
      },
      {
        type: 'spotlightRows',
        data: {
          rows: [
            {
              title: 'Build trust with public status pages.',
              description:
                'Be transparent. Share your uptime with the public and inform your customers about any planned (or unplanned) outages.',
              ctas: [
                { label: 'Check LIVE demo', href: '/status-pages', variant: 'light', arrow: true },
                { label: 'Explore Status Pages', href: '/status-pages' },
              ],
              visual: 'statusPage',
            },
            {
              title: 'Add your team members to keep them notified.',
              description:
                'You can invite all your team members to access your monitors, keep them notified and manage incidents. Choose from three levels of user access: read, write and notify-only.',
              ctas: [{ label: 'Explore incident management', href: '/incident-management' }],
              visual: 'teamInvite',
            },
            {
              title: 'Catch every incident before it reaches your users.',
              description:
                'Get notified the instant something breaks: by email, SMS, Phone call, Slack, or webhook. Watch your whole stack from one place and pick the channels that reach your team fastest, so critical issues never go unseen.',
              ctas: [{ label: 'Explore IT alerting', href: '/alerts-notifications' }],
              visual: 'alertingStack',
            },
          ],
        },
      },
      {
        type: 'testimonials',
        data: {
          title: [
            { text: 'What users love about our website monitoring' },
            { text: '.', tone: 'brand' },
          ],
          items: [
            {
              name: 'Samuel T.',
              role: 'IT Manager',
              headline: 'I wish I had known PulseWatch before!',
              body: 'Great, our banking site went down, and we got to work ASAP instead of having angry customers calling.',
              source: 'Capterra.com',
            },
            {
              name: 'Verified User in Retail',
              headline: 'Great tool for web monitoring!',
              body: "I've used this tool on and off for many years, across multiple jobs. It has changed over the years, but it's simple to set up, offers options for monitoring and SSL, and the price is crazy inexpensive (especially considering many of the other enterprise tools are significantly more expensive). You can't beat it ... especially if you're moving from zero monitoring to needing it quickly.",
              source: 'G2.com',
            },
            {
              name: 'Asin Honore',
              role: 'Website Monitoring User',
              headline: 'PulseWatch: The Ultimate Solution for Website Monitoring',
              body: "I recently started using PulseWatch, and I have to say, I'm impressed. It's incredibly easy to set up, and the interface is user-friendly. The real-time monitoring and instant alerts have been a lifesaver, ensuring that my website and servers stay online and any issues are addressed promptly. The detailed reports and performance insights are a great bonus…",
              source: 'Trustpilot.com',
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
              title: 'Top 10 Website Monitoring Tools of 2026',
              description:
                'Shopping for a website monitor? This rundown compares the top 10 tools of 2026 on features, pricing, and ease of setup.',
              cta: { label: 'Read more' },
            },
            {
              icon: 'clock',
              title: 'Ultimate Guide to Uptime Monitoring Types: HTTP, Ping, DNS, Keyword & More',
              description:
                'Not sure which checks you actually need? Get the wide breakdown of HTTP, TCP ping, port, DNS, SSL, keyword, and cron monitoring, and when to use each.',
              cta: { label: 'Read more' },
            },
            {
              icon: 'target',
              title: '6 Common Reasons for Website Downtime (and how to fix it)',
              description:
                'Want to know what actually takes sites down? Here are the six most common causes of downtime and how to fix each one.',
              cta: { label: 'Read more' },
            },
          ],
        },
      },
    ],
  },
  'third-party-monitoring': {
    slug: 'third-party-monitoring',
    eyebrow: 'Third-party monitoring',
    title: 'Watch the services you rely on with',
    highlight: 'third-party monitoring',
    description:
      'Track the SaaS vendors, CDNs, payment providers, and APIs your product depends on, and know the moment one of them degrades.',
    highlights: [
      {
        title: 'Vendor health at a glance',
        description: 'See the status of every third-party service in one place.',
      },
      {
        title: 'Dependency-aware alerts',
        description: 'Get warned before a provider outage reaches your users.',
      },
      {
        title: 'Custom endpoints',
        description: 'Watch any vendor API or status endpoint on your schedule.',
      },
    ],
  },
  'keyword-monitoring': {
    slug: 'keyword-monitoring',
    eyebrow: 'Keyword monitoring',
    title: 'Detect content changes with',
    highlight: 'keyword monitoring',
    description:
      'Watch any page for required or missing keywords and get notified when your content, pricing, or status text changes unexpectedly.',
    highlights: [
      {
        title: 'Presence & absence rules',
        description: 'Alert when a keyword appears, disappears, or both.',
      },
      {
        title: 'Visual change history',
        description: 'See what changed on the page with each check result.',
      },
      {
        title: 'Works with any page',
        description: 'Monitor public pages, dashboards, and status endpoints.',
      },
    ],
  },
  'ping-monitoring': {
    slug: 'ping-monitoring',
    eyebrow: 'Ping monitoring',
    title: 'Keep hosts reachable with',
    highlight: 'ping monitoring',
    description:
      'Continuously ping servers and network devices to detect packet loss, latency spikes, and unreachable hosts in seconds.',
    highlights: [
      {
        title: 'Latency tracking',
        description: 'Trend response times and spot degradation early.',
      },
      {
        title: 'Packet-loss alerts',
        description: 'Get notified when hosts become unreachable or unstable.',
      },
      {
        title: 'IPv4 & IPv6',
        description: 'Monitor both address families from a single screen.',
      },
    ],
  },
  'port-monitoring': {
    slug: 'port-monitoring',
    eyebrow: 'Port monitoring',
    title: 'Catch service outages with',
    highlight: 'port monitoring',
    description:
      'Verify that critical TCP ports — HTTP, SMTP, SSH, databases, and more — accept connections around the clock.',
    highlights: [
      {
        title: 'Any TCP port',
        description: 'Monitor web, mail, SSH, DNS, and custom service ports.',
      },
      {
        title: 'Connection timeouts',
        description: 'Detect closed or filtered ports before users do.',
      },
      {
        title: 'Per-port history',
        description: 'Review uptime and response times for every port you watch.',
      },
    ],
  },
  'cron-job-monitoring': {
    slug: 'cron-job-monitoring',
    eyebrow: 'Cron job monitoring',
    title: 'Never miss a failed job with',
    highlight: 'cron monitoring',
    description:
      'Register a heartbeat URL for every scheduled job and get alerted the moment a run is late, failed, or stopped entirely.',
    highlights: [
      {
        title: 'Heartbeat URLs',
        description: 'Ping a unique URL at the end of every successful run.',
      },
      {
        title: 'Grace periods',
        description: 'Define expected schedules with flexible tolerance windows.',
      },
      {
        title: 'Missed-run alerts',
        description: 'Know about silent failures in batch, ETL, and backup jobs.',
      },
    ],
  },
  'api-monitoring': {
    slug: 'api-monitoring',
    eyebrow: 'API monitoring',
    title: 'Ship reliable APIs with',
    highlight: 'API monitoring',
    description:
      'Monitor REST and GraphQL endpoints with custom methods, headers, and assertions so broken APIs never reach your users.',
    highlights: [
      {
        title: 'Custom requests',
        description: 'Send any method, header, body, and authentication.',
      },
      {
        title: 'Response assertions',
        description: 'Assert on status codes, JSON paths, and response times.',
      },
      {
        title: 'SSL & DNS aware',
        description: 'Correlate API failures with certificate and DNS issues.',
      },
    ],
  },
  'udp-monitoring': {
    slug: 'udp-monitoring',
    eyebrow: 'UDP monitoring',
    title: 'Catch silent failures with',
    highlight: 'udp monitoring',
    description:
      'Probe UDP services and ports continuously to detect dropped packets, silent downtime, and degraded network devices.',
    highlights: [
      {
        title: 'UDP port checks',
        description: 'Verify any UDP port responds from multiple regions.',
      },
      {
        title: 'Packet-loss detection',
        description: 'Alert on timeouts and lost responses before users notice.',
      },
      {
        title: 'Network device coverage',
        description: 'Monitor DNS, NTP, SNMP, and custom UDP services.',
      },
    ],
  },
  'response-time-monitoring': {
    slug: 'response-time-monitoring',
    eyebrow: 'Response time monitoring',
    title: 'Protect performance with',
    highlight: 'response time monitoring',
    description:
      'Track how fast your services respond over time and get alerted when latency crosses the thresholds your business depends on.',
    highlights: [
      {
        title: 'Latency thresholds',
        description: 'Alert on average or consecutive slow responses.',
      },
      {
        title: 'Performance trends',
        description: 'Spot regressions with response-time charts per monitor.',
      },
      {
        title: 'Region comparison',
        description: 'Compare timings across monitoring locations.',
      },
    ],
  },
  'ssl-monitoring': {
    slug: 'ssl-monitoring',
    eyebrow: 'SSL monitoring',
    title: 'Prevent certificate outages with',
    highlight: 'SSL monitoring',
    description:
      'Track certificate expiry dates for every domain you run and get warned weeks before an expired certificate takes your site offline.',
    highlights: [
      {
        title: 'Expiry alerts',
        description: 'Warnings at 30, 14, 7, and 1 day before expiry.',
      },
      {
        title: 'Chain validation',
        description: 'Detect incomplete chains and misconfigurations early.',
      },
      {
        title: 'Bulk coverage',
        description: 'Watch certificates across all your domains in one place.',
      },
    ],
  },
  'domain-monitoring': {
    slug: 'domain-monitoring',
    eyebrow: 'Domain monitoring',
    title: 'Protect your domains with',
    highlight: 'domain monitoring',
    description:
      'Track domain expiration dates and registrar data so a forgotten renewal never takes your brand offline.',
    highlights: [
      {
        title: 'Expiry tracking',
        description: 'Alerts well ahead of domain expiration dates.',
      },
      {
        title: 'WHOIS changes',
        description: 'Detect unexpected changes to domain records.',
      },
      {
        title: 'Portfolio view',
        description: 'See every domain and its status at a glance.',
      },
    ],
  },
  'dns-monitoring': {
    slug: 'dns-monitoring',
    eyebrow: 'DNS monitoring',
    title: 'Catch DNS failures with',
    highlight: 'DNS monitoring',
    description:
      'Resolve your records from multiple locations and get alerted when DNS answers change, disappear, or start resolving incorrectly.',
    highlights: [
      {
        title: 'Record verification',
        description: 'Validate A, AAAA, CNAME, MX, and TXT records.',
      },
      {
        title: 'Propagation checks',
        description: 'Confirm changes across resolvers and regions.',
      },
      {
        title: 'Hijack detection',
        description: 'Spot unexpected record changes immediately.',
      },
    ],
  },
  'maintenance-windows': {
    slug: 'maintenance-windows',
    eyebrow: 'Maintenance windows',
    title: 'Silence alerts during work with',
    highlight: 'maintenance windows',
    description:
      'Schedule planned maintenance so scheduled downtime never triggers noisy alerts — while real incidents still page you.',
    highlights: [
      {
        title: 'One-off & recurring',
        description: 'Plan single windows or repeating maintenance slots.',
      },
      {
        title: 'Per-monitor control',
        description: 'Mute only the monitors that are actually being worked on.',
      },
      {
        title: 'Status page sync',
        description: 'Post maintenance notices to your public status page.',
      },
    ],
  },
  'multi-location-monitoring': {
    slug: 'multi-location-monitoring',
    eyebrow: 'Multi-location monitoring',
    title: 'Eliminate false alarms with',
    highlight: 'multi-location checks',
    description:
      'Confirm outages from several regions at once so a single flaky probe never pages your team for a non-issue.',
    highlights: [
      {
        title: 'Confirmed incidents',
        description: 'Alert only when multiple locations agree.',
      },
      {
        title: 'Regional insight',
        description: 'See exactly which regions can and cannot reach you.',
      },
      {
        title: 'Flexible strategies',
        description: 'Choose majority, quorum, or all-location confirmation.',
      },
    ],
  },
  'incident-management': {
    slug: 'incident-management',
    eyebrow: 'Incident management',
    title: 'Resolve downtime faster with',
    highlight: 'incident management',
    description:
      'Every failed check becomes a tracked incident with a full timeline, so your team can respond with context instead of guesswork.',
    highlights: [
      {
        title: 'Automatic incidents',
        description: 'Incidents open and close with monitor state changes.',
      },
      {
        title: 'Full timeline',
        description: 'Recoveries, acknowledgements, and notes in one thread.',
      },
      {
        title: 'Team ownership',
        description: 'Assign and escalate incidents to the right people.',
      },
    ],
  },
  'status-pages': {
    slug: 'status-pages',
    eyebrow: 'Status pages',
    title: 'Keep customers informed with',
    highlight: 'status pages',
    description:
      'Publish a beautiful public status page that updates automatically from your monitors — no spreadsheets, no manual tweets.',
    highlights: [
      {
        title: 'Auto-updating',
        description: 'Page status reflects live monitor results instantly.',
      },
      {
        title: 'Your branding',
        description: 'Custom domain, logo, and colors on every page.',
      },
      {
        title: 'Subscriber updates',
        description: 'Let customers subscribe to incident notifications.',
      },
    ],
  },
  'alerts-notifications': {
    slug: 'alerts-notifications',
    eyebrow: 'Alerts & notifications',
    title: 'Reach the right people with',
    highlight: 'smart alerts',
    description:
      'Route alerts through email, SMS, Slack, Discord, webhooks, and more — with escalation policies that make sure nothing is missed.',
    highlights: [
      {
        title: 'Every channel',
        description: 'Email, SMS, Slack, Discord, Telegram, and webhooks.',
      },
      {
        title: 'Escalation policies',
        description: 'Follow up automatically when an alert is not acknowledged.',
      },
      {
        title: 'Quiet hours',
        description: 'Control when and how your team gets paged.',
      },
    ],
  },
};

export const SOLUTION_PAGES: Record<string, FeatureLandingPage> = {
  devops: {
    slug: 'devops',
    eyebrow: 'For DevOps',
    title: 'Monitoring built for',
    highlight: 'DevOps teams',
    description:
      'Fast checks, deep integrations, and API-first tooling that fit the way DevOps teams ship and operate software.',
    highlights: [
      {
        title: 'CI/CD friendly',
        description: 'Validate services automatically after every deploy.',
      },
      {
        title: 'Webhooks & API',
        description: 'Automate monitor lifecycle from your own pipelines.',
      },
      {
        title: 'On-call ready',
        description: 'Escalation policies that match your rotation.',
      },
    ],
  },
  developers: {
    slug: 'developers',
    eyebrow: 'For developers',
    title: 'Monitoring developers',
    highlight: 'actually enjoy',
    description:
      'A clean API, sensible defaults, and integrations for the tools you already use — set up monitoring in minutes, not sprints.',
    highlights: [
      {
        title: 'API-first',
        description: 'Everything in the UI is available via REST API.',
      },
      {
        title: 'IaC friendly',
        description: 'Manage monitors as code alongside your services.',
      },
      {
        title: 'SDKs & CLIs',
        description: 'Ship monitoring checks from your existing tooling.',
      },
    ],
  },
  marketers: {
    slug: 'marketers',
    eyebrow: 'For marketers',
    title: 'Keep campaigns live with',
    highlight: 'uptime monitoring',
    description:
      'Landing pages, checkout flows, and campaign microsites monitored around the clock so paid traffic never hits a dead page.',
    highlights: [
      {
        title: 'Landing page watch',
        description: 'Monitor campaign pages and conversion funnels.',
      },
      {
        title: 'Instant alerts',
        description: 'Know before your ad spend starts hitting errors.',
      },
      {
        title: 'Shareable status',
        description: 'Public status pages for stakeholder updates.',
      },
    ],
  },
  support: {
    slug: 'support',
    eyebrow: 'For support teams',
    title: 'Deflect tickets with',
    highlight: 'status pages',
    description:
      'Give support a single source of truth during incidents so customers see answers before they open a ticket.',
    highlights: [
      {
        title: 'Live incident feed',
        description: 'Support sees monitor state in real time.',
      },
      {
        title: 'Proactive comms',
        description: 'Post updates to your status page in one click.',
      },
      {
        title: 'Fewer “is it down?” tickets',
        description: 'Customers self-serve from your public page.',
      },
    ],
  },
  'business-owners': {
    slug: 'business-owners',
    eyebrow: 'For business owners',
    title: 'Downtime costs money —',
    highlight: 'stop it early',
    description:
      'Simple, affordable monitoring that tells you when revenue-critical pages break, without an observability price tag.',
    highlights: [
      {
        title: 'Plain-language alerts',
        description: 'Know exactly what broke and who to call.',
      },
      {
        title: 'Predictable pricing',
        description: 'Flat plans that scale with monitor count, not data volume.',
      },
      {
        title: 'No agents required',
        description: 'Start monitoring in minutes with zero installs.',
      },
    ],
  },
  api: {
    slug: 'api',
    eyebrow: 'API',
    title: 'Automate everything with the',
    highlight: 'monitoring API',
    description:
      'Create, update, and inspect monitors programmatically — perfect for IaC workflows, scripts, and internal tooling.',
    highlights: [
      {
        title: 'Full CRUD',
        description: 'Manage monitors, alerts, and status pages via REST.',
      },
      {
        title: 'Token auth',
        description: 'Scoped API tokens for every integration.',
      },
      {
        title: 'Webhooks out',
        description: 'Stream monitor events into your own systems.',
      },
    ],
  },
  integrations: {
    slug: 'integrations',
    eyebrow: 'Integrations',
    title: 'Plug monitoring into your',
    highlight: 'favorite tools',
    description:
      'Send alerts and incidents to Slack, Discord, PagerDuty, and dozens of other tools your team already lives in.',
    highlights: [
      {
        title: 'Chat ops',
        description: 'Native Slack and Discord notifications.',
      },
      {
        title: 'On-call tools',
        description: 'Route pages through your existing on-call stack.',
      },
      {
        title: 'Custom webhooks',
        description: 'Any endpoint that accepts JSON can be an integration.',
      },
    ],
  },
  webhooks: {
    slug: 'webhooks',
    eyebrow: 'Webhooks',
    title: 'Build custom flows with',
    highlight: 'webhooks',
    description:
      'Receive signed, real-time HTTP callbacks for every monitor event and wire downtime into any workflow you can imagine.',
    highlights: [
      {
        title: 'Signed payloads',
        description: 'Verify every delivery with request signatures.',
      },
      {
        title: 'Retry semantics',
        description: 'Failed deliveries are retried with backoff.',
      },
      {
        title: 'Event filters',
        description: 'Subscribe only to the events you care about.',
      },
    ],
  },
  cli: {
    slug: 'cli',
    eyebrow: 'CLI',
    title: 'Automate monitoring from your',
    highlight: 'terminal',
    description:
      'A first-class command-line client for creating and managing monitors from scripts and CI pipelines — launching soon.',
    highlights: [
      {
        title: 'Scriptable',
        description: 'Create, update, and delete monitors in one command.',
      },
      {
        title: 'CI/CD native',
        description: 'Register checks automatically after every deploy.',
      },
      {
        title: 'Same power as the API',
        description: 'Everything the REST API can do, from your shell.',
      },
    ],
  },
  'mobile-app': {
    slug: 'mobile-app',
    eyebrow: 'Mobile app',
    title: 'Uptime in your pocket with the',
    highlight: 'mobile app',
    description:
      'Get push alerts, acknowledge incidents, and check monitor status from anywhere — iOS and Android apps are on the way.',
    highlights: [
      {
        title: 'Push alerts',
        description: 'Instant incident notifications on your phone.',
      },
      {
        title: 'On-the-go ack',
        description: 'Acknowledge and resolve from the couch.',
      },
      {
        title: 'Incident timeline',
        description: 'Full context in your pocket, offline-friendly.',
      },
    ],
  },
  'case-studies': {
    slug: 'case-studies',
    eyebrow: 'Case studies',
    title: 'See how teams cut downtime with',
    highlight: 'customer stories',
    description:
      'Real stories from teams who replaced expensive observability suites with PulseWatch — case studies coming soon.',
    highlights: [
      {
        title: 'Real workflows',
        description: 'How teams structure monitors and escalation.',
      },
      {
        title: 'Cost savings',
        description: 'What they cut from their observability bill.',
      },
      {
        title: 'Migration stories',
        description: 'Moving off legacy tools without downtime.',
      },
    ],
  },
};

export const RESOURCE_PAGES: Record<string, FeatureLandingPage> = {
  help: {
    slug: 'help',
    eyebrow: 'Help center',
    title: 'Get unstuck fast with the',
    highlight: 'help center',
    description:
      'Guides, FAQs, and step-by-step walkthroughs for every part of PulseWatch — the help center is on its way.',
    highlights: [
      {
        title: 'Setup guides',
        description: 'From first monitor to full team rollout.',
      },
      {
        title: 'Troubleshooting',
        description: 'Common alerting and notification fixes.',
      },
      {
        title: 'FAQ',
        description: 'Quick answers to the questions we hear most.',
      },
    ],
  },
  'api-docs': {
    slug: 'api-docs',
    eyebrow: 'API docs',
    title: 'Build anything with the',
    highlight: 'API documentation',
    description:
      'Full REST reference, authentication guides, and copy-paste examples — documentation site coming soon.',
    highlights: [
      {
        title: 'Endpoint reference',
        description: 'Every resource with request and response schemas.',
      },
      {
        title: 'Auth guides',
        description: 'Token scopes, rotation, and best practices.',
      },
      {
        title: 'Code examples',
        description: 'Copy-paste snippets in popular languages.',
      },
    ],
  },
  'knowledge-base': {
    slug: 'knowledge-base',
    eyebrow: 'Knowledge base',
    title: 'Learn the craft with the',
    highlight: 'knowledge base',
    description:
      'Deep dives on uptime strategy, SLAs, maintenance windows, and monitoring best practices — coming soon.',
    highlights: [
      {
        title: 'Uptime playbooks',
        description: 'Proven patterns for reliable services.',
      },
      {
        title: 'SLA math',
        description: 'Understand error budgets in plain language.',
      },
      {
        title: 'Team practices',
        description: 'On-call and incident workflows that scale.',
      },
    ],
  },
  status: {
    slug: 'status',
    eyebrow: 'System status',
    title: 'Live platform health on the',
    highlight: 'status page',
    description:
      'Real-time PulseWatch platform availability, maintenance notices, and incident history — page launching soon.',
    highlights: [
      {
        title: 'Live availability',
        description: 'Current health of every platform component.',
      },
      {
        title: 'Incident history',
        description: 'Past incidents with full post-mortems.',
      },
      {
        title: 'Subscribe',
        description: 'Get notified when the platform is affected.',
      },
    ],
  },
  roadmap: {
    slug: 'roadmap',
    eyebrow: 'Roadmap',
    title: 'See what we are building on the',
    highlight: 'public roadmap',
    description:
      'Follow what ships next, vote on upcoming features, and see what is already in progress — roadmap launching soon.',
    highlights: [
      {
        title: 'In progress',
        description: 'Features the team is actively building.',
      },
      {
        title: 'Up next',
        description: 'Planned work you can vote on.',
      },
      {
        title: 'Shipped',
        description: 'Recently released, linked to the changelog.',
      },
    ],
  },
  blog: {
    slug: 'blog',
    eyebrow: 'Blog',
    title: 'Insights on the',
    highlight: 'PulseWatch blog',
    description:
      'Engineering deep dives, outage post-mortems, and product updates from the team — blog coming soon.',
    highlights: [
      {
        title: 'Engineering',
        description: 'How we build and run the monitoring platform.',
      },
      {
        title: 'Post-mortems',
        description: 'Honest write-ups of real downtime events.',
      },
      {
        title: 'Product updates',
        description: 'The story behind every release.',
      },
    ],
  },
  changelog: {
    slug: 'changelog',
    eyebrow: 'Changelog',
    title: 'Every ship on the',
    highlight: 'changelog',
    description:
      'A running list of new features, improvements, and fixes — follow along as PulseWatch evolves, coming soon.',
    highlights: [
      {
        title: 'New features',
        description: 'Capability drops with screenshots.',
      },
      {
        title: 'Improvements',
        description: 'Speed, polish, and reliability updates.',
      },
      {
        title: 'Fixes',
        description: 'Every patch, documented plainly.',
      },
    ],
  },
  'suggest-a-feature': {
    slug: 'suggest-a-feature',
    eyebrow: 'Suggest a feature',
    title: 'Shape the product —',
    highlight: 'suggest a feature',
    description:
      'Tell us what to build next and vote on ideas from the community — the suggestion board is coming soon.',
    highlights: [
      {
        title: 'Submit ideas',
        description: 'Describe the workflow you want improved.',
      },
      {
        title: 'Vote & discuss',
        description: 'Help prioritize with the community.',
      },
      {
        title: 'Follow status',
        description: 'Track every idea from vote to shipped.',
      },
    ],
  },
};

export const TOOL_PAGES: Record<string, FeatureLandingPage> = {
  'uptime-calculator': {
    slug: 'uptime-calculator',
    eyebrow: 'Uptime calculator',
    title: 'Calculate what downtime',
    highlight: 'really costs',
    description:
      'Convert uptime percentages into lost hours, lost requests, and estimated revenue impact for any SLA target — tool launching soon.',
    highlights: [
      {
        title: 'SLA targets',
        description: '99%, 99.9%, 99.99% — and what each really means.',
      },
      {
        title: 'Cost estimates',
        description: 'Translate downtime minutes into dollars.',
      },
      {
        title: 'Shareable results',
        description: 'Export numbers for stakeholders.',
      },
    ],
  },
  'dns-lookup': {
    slug: 'dns-lookup',
    eyebrow: 'DNS lookup',
    title: 'Inspect any domain with',
    highlight: 'DNS lookup',
    description:
      'Query A, AAAA, CNAME, MX, and TXT records from multiple resolvers around the world — tool launching soon.',
    highlights: [
      {
        title: 'All record types',
        description: 'A, AAAA, CNAME, MX, TXT, NS, and more.',
      },
      {
        title: 'Global resolvers',
        description: 'Compare answers from multiple regions.',
      },
      {
        title: 'Propagation view',
        description: 'See when a change has spread everywhere.',
      },
    ],
  },
  'ssl-checker': {
    slug: 'ssl-checker',
    eyebrow: 'SSL checker',
    title: 'Verify certificates with the',
    highlight: 'SSL checker',
    description:
      'Check expiry dates, chain validity, and issuer details for any domain in seconds — tool launching soon.',
    highlights: [
      {
        title: 'Expiry dates',
        description: 'Exactly how many days remain.',
      },
      {
        title: 'Chain validity',
        description: 'Spot incomplete or misordered chains.',
      },
      {
        title: 'Issuer details',
        description: 'See who issued the certificate and when.',
      },
    ],
  },
  'is-it-down': {
    slug: 'is-it-down',
    eyebrow: 'Is it down?',
    title: 'Find out instantly —',
    highlight: 'is it down?',
    description:
      'Check whether a site is down for everyone or just you, with a quick multi-region check — tool launching soon.',
    highlights: [
      {
        title: 'Multi-region probe',
        description: 'Verified from several locations at once.',
      },
      {
        title: 'Instant answer',
        description: 'Everyone, somewhere, or just you.',
      },
      {
        title: 'Recent history',
        description: 'See if the site has been flaky today.',
      },
    ],
  },
};

export const FEATURE_SLUGS = Object.keys(FEATURE_PAGES);

export const SOLUTION_SLUGS = Object.keys(SOLUTION_PAGES);

export const RESOURCE_SLUGS = Object.keys(RESOURCE_PAGES);

export const TOOL_SLUGS = Object.keys(TOOL_PAGES);
