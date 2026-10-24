import Container from '@/components/common/Container';

import CollaborateIllustration from './CollaborateIllustration';
import { content } from './Content';

export default function Collaborate() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
              {content.titleEnd}
              <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[var(--foreground)]/85 sm:text-lg">
              {content.description}
            </p>
          </div>

          <CollaborateIllustration />
        </div>
      </Container>
    </section>
  );
}
