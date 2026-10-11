import { sections } from './footer-data';
import FooterBrand from './FooterBrand';
import FooterColumn from './FooterColumn';

export default function Footer() {
  const [first, ...rest] = sections; // Product ... Free tools

  return (
    <footer className="dark bg-[var(--background)] px-6 pb-10 pt-16 text-[var(--foreground)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
        {/* row 1: brand + Product + Resources + Company */}
        <div className="col-span-2 lg:col-span-1">
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

      <span
        role="img"
        aria-label="All systems operational"
        className="mx-auto mt-16 block size-2.5 rounded-full bg-emerald-600/80"
      />
    </footer>
  );
}
