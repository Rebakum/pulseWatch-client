export type Review = {
  name: string;
  role?: string;
  title: string;
  text: string;
  rating?: number; // 1-5, default 5
  source: string; // e.g. "Trustpilot.com"
  href: string; // link to the original review
};

// PLACEHOLDERS: replace with real reviews from your own customers
// (with their permission) and link each one to its original source.
export const reviews: Review[] = [
  {
    name: 'Nabila',
    title: 'Extremely reliable monitoring and instant alerts!',
    text: 'We integrated this monitoring tool into our workflow last month, and it has completely transformed how we handle uptime tracking. The interface is clean, setup took less than five minutes, and the instant email notifications have saved us from potential downtime disasters multiple times already. Absolutely a game-changer for our team!',
    rating: 5,
    source: 'Trustpilot.com',
    href: '#',
  },
  {
    name: 'Sarjuh',
    title: 'Super fast setup and incredible performance insights',
    text: 'What stood out the most to me is the simplicity combined with powerful reporting features. We can track all our critical API endpoints and server statuses from a single, beautifully organized dashboard. The performance insights and historical uptime metrics give us absolute peace of mind 24/7.',
    rating: 5,
    source: 'G2.com',
    href: '#',
  },
  {
    name: 'Hasim',
    role: 'Lead Full-Stack Developer',
    title: 'The best uptime and status page solution we have used',
    text: 'As a development team managing multiple client web applications, having a dependable monitoring system is non-negotiable. This platform delivers lightning-fast check intervals, seamless integrations, and gorgeous status pages that our clients love. Highly recommended to any developer or agency looking for top-tier reliability.',
    rating: 5,
    source: 'Capterra.com',
    href: '#',
  },
];
