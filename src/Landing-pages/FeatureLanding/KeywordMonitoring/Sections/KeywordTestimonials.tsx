import type { TestimonialsSectionData } from '@/types/landing';
import Testimonials from '../../WebsiteMonitoring/sections/Testimonials';

const DATA: TestimonialsSectionData = {
  title: [
    { text: 'What users love about our keyword monitoring' },
    { text: '.', tone: 'brand' },
  ],
  items: [
    {
      name: 'Verified User in Information Technology and Services',
      headline: 'Just what I needed',
      body: "I've been using PulseWatch to monitor one of my code applications that I need to keep running almost 24/7. I've been using it every day in the background for maybe 2 months now, and a keyword check caught a broken deploy long before any alert from my users ...",
      source: 'G2.com',
    },
    {
      name: 'Achir S.',
      role: 'Growth & Operation Office',
      headline: 'Good Product for uptime Monitoring',
      body: 'The best thing about PulseWatch is the clean dashboard. There is no mess or a lot of options to scroll through; it is a clean and easy-to-view dashboard for monitoring the sites, and the keyword check tells me the page actually shows what customers expect ...',
      source: 'G2.com',
    },
    {
      name: 'Szakács A.',
      role: 'Senior Software Engineer',
      headline: 'Well rounded free monitoring for a couple of websites/services.',
      body: 'The free plan is really good for people who self-host pages/services. The status page is neat looking and the free plan covers the essential monitoring methods, like simple HTTPS response check or keyword check, which is exactly what I needed for my checkout flow ...',
      source: 'G2.com',
    },
  ],
};

export default function KeywordTestimonials() {
  return <Testimonials data={DATA} />;
}
