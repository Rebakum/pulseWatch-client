import type { ArticleCardsSectionData } from '@/types/landing';
import ArticleCards from './ArticleCards';

const DATA: ArticleCardsSectionData = {
  title: 'Relevant articles.',
  items: [
    {
      icon: 'target',
      title: '15 Ways to Use PulseWatch to Track Changes & Improve Your Web Process',
      description:
        'Wondering what keyword monitoring is really used for? This guide outlines the most common uses, from catching hacks to tracking incidents and price changes.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'ethernet',
      title: 'Website Change Detection 101: How to Monitor Any Webpage for Updates',
      description:
        'Need to know the moment a page changes? This beginner guide explains keywords and how to watch only the part of a page you care about.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'clock',
      title: '9 Best Website Change Monitoring Tools in 2026 (Market & Compared)',
      description:
        'Comparing website change monitoring tools? This guide breaks down the top options by detection method, alerts, and price, so you can pick the right fit.',
      cta: { label: 'Read more' },
    },
  ],
};

export default function KeywordArticles() {
  return <ArticleCards data={DATA} />;
}
