export interface Testimonial {
  id: string;
  company: string;
  quote: string;
  name: string;
  role: string;
  /** Must be true for placeholder content. Remove it only when the feedback is real and approved. */
  isSample?: boolean;
}

// TODO: Replace these placeholders with real customer feedback (with permission),
// then delete `isSample`. When this array is empty the whole section is hidden.
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'sample-1',
    company: 'Sample Company',
    quote: 'Placeholder feedback about how quickly the team gets alerted when a site goes down.',
    name: 'Sample Customer',
    role: 'Founder',
    isSample: true,
  },
  {
    id: 'sample-2',
    company: 'Sample Agency',
    quote: 'Placeholder feedback about the status page and the uptime reports.',
    name: 'Sample Customer',
    role: 'DevOps Engineer',
    isSample: true,
  },
  {
    id: 'sample-3',
    company: 'Sample Studio',
    quote: 'Placeholder feedback about setting up the first monitor in minutes.',
    name: 'Sample Customer',
    role: 'Product Manager',
    isSample: true,
  },
  {
    id: 'sample-4',
    company: 'Sample Labs',
    quote: 'Placeholder feedback about incident history and recovery tracking.',
    name: 'Sample Customer',
    role: 'Engineering Lead',
    isSample: true,
  },
];
