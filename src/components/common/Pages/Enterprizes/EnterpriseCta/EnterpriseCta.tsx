import Link from 'next/link';
import { content } from './Content';

export default function EnterpriseCta() {
  return (
    <section className=" dark enterprise-cta text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="enterprise-cta__title">{content.title}</h2>

        <Link href={content.cta.href} className="shader-btn mt-9">
          {content.cta.label}
        </Link>
      </div>
    </section>
  );
}
