import { Star } from 'lucide-react';
import Link from 'next/link';

export default function EnterpriseSlaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6 sm:py-20 lg:px-8">
      {/* Background Graphic / Overlay (Optional simulated dashboard backdrop) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl text-center flex flex-col items-center">
        {/* Rating Card Badge */}
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-lg mb-10">
          {/* Rating Score */}
          <div className="flex items-center gap-2 text-left">
            <span className="text-2xl font-bold tracking-tight">4.7</span>
            <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            <div className="text-xs text-[var(--muted)] leading-tight">stars out of 5</div>
          </div>

          {/* Divider */}
          <div className="h-8 w-[1px] bg-[var(--border)]"></div>

          {/* Total Reviews */}
          <div className="text-left">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-1">284+</div>
            <div className="text-xs text-[var(--muted)]">
              reviews on <span className="text-red-500 font-bold">G</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-4xl">
          Need monitoring that fits your SLA and compliance?
        </h2>

        {/* Subtitle */}
        <p className="text-[var(--muted)] text-base sm:text-lg mb-8 max-w-2xl">
          Book an enterprise demo to get a tailored quote and required documents.
        </p>

        {/* Enterprise Demo Button (Using your full rounded / shader or custom style) */}
        <Link
          href="/enterprise-demo"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          Get an enterprise demo
        </Link>
      </div>
    </section>
  );
}
