import Container from '@/components/common/Container';
import { sections } from './footer-data';
import FooterBrand from './FooterBrand';
import FooterColumn from './FooterColumn';

export default function Footer() {
  const [first, ...rest] = sections; // Product ... Free tools

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080d18] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[min(70rem,100%)] -translate-x-1/2 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-[0.12] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/70 to-transparent"
      />
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-7">
          {/* row 1: brand + Product + Resources + Company */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <FooterBrand />
          </div>
          <FooterColumn {...first} />
          <FooterColumn {...rest[0]} />
          <FooterColumn {...rest[1]} />

          {/* row 2: Monitoring + Features + Comparison + Free tools */}
          {rest.slice(2).map((s) => (
            <FooterColumn key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PulseWatch. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand-blue shadow-[0_0_12px_rgba(18,121,193,0.8)]"
            />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
