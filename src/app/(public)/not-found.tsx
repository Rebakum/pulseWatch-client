import Container from '@/components/common/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-[var(--background)] py-24 text-[var(--foreground)]">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-base text-[var(--muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-xl bg-brand-blue px-5 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90"
        >
          Back to homepage
        </Link>
      </Container>
    </section>
  );
}
