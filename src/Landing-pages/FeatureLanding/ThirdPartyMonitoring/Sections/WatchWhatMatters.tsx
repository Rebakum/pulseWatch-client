import Link from 'next/link'; // Next.js না হলে সাধারণ <a> ট্যাগ ব্যবহার করতে পারেন

export default function WatchWhatMatters() {
  const features = [
    {
      id: 'parts',
      icon: (
        <svg
          className="w-8 h-8 text-[var(--color-status-up)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.3 7l8.7 5 8.7-5M12 22V12"
          />
        </svg>
      ),
      title: 'Only the parts you use.',
      description:
        "Select the components that matter to you and the rest stays quiet. When their status changes, you get notified instead of checking the provider's status page yourself. You also see the specific state the provider published, not just up or down.",
    },
    {
      id: 'channels',
      icon: (
        <svg
          className="w-8 h-8 text-[var(--color-status-up)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .738-1.674C19.41 13.81 18 11.238 18 8A6 6 0 0 0 6 8c0 3.238-1.41 5.81-2.738 7.326ZM22 8.6c0-.8-.7-1.6-1.5-1.6h-.5"
          />
        </svg>
      ),
      title: 'Channels you already have.',
      description: (
        <>
          Provider incidents route through the contacts and integrations already on your account
          including Slack, MS Teams, PagerDuty, Discord, email, SMS, webhooks, and the rest of the
          20+ native and community{' '}
          <Link
            href="/integrations"
            className="text-[var(--color-status-up)] underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
          >
            integrations
          </Link>
          .
        </>
      ),
    },
    {
      id: 'api',
      icon: (
        <svg
          className="w-8 h-8 text-[var(--color-status-up)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <polyline strokeLinecap="round" strokeLinejoin="round" points="16 18 22 12 16 6" />
          <polyline strokeLinecap="round" strokeLinejoin="round" points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Full control from the API.',
      description:
        'Add providers, change which components you watch, and set alert contacts through the same UptimeRobot API that runs your monitors. Track a new dependency from the code that ships it.',
    },
  ];

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] mb-16">
          Watch what matters
          <span className="text-[var(--color-status-up)]">.</span>
          <br />
          Skip what doesn't
          <span className="text-[var(--color-status-up)]">.</span>
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`flex flex-col items-start space-y-4 md:px-6 first:pl-0 last:pr-0 ${
                idx === 1
                  ? 'md:border-r md:border-[color-mix(in_srgb,var(--border)_50%,transparent)]'
                  : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-1">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--foreground)]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--muted)] text-sm sm:text-[0.9375rem] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
