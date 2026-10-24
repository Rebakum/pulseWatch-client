import Container from '@/components/common/Container';
import Link from 'next/link';
import { content } from './Content';

export default function EnterpriseCta() {
  return (
    <section className=" dark enterprise-cta px-0 py-10 text-[var(--foreground)]">
      <Container>
        <h2 className="enterprise-cta__title">{content.title}</h2>

        <Link href={content.cta.href} className="shader-btn mt-9">
          {content.cta.label}
        </Link>
      </Container>
    </section>
  );
}
