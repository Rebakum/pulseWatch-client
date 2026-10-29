import Link from 'next/link';

const articles = [
  {
    title: 'The 10 Best Website Speed Testing Tools in 2026',
    description:
      "Don't let slow webpages mess with your SEO stats! We've made a list of the top 10 free and paid webpage speed testing tools on the market today. Check out these tools and learn how to make your web pages load lightning fast!",
    icon: 'clock',
  },
  {
    title: '10 Tips To Improve Website Speed',
    description:
      'Web page speed optimization is the process of making changes to your website so that it loads and displays faster. The "optimal" speed for a website can depend on several factors, including the type of content on the website and the expectations of its users.',
    icon: 'chart',
  },
  {
    title: 'How Is the Bandwidth of a Network Measured?',
    description:
      'Network bandwidth is measured in bits per second (Mbps or Gbps) and shows how much data a connection can handle. It can be tested by generating traffic or monitored to see real-time usage.',
    icon: 'search',
  },
];

function ArticleIcon({ type }: { type: string }) {
  if (type === 'clock') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-28 w-28 text-slate-400">
        <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="4" />
        <path d="M50 25v27h19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="9" r="2" fill="currentColor" />
        <circle cx="50" cy="91" r="2" fill="currentColor" />
        <circle cx="9" cy="50" r="2" fill="currentColor" />
        <circle cx="91" cy="50" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'chart') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="h-28 w-28 text-slate-400">
        <path d="M17 13v73h75M29 70l20-22 15 13 25-32" stroke="currentColor" strokeWidth="4" />
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

export default function ResponseTimeArticles() {
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
