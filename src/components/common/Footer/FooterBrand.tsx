import Link from 'next/link';
import { BRAND, TAGLINE } from './footer-data';
import SocialLinks from './SocialLinks';

export default function FooterBrand() {
  return (
    <div>
      <Link href="/" className="inline-flex cursor-pointer items-center gap-2 text-base font-bold tracking-tight text-white transition-opacity hover:opacity-80">
        <i className="size-2 rounded-full bg-brand-gradient shadow-[0_0_12px_rgba(18,121,193,0.7)]" />
        {BRAND}
      </Link>
      <p className="mt-4 text-xs leading-relaxed text-slate-300">
        {TAGLINE.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <SocialLinks />
    </div>
  );
}
