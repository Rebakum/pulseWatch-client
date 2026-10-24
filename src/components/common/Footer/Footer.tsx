import Container from '@/components/common/Container';
import { sections } from './footer-data';
import FooterBrand from './FooterBrand';
import FooterColumn from './FooterColumn';

export default function Footer() {
  const [first, ...rest] = sections; // Product ... Free tools

  return (
    <footer className="dark bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-8 lg:gap-y-14">
          {/* row 1: brand + Product + Resources + Company */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
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
          className="mx-auto mt-16 block size-2.5 rounded-full bg-[var(--color-status-up)]"
        />
      </Container>
    </footer>
  );
}
