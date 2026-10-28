import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function ApiQuickstart() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[30rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Start using the API in <DeveloperGradientText>seconds.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Get up and running in moments with your email address.
          </p>
        </div>
        <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <h3 className="text-sm font-bold">
              <span className="mr-1 text-brand-blue-light">1</span> Grab your key
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Copy it from Integrations &amp; API in your dashboard.
            </p>
          </li>
          <li>
            <h3 className="text-sm font-bold">
              <span className="mr-1 text-brand-blue-light">2</span> Fire your first call
            </h3>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-[#1b2537] p-3 text-[10px] leading-relaxed text-slate-200">
              <code>{`curl -X POST https://api.pulsewatch.com/v2/getMonitors \\
  -d 'api_key=YOUR_API_KEY_HERE&format=json'`}</code>
            </pre>
          </li>
          <li>
            <h3 className="text-sm font-bold">
              <span className="mr-1 text-brand-blue-light">3</span> Parse the JSON
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              The response includes status, uptime ratio, and average response time.
            </p>
          </li>
          <li>
            <h3 className="text-sm font-bold">
              <span className="mr-1 text-brand-blue-light">4</span> That’s it!
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Create, edit, or delete monitors and alert contacts on the fly.
            </p>
          </li>
        </ol>
      </Container>
    </section>
  );
}
