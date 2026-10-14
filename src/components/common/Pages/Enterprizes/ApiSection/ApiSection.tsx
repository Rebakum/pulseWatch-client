import ApiIllustration from './ApiIllustration';
import { content } from './Content';

export default function ApiSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)] md:py-16">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 md:grid-cols-2 md:gap-16">
        {/* Copy */}
        <div>
          <h2 className="mb-6 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
            {content.titleEnd}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--foreground)]/85 sm:text-base">
            {content.description}
          </p>
        </div>

        {/* Illustration */}
        <ApiIllustration />
      </div>
    </section>
  );
}
