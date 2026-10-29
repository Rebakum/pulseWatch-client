const testimonials = [
  {
    brand: 'WordPress VIP',
    quote:
      '“Thanks to monitoring thousands of domains, WordPress VIP improved response times and performance while also saving on infrastructure costs.”',
    name: 'Doyle Irvin',
    role: 'Product Marketing Manager',
  },
  {
    brand: 'ConfigCat',
    quote:
      '“ConfigCat significantly enhanced the user experience and trust by making UptimeRobot and live alerts an essential part of their uptime monitoring.”',
    name: 'Gergely Sinka',
    role: 'Founder & CPO at ConfigCat',
  },
  {
    brand: 'Stratosphere Lab',
    quote:
      '“UptimeRobot is now part of our core tools for monitoring. The integration with Slack and the mobile application allows us to have information on what is happening and resolve incidents as fast as possible.”',
    name: 'Veronika Valeros',
    role: 'Senior Researcher & Project Leader',
  },
  {
    brand: 'HEINEKEN',
    quote:
      '“For critical services, uptime is crucial. UptimeRobot notifies us instantly when there’s downtime or degraded performance, allowing us to respond efficiently.”',
    name: 'David Bezgovšek',
    role: 'IT Service Delivery Manager',
  },
];

export default function StatusPageTestimonials() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 px-2">
          <h2 className="max-w-sm text-2xl font-bold tracking-tight sm:text-3xl">
            What users say about
            <br />
            our status pages.
          </h2>
          <div className="flex items-center gap-7">
            <p className="text-center text-lg font-bold">
              4.7 <span className="text-sky-400">★</span>
              <span className="mt-1 block text-[9px] font-normal text-slate-400">stars out of 5</span>
            </p>
            <p className="text-center text-lg font-bold">
              284+
              <span className="mt-1 block text-[9px] font-normal text-slate-400">reviews on G2</span>
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.brand}
              className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <p className="min-h-8 text-lg font-bold tracking-tight text-slate-200">{item.brand}</p>
              <p className="mt-4 flex-1 text-xs leading-relaxed text-slate-300">{item.quote}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-xs font-bold">
                  {item.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold">{item.name}</span>
                  <span className="block text-[10px] text-slate-400">{item.role}</span>
                </span>
              </div>
              <p className="mt-4 text-[10px] text-sky-300">Read case study →</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
