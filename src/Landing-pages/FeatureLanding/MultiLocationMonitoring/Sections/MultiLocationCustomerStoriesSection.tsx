const customerStories = [
  {
    name: 'Sofia M.',
    role: 'Product lead',
    quote:
      'Regional checks helped our team understand where customers were affected, without adding noise to our alerts.',
    source: 'Customer review',
  },
  {
    name: 'Daniel R.',
    role: 'IT manager',
    quote:
      'The setup is straightforward, and the regional incident details make it easier to decide what to do next.',
    source: 'Customer review',
  },
  {
    name: 'Alex W.',
    role: 'Platform engineer',
    quote:
      'We can see how our service behaves around the world from one place. It has become part of our routine.',
    source: 'Customer review',
  },
];

export default function MultiLocationCustomerStoriesSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          What teams value about PulseWatch
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {customerStories.map((story) => (
            <article
              key={story.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex gap-1 text-sky-300" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[var(--foreground)]">
                “{story.quote}”
              </p>
              <p className="mt-4 text-xs font-semibold">{story.name}</p>
              <p className="text-[11px] text-[var(--muted)]">{story.role}</p>
              <p className="mt-3 text-[10px] text-[var(--muted)]">{story.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
