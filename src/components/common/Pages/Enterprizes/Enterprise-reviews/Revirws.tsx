export type Review = {
  name: string;
  role?: string;
  title: string;
  text: string;
  rating?: number; // 1-5, default 5
  source: string; // e.g. "Trustpilot.com"
  href: string; // link to the original review
};

// Real-world sample reviews for Uptime/Monitoring service
export const reviews: Review[] = [
  {
    name: 'Rahim Chowdhury',
    role: 'Lead DevOps Engineer, CloudTech Solutions',
    title: 'Saved us from 3 hours of critical server downtime',
    text: 'We switched to this platform after missing a major SSL expiration last quarter. The setup took less than 10 minutes, and the immediate Discord & Email alerts saved our production server from a critical API failure last week. The dashboard is clean, fast, and extremely reliable.',
    rating: 5,
    source: 'Trustpilot.com',
    href: 'https://trustpilot.com/reviews/example1',
  },
  {
    name: 'Sarah Jenkins',
    role: 'CTO, Novus eCommerce',
    title: 'Flawless status page & instant incident alerts',
    text: 'Our support team used to get flooded with emails whenever our payment gateway had issues. Now, with the public status page and instant SMS alerts, our users know exactly what is happening before they even submit a ticket. It seamlessly integrated into our existing Slack workflow.',
    rating: 5,
    source: 'G2.com',
    href: 'https://g2.com/products/example/reviews/2',
  },
  {
    name: 'Tariqul Islam',
    role: 'Senior Full-Stack Developer',
    title: 'Best value for multi-region ping monitoring',
    text: 'I maintain multiple client websites and needed an affordable monitoring tool with low latency checks across global locations. The response time graphs are super accurate, and the ping frequency is top-tier. Highly recommended for devs and small teams!',
    rating: 5,
    source: 'ProductHunt.com',
    href: 'https://producthunt.com/posts/example3',
  },
];
