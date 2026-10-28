export default function IncidentHistorySection() {
  const monitorsList = [
    {
      id: 1,
      name: 'api.core-backend-v2',
      status: 'Down for 42m',
      statusType: 'down', // status-down (#dc2626)
      tags: ['PROD', 'AWS East', 'Critical'],
    },
    {
      id: 2,
      name: 'www.clientshop.com',
      status: 'Up 18d 2h',
      statusType: 'up', // status-up (#1279c1)
      tags: ['Client S...', 'Shopify', 'SSL'],
    },
    {
      id: 3,
      name: 'dbreplica-01 (Port 5432)',
      status: 'Paused 24d',
      statusType: 'paused', // status-paused (#6b7280)
      tags: ['Database', 'Staging', 'Postgres'],
    },
    {
      id: 4,
      name: 'mx.companymail.net',
      status: 'Paused 1h',
      statusType: 'paused',
      tags: ['MX', 'Office365', 'Mail'],
    },
  ];

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-16 px-4 sm:px-8 lg:px-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto rounded-3xl border border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] text-[var(--foreground)]">
              Built on years of
              <br />
              incident history
              <span className="text-[var(--color-status-up)]">.</span>
            </h2>

            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
              Third party monitoring draws on years of incident data covering thousands of cloud and
              SaaS providers. The data comes from IsDown, which UptimeRobot acquired in 2026.
            </p>
          </div>

          {/* Right Dashboard UI Mockup */}
          <div className="lg:col-span-7 relative rounded-xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[color-mix(in_srgb,var(--background)_80%,#000)] p-4 sm:p-6 shadow-inner overflow-hidden">
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-4 border-r border-[color-mix(in_srgb,var(--border)_40%,transparent)] pr-3 space-y-4">
                {/* Logo */}
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[var(--foreground)] mb-6">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-status-up)] inline-block"></span>
                  UptimeRobot
                </div>

                {/* Sidebar Menu Items */}
                <nav className="space-y-1.5 text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] transition-colors cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current"></span>
                    Monitors
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md bg-[color-mix(in_srgb,var(--color-status-up)_15%,transparent)] text-[var(--color-status-up)] font-medium">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-status-up)]"></span>
                    3rd party services
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] transition-colors cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current"></span>
                    Incidents
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] transition-colors cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current"></span>
                    Status pages
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] transition-colors cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current"></span>
                    Maintenance
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] transition-colors cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current"></span>
                    Team members
                  </div>
                </nav>
              </div>

              {/* Main Panel */}
              <div className="col-span-8 space-y-4 pl-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                    Monitors<span className="text-[var(--color-status-up)]">.</span>
                  </h3>
                </div>

                {/* Filters Row */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[var(--muted)]">
                  <div className="px-2 py-1 rounded bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] border border-[color-mix(in_srgb,var(--border)_50%,transparent)]">
                    0/8 Bulk actions
                  </div>
                  <div className="px-2 py-1 rounded bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] border border-[color-mix(in_srgb,var(--border)_50%,transparent)]">
                    All tags
                  </div>
                </div>

                {/* Monitors List */}
                <div className="space-y-2 pt-1">
                  {monitorsList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-[color-mix(in_srgb,var(--surface)_40%,transparent)] border border-[color-mix(in_srgb,var(--border)_30%,transparent)] text-xs"
                    >
                      <div className="flex items-start gap-2">
                        {/* Status Dot */}
                        <span
                          className={`w-2.5 h-2.5 rounded-full mt-0.5 shrink-0 ${
                            item.statusType === 'down'
                              ? 'bg-[var(--color-status-down)]'
                              : item.statusType === 'up'
                                ? 'bg-[var(--color-status-up)]'
                                : 'bg-[var(--color-status-paused)]'
                          }`}
                        ></span>

                        <div>
                          <div className="font-semibold text-[var(--foreground)] text-[11px] sm:text-xs">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-[var(--muted)]">
                            HTTP • {item.status}
                          </div>
                        </div>
                      </div>

                      {/* Tag Chips */}
                      <div className="hidden sm:flex items-center gap-1">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] text-[var(--muted)] border border-[color-mix(in_srgb,var(--border)_40%,transparent)]"
                          >
                            {tag} ×
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
