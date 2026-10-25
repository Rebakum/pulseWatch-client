import type { FaqSectionData } from '@/types/landing';
import FaqSection from '../WebsiteMonitoring/sections/FaqSection';

const DATA: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'What is keyword monitoring and how does it work?',
      answer:
        'Keyword monitoring checks whether a specific word or phrase appears in a web page. PulseWatch regularly scans the page source and verifies the expected content on each check. If the keyword is missing, the status changes to down and a failed keyword check is highlighted so you can tell content problems from availability problems. It is commonly used to catch fake error messages, failed logins, missing content, or broken checkout pages that standard uptime checks may not catch.',
    },
    {
      question: "What's the difference between keyword monitoring and website monitoring?",
      answer:
        'Website monitoring only verifies that a page responds successfully. Keyword monitoring goes one step further and checks the content you expect to find there, so a page that loads but renders an error message still counts as a failure.',
    },
    {
      question: "What's the difference between \"keyword exists\" and \"keyword not exists\"?",
      answer:
        '"Keyword exists" passes while the phrase is present on the page, which is useful for confirming success messages such as "Order confirmed". "Keyword not exists" passes while the phrase is absent, which is useful for catching error strings, out-of-stock banners, or injected content.',
    },
    {
      question: 'What keywords should I monitor on my website?',
      answer:
        'Watch phrases that must always appear, or never appear: your brand name, product prices, "In stock" or "Add to cart" on product pages, your copyright string, and legal text such as your privacy or cookie notice.',
    },
    {
      question: 'What problems can keyword monitoring catch that other monitors miss?',
      answer:
        'Broken templates, empty search results, misconfigured CDNs, expired certificates serving error pages, defaced content, and failed JavaScript builds. All of these still return HTTP 200, so only a content check catches them.',
    },
    {
      question: 'Can keyword monitoring detect if my site has been hacked?',
      answer:
        'Yes. Attackers usually inject text, links, or scripts into your pages. Monitoring for a phrase that must never appear, or a phrase that must remain, flags defacement as soon as it goes live.',
    },
    {
      question: 'Does keyword monitoring work with JavaScript-rendered content?',
      answer:
        'Yes. PulseWatch can check the rendered page instead of the raw HTML, so content injected by React, Vue, or any other client-side framework is verified too.',
    },
    {
      question: 'Is keyword monitoring free?',
      answer:
        'Keyword monitors are included alongside your other monitor types on every plan. Start on the free plan, add a keyword monitor in a few clicks, and upgrade only when you need more monitors or faster check intervals.',
    },
  ],
};

export default function KeywordFaq() {
  return <FaqSection data={DATA} />;
}
