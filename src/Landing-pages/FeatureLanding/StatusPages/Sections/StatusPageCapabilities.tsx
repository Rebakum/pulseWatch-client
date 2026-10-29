const capabilities = [
  {
    title: 'Custom domain',
    description: 'Host your page at a domain your customers already recognize.',
    icon: '⌕',
  },
  {
    title: 'Your own branding',
    description: 'Add your logo and colors for a consistent customer experience.',
    icon: '✳',
  },
  {
    title: 'Uptime display',
    description: 'Show historical uptime and current service availability.',
    icon: '▥',
  },
  {
    title: 'Status subscriptions',
    description: 'Allow users to receive status updates through email.',
    icon: '✉',
  },
  {
    title: 'Incident communication',
    description: 'Publish incident updates and scheduled maintenance notices.',
    icon: '↗',
  },
  {
    title: 'Embeddable widget',
    description: 'Bring live service status to your own site or product.',
    icon: '▣',
  },
];

export default function StatusPageCapabilities() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          All you need for a reliable status page.
        </h2>
        <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="flex min-w-0 gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-lg text-sky-300">
                {item.icon}
              </span>
              <span>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
