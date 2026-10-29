import Link from 'next/link';

const articles = [
  {
    title: 'Top 8 Free Status Page Tools & Services',
    description:
      'A status page significantly reduces customer tickets and agent workload while building trust. Which free solution is best?',
    kind: 'package',
  },
  {
    title: 'A Comprehensive Guide to Status Pages',
    description:
      'Learn more about how status pages can benefit your business and what the best practices are for boosting their use.',
    kind: 'signs',
  },
  {
    title: '10 Real-World Status Page Examples',
    description:
      'How do companies like Apple or Netflix use a status page and what can you learn from them? Get inspired in our blog.',
    kind: 'search',
  },
];

function ArticleIcon({ kind }: { kind: string }) {
  if (kind === 'package') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-24 w-24 text-slate-400">
        <path
          d="m50 10 38 20-38 21L12 30 50 10Zm-38 20v40l38 20V51L12 30Zm76 0v40L50 90V51l38-21ZM31 20l38 21M31 40l38 21M50 51v39"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === 'signs') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-24 w-24 text-slate-400">
        <path
          d="M42 12h16v16H42zM25 29h50v17H25zM25 46v17h50L62 80H42V63"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-24 w-24 text-slate-400">
      <circle cx="43" cy="42" r="30" stroke="currentColor" strokeWidth="4" />
      <path d="m65 64 25 25M27 33h32M27 43h25M27 53h29" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export default function StatusPageArticles() {
  return (
    <section className="bg-[#111821] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-lg font-bold tracking-tight">Relevant articles on status pages.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="grid min-h-32 place-items-center">
                <ArticleIcon kind={article.kind} />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{article.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
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
