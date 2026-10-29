const testimonials = [
  {
    name: 'Jeremy F.',
    role: 'Small Business',
    quote:
      'PulseWatch is an excellent and reliable uptime monitoring solution.\nPulseWatch is designed to be accessible and straightforward, offering a quick setup process that requires minimal information. It also offers a variety of monitoring options, from basic uptime checks to more advanced features like SSL certificate and domain name monitoring and provides notifications to keep you informed about your site’s performance and availability, making it easier to address any issues that arise.',
  },
  {
    name: 'Anil Y.',
    role: 'E-Commerce Expert',
    quote:
      'I really like that the system works correctly and on time.\nThe interface is very simple and user friendly. It is understandable even for beginner users. System is really easy to implement and integrate. I use it very often. I have a trust on customer support to have a resolve on when I got a problem.',
  },
  {
    name: 'Anshpreet S.',
    role: 'Developer',
    quote:
      'Excellent experience.\nIt’s user interface, user interaction, and quick response through emails are outstanding, especially considering it’s free of charge. It also offers ease of implementation, good customer support, easy integration, and a number of useful features, which is why I use it frequently.',
  },
];

export default function SslTestimonialsSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-lg text-2xl font-bold tracking-tight sm:text-3xl">
          What users love about our
          <br />
          SSL monitoring.
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex gap-1 text-sky-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold">{testimonial.name}</p>
              <p className="text-[11px] text-[var(--muted)]">{testimonial.role}</p>
              <p className="mt-4 flex-1 whitespace-pre-line text-xs leading-relaxed text-[var(--foreground)]">
                {testimonial.quote}
              </p>
              <p className="mt-5 text-[10px] text-[var(--muted)]">
                Reviewed on <span className="font-semibold text-sky-400">G2.com</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
