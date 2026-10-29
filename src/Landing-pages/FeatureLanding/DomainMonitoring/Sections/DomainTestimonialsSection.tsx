const testimonials = [
  {
    name: 'David H.',
    role: 'Software Engineer',
    title: 'Alerts me to issues outside of my network',
    quote:
      "Power outages and network outages are obvious, but more subtle things like DNS are less obvious. We get email notifications on the phone to issues we don't know we have. There is very little management on my side, so easy to manage.",
    source: 'G2.com',
  },
  {
    name: 'Joao R.',
    role: 'DevOps Engineer',
    title: 'Uptime monitoring made easy - and reliable!',
    quote:
      "Getting started with PulseWatch is quick and doesn't require complex steps for most setups. Implementing it is as easy as adding your domain and choosing how and what you want to monitor. The standard monitor is HTTP, but they also offer Ping, Keyword, and Port for free...",
    source: 'G2.com',
  },
  {
    name: 'Faraaz M.',
    role: 'Manager IT',
    title: 'PulseWatch: The Ultimate Guardian for Your Uptime!',
    quote:
      "I've been using PulseWatch to monitor my website's uptime, and I can't express how incredible this service is! From the get-go, the setup was seamless and user-friendly, making it perfect for both beginners and seasoned pros alike.",
    source: 'Capterra.com',
  },
];

export default function DomainTestimonialsSection() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-lg text-2xl font-bold tracking-tight sm:text-3xl">
          What users love about our
          <br />
          domain monitoring.
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="flex gap-1 text-sky-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold">{testimonial.name}</p>
              <p className="text-[11px] text-slate-400">{testimonial.role}</p>
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
