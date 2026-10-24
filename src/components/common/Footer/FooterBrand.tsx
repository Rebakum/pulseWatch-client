import Link from 'next/link';
import { BRAND, TAGLINE } from './footer-data';
import SocialLinks from './SocialLinks';

export default function FooterBrand() {
  return (
    <div>
      <Link href="/" className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
        <i className="size-1.5 rounded-full bg-brand-gradient" />
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
