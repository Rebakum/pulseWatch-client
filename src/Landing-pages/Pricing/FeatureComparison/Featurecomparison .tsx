import ComparisonSection from './Sections/ComparisonSection';
import { sections } from './Sections/data';
import PricingFooter from './Sections/PricingFooter';
import StickyPlanBar from './Sections/StickyPlanBar';

export default function FeatureComparison() {
  return (
    <section
      id="compare"
      className="relative bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Feature
          <br />
          comparison<span className="text-brand-blue">.</span>
        </h2>

        <StickyPlanBar />

        {sections.map((section) => (
          <ComparisonSection key={section.title} section={section} />
        ))}

        <PricingFooter />
      </div>
    </section>
  );
}
