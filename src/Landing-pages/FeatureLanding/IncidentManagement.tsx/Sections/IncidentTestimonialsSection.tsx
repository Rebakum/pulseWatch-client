const testimonials = [
  {
    name: 'Dominique S.',
    role: 'Chief Operating Officer',
    title: 'A great tool',
    quote:
      'As a charity running large-scale online, multi-funding campaigns, getting immediate alerts to any issue with Social Media and AWS availability is a vital component. UptimeRobot provides us with a reasonably easy to use system. We now have a way to quickly rectify problems. The fact that it integrates with Slack is an added bonus. We have used UptimeRobot for a number of years now and found it easy to use, easy to implement and we always had great response times from customer services.',
    source: 'G2.com',
  },
  {
    name: 'Brian B.',
    role: 'Web Manager',
    title: 'Useful for keeping me ahead of the game',
    quote:
      "It's very useful for me to be not real-time as managing the status of my website. I have to manage about two dozen properties, not all that I own, so having a single footprint tool for this is great. It's got a lot of handy alerts which I may not have been known those there is an issue.",
    source: 'Capterra.com',
  },
  {
    name: 'Darcy Myung',
    role: '',
    title: 'Happy UptimeRobot clients for many years!',
    quote:
      'My company is an IT provider for several small and medium sized businesses. We have a separate commercial RMM tool to monitor and download from client sites and servers, but honestly, we also rapidly subscribe to UptimeRobot for own and our clients. Being proactive for our clients is important and we have been happy UptimeRobot clients for YEARS! Their emails are so simple to read and reliable (especially when it goes down and we get a server down alert). It has a nice tool for our business users so we can deliver the best service for our clients. Highly recommended!',
    source: 'Trustpilot.com',
  },
];

export default function IncidentTestimonialsSection() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What users <span className="bg-brand-gradient bg-clip-text text-transparent">love</span>{' '}
          about PulseWatch{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="flex gap-1 text-sky-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold">{testimonial.name}</p>
              {testimonial.role ? (
                <p className="text-[11px] text-slate-400">{testimonial.role}</p>
              ) : null}
              <p className="mt-4 text-xs font-semibold">{testimonial.title}</p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300">
                {testimonial.quote}
              </p>
              <p className="mt-5 text-[10px] text-slate-400">
                Reviewed on <span className="font-semibold text-sky-400">{testimonial.source}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
