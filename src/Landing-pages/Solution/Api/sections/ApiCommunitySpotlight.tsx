import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const COMMUNITY_QUOTES = [
  {
    quote:
      'I built an Integrately/Make scenario that receives all webhook events from PulseWatch, locates or creates the right ticket on our system, and closes it on recovery.',
    name: 'Emmaly',
    date: 'June 2023',
  },
  {
    quote:
      'I added the API to our Grafana dashboard today. I also added another table widget for reporting on latest status, average response time, and 7 day uptime.',
    name: 'Amy',
    date: 'October 2023',
  },
  {
    quote:
      'If I put uptime data in Prometheus then I can make a dashboard in GCP’s Cloud Alerting/Monitoring and then not have to hear everyone tell me Grafana is too complicated.',
    name: 'Muddycow',
    date: 'December 2023',
  },
  {
    quote:
      'PulseWatch has been keeping my website online 24/7 for many months now, with a 99% uptime. That’s absolutely insane!',
    name: 'Jb',
    date: 'April 2025',
  },
  {
    quote:
      'Several people have built Terraform providers that use the API to create resources in their own reusable, idempotent code.',
    name: 'Renomaros',
    date: 'June 2024',
  },
  {
    quote:
      'The main goal is to have its own, independent heartbeat server, to be able to integrate with any alerting provider—including UptimeRobot.',
    name: 'Tomasz Klim',
    date: 'April 2025',
  },
] as const;

export default function ApiCommunitySpotlight() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <DeveloperGradientText>Community</DeveloperGradientText> spotlight.
          </h2>
        </div>
        <div className="mt-8 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_QUOTES.map(({ quote, name, date }) => (
            <article
              key={name}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <p className="text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                &quot;{quote}&quot;
              </p>
              <p className="mt-3 text-xs font-bold">{name}</p>
              <p className="text-xs text-[var(--muted)]">{date}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
