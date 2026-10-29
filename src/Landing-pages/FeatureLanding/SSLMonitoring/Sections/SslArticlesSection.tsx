import Link from 'next/link';

const articles = [
  {
    title: 'Top 10 SSL Monitoring Tools.',
    description:
      'Looking for a simple (and free) uptime ping monitoring? Take a look at these top 10 solutions on the market compared in detail.',
    icon: 'package',
  },
  {
    title: 'SSL Certificate Errors: A Comprehensive Guide.',
    description:
      'Learn what SSL certificate errors are, why they occur, and how to fix common issues like expired certificates, domain mismatches, and mixed content.',
    icon: 'signs',
  },
  {
    title: 'The Complete Guide to Website Downtime',
    description:
      'Discover what causes website downtime, how to detect and respond to outages, and best practices for minimizing impact on your users.',
    icon: 'search',
  },
];

function ArticleIcon({ type }: { type: string }) {
  if (type === 'package') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-28 w-28 text-slate-400">
        <path
          d="m50 10 37 20-37 21L13 30 50 10Zm-37 20v40l37 20V51L13 30Zm74 0v40L50 90V51l37-21ZM31 20l37 21M31 40l37 21M50 51v39"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'signs') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-28 w-28 text-slate-400">
        <path
          d="M42 12h16v16H42zM25 29h50v17H25zM25 46v17h50L62 80H42v-17"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-28 w-28 text-slate-400">
      <circle cx="43" cy="42" r="30" stroke="currentColor" strokeWidth="4" />
      <path d="m65 64 25 25M27 33h32M27 43h25M27 53h29" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export default function SslArticlesSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-12 text-[var(--foreground)] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-lg font-bold tracking-tight">Relevant articles.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="grid min-h-32 place-items-center">
                <ArticleIcon type={article.icon} />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{article.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--muted)]">
                {article.description}
              </p>
              <Link
                href="/resources"
                className="mt-5 inline-flex min-h-8 w-fit items-center rounded-full border border-sky-400/60 px-4 text-[11px] font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
