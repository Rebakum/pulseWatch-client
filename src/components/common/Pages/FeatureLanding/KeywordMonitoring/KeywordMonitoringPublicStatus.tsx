'tsx';
import Link from 'next/link';

export default function KeywordMonitoringPublicStatus() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e17] py-20 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Track critical keywords with <span className="text-emerald-400">precision.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Monitor website changes, content updates, and competitor tracking instantly. Get
              alerted the moment target keywords appear, disappear, or shift.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
              >
                Get Started Free <span className="ml-2">→</span>
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all"
              >
                Explore Live Demo
              </Link>
            </div>
          </div>

          {/* Right Preview Card Area (Matching ThirdParty style with 3D angle & Project Colors) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none transform lg:rotate-[-2deg] lg:translate-x-4 transition-transform duration-500 hover:rotate-0">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-70"></div>

              {/* Main Container Card */}
              <div className="relative rounded-2xl bg-[#111827] border border-slate-800/80 p-6 shadow-2xl shadow-black/60">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-sm font-semibold text-slate-200">
                      Keyword Tracker Active
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-medium">
                    Real-time Scan
                  </span>
                </div>

                {/* Simulated Keyword Items */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-200">Target: "pricing update"</p>
                      <p className="text-xs text-slate-400">Last checked: 2 mins ago</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400">
                      Found (1 match)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        Target: "system maintenance"
                      </p>
                      <p className="text-xs text-slate-400">Last checked: 5 mins ago</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-400">
                      No Change
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
