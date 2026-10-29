const reviews = [
  {
    name: 'Bert B.',
    role: 'Head of IT',
    source: 'Capterra.com',
    title: 'It does what they claim',
    quote:
      'I can be confident I’ll know when the server reboots and I need to turn it back on! I set it and forget it. Until it emails me that we’ve had an outage. That kind of peace of mind is worth the price of admission.',
  },
  {
    name: 'Phillip M.',
    role: 'Quality Assurance Engineer',
    source: 'G2.com',
    title: 'Easy to use, robust, does exactly what it promises',
    quote:
      'Unlike some other monitoring services I tried, PulseWatch has been very reliable. I’ve rarely, if ever, experienced false positives, which is crucial to preserving our staff’s time and faith in the service. I also appreciate PulseWatch’s flexible and customizable status page.',
  },
  {
    name: 'Ben F.',
    role: '',
    source: 'Trustpilot.com',
    title: 'Great for non-devs to keep an eye on multiple pages',
    quote:
      'I utilize this for work to keep an eye on a number of sites and for a non-dev it’s such a great tool. As it sits outside of our hosting it’s great to have confirmation if there is an issue.',
  },
];

export default function AlertingTestimonialsSection() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Why people <span className="bg-brand-gradient bg-clip-text text-transparent">love</span>{' '}
          PulseWatch.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
            >
              <div
                className="bg-brand-gradient bg-clip-text text-sm tracking-[0.2em] text-transparent"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <p className="mt-4 text-xs font-semibold">{review.name}</p>
              {review.role && <p className="mt-1 text-[10px] text-slate-400">{review.role}</p>}
              <h3 className="mt-4 text-xs font-semibold leading-relaxed">{review.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300">{review.quote}</p>
              <p className="mt-5 border-t border-white/[0.07] pt-4 text-[10px] text-slate-400">
                Reviewed on{' '}
                <span className="bg-brand-gradient bg-clip-text font-medium text-transparent">
                  {review.source}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}