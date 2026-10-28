export default function TrackProvidersSection() {
  const planData = [
    { plan: 'Solo 10', monitors: '10', thirdParty: '1' },
    { plan: 'Solo 50', monitors: '50', thirdParty: '5' },
    { plan: 'Team', monitors: '100', thirdParty: '20' },
    { plan: 'Scale 200', monitors: '200', thirdParty: '40' },
    { plan: 'Scale 500', monitors: '500', thirdParty: '100' },
    { plan: 'Scale 1000', monitors: '1000', thirdParty: '200' },
  ];

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight leading-[1.2] max-w-xl">
            Track providers without using a monitor
            <span className="text-[var(--color-status-up)]">.</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-xs md:mt-2">
            Third party services have a separate allowance, so tracking them never uses your monitor
            quota.
          </p>
        </div>

        {/* Pricing / Allowance Table */}
        <div className="w-full overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-[color-mix(in_srgb,var(--border)_40%,transparent)]">
                <th className="py-4 text-sm font-semibold text-[var(--foreground)] w-1/3">Plan</th>
                <th className="py-4 text-sm font-semibold text-[var(--foreground)] w-1/3 text-center">
                  Monitors
                </th>
                <th className="py-4 text-sm font-semibold text-[var(--foreground)] w-1/3 text-right">
                  Third party services
                </th>
              </tr>
            </thead>
            <tbody>
              {planData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[color-mix(in_srgb,var(--border)_20%,transparent)] hover:bg-[color-mix(in_srgb,var(--surface)_50%,transparent)] transition-colors"
                >
                  <td className="py-4 text-sm font-medium text-[var(--foreground)]">{row.plan}</td>
                  <td className="py-4 text-sm text-[var(--muted)] text-center">{row.monitors}</td>
                  <td className="py-4 text-sm text-[var(--muted)] text-right">{row.thirdParty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Note & CTA Button */}
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-[var(--muted)] text-xs sm:text-sm max-w-2xl leading-relaxed">
            Search all 6,000+ providers on any paid plan. Your plan only limits how many you can
            track at once, and your dashboard keeps count.
          </p>

          <button type="button" className="outline-btn">
            Start monitoring Third Party Services
          </button>
        </div>
      </div>
    </section>
  );
}
