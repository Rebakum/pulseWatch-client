import { ChevronDown, EyeOff, Upload } from 'lucide-react';
import type { ReactNode } from 'react';

/* =====================================================================
   Incident features section: 5 alternating rows (visual + text)

     1. Control your incident visibility.   (flat card,  visual LEFT)
     2. Push updates to status page.        (skewed card, visual RIGHT)
     3. Collaborate through comments.       (flat card,  visual LEFT)
     4. Advanced filtering and sorting.     (skewed card, visual RIGHT)
     5. Export logs in a new, streamlined format. (flat tiles, visual LEFT)

   Colours: no green anywhere. Accent is the blue -> purple brand gradient,
   incident colours are red / orange.

   Skewed visuals use the same plane as the hero:
   skewY(-18deg) skewX(33deg), children placed in "design px" and scaled
   by --s.
===================================================================== */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';
const GRADIENT_BG = 'bg-[linear-gradient(90deg,#1479c0,#5568b0,#85429a)]';
const ACCENT = 'var(--color-brand-blue-light, #3b9be8)';
const DOWN = 'var(--color-status-down, #ef4444)';
const WARN = 'var(--color-status-warning, #f59e0b)';

const CARD =
  'overflow-hidden rounded-[18px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_18px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]';

/* same card for the skewed plane (bigger radius / border because it is scaled down) */
const PLANE_CARD =
  'overflow-hidden rounded-[40px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.06)]';

/* ------------------------------------------------------------------ */
/* small helpers                                                       */
/* ------------------------------------------------------------------ */

function Blur({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`blur-[3px] ${className}`}>{children}</span>;
}

/* absolutely positioned box, coordinates in design px (skewed scenes) */
function Box({
  x,
  y,
  w,
  h,
  className = '',
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`} style={{ left: x, top: y, width: w, height: h }}>
      {children}
    </div>
  );
}

/* wrapper that puts children on the skewed plane */
function Plane({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mx-auto h-[270px] w-full max-w-[460px] sm:h-[310px]"
    >
      <div
        aria-hidden="true"
        className="absolute left-2 top-[96px] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.4] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:left-6 sm:top-[110px] sm:[--s:0.48]"
      >
        {children}
      </div>
    </div>
  );
}

function Badge({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="inline-block rounded-[5px] px-1.5 py-[1px] text-[10px] font-bold leading-[14px]"
      style={{ color, background: `color-mix(in srgb, ${color} 22%, transparent)` }}
    >
      {children}
    </span>
  );
}

function Toggle({ on = false }: { on?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block h-[14px] w-[24px] shrink-0 rounded-full ${
        on ? GRADIENT_BG : 'bg-white/15'
      }`}
    >
      <span
        className={`absolute top-[2px] size-[10px] rounded-full bg-white transition-all ${
          on ? 'left-[12px]' : 'left-[2px]'
        }`}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 1: incident visibility (flat)                                */
/* ------------------------------------------------------------------ */

const FADED_ROWS = [
  { name: 'shop.client-eshop.com', when: 'Apr 14, 2026, 09:12' },
  { name: 'api.client-eshop.com', when: 'Apr 13, 2026, 22:40' },
  { name: 'cdn.client-eshop.com', when: 'Apr 13, 2026, 18:05' },
];

function VisibilityVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className={`${CARD} relative z-[1] p-4`}>
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 block size-[20px] shrink-0 rounded-full"
            style={{
              background: WARN,
              boxShadow: `0 0 0 4px color-mix(in srgb, ${WARN} 25%, transparent)`,
            }}
          />
          <div className="min-w-0">
            <p className="text-[14px] font-bold leading-[20px] text-white">
              Ongoing incident on www.client-eshop.com
            </p>
            <p className="mt-0.5 text-[10px] text-[#8a94a6]">
              <Blur>https://www.client-eshop.com/checkout</Blur>
            </p>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/[0.07] px-2 py-[2px] text-[10px] text-[#c4cdd9]">
              <EyeOff size={11} aria-hidden="true" />
              Excluded
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-3">
          <p className="text-[10px] text-[#8a94a6]">Root cause</p>
          <p className="mt-1.5 flex items-center gap-2 text-[13px] font-bold text-white">
            <Badge color={WARN}>SLOW</Badge>
            Response time
          </p>
          <p className="mt-1.5 text-[10px] text-[#a9b4c4]">
            Response time above 1,000 milliseconds detected
          </p>
        </div>
      </div>

      {/* dim rows peeking out below, fading away */}
      <div
        aria-hidden="true"
        className="-mt-2 px-3 opacity-60 [mask-image:linear-gradient(180deg,#000_0%,transparent_100%)]"
      >
        {FADED_ROWS.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[10px] text-[#8a94a6]"
          >
            <Blur>{r.name}</Blur>
            <span>{r.when}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 2: push updates to status page (skewed)                      */
/* ------------------------------------------------------------------ */

const STATUS_CHIPS = ['Investigating', 'Identified', 'Monitoring'];

function StatusPageVisual() {
  return (
    <Plane label="Push an incident comment to your status page">
      <Box x={0} y={0} w={640} h={430} className={PLANE_CARD}>
        {/* upload tile */}
        <Box
          x={36}
          y={64}
          w={250}
          h={214}
          className="grid place-items-center rounded-[34px] border-2 border-white/[0.1] bg-white/[0.04]"
        >
          <Upload size={110} strokeWidth={1.4} className="text-[#c4cdd9]" aria-hidden="true" />
        </Box>

        {/* right column */}
        <Box
          x={330}
          y={60}
          className="whitespace-nowrap text-[28px] font-bold leading-[36px] text-white"
        >
          Status page
        </Box>
        <Box
          x={330}
          y={110}
          className="whitespace-nowrap text-[20px] leading-[28px] text-[#a9b4c4]"
        >
          Update status (optional)
        </Box>
        {STATUS_CHIPS.map((c, i) => (
          <Box
            key={c}
            x={330}
            y={160 + i * 50}
            w={250}
            h={40}
            className={`flex items-center rounded-[12px] border-2 px-4 text-[18px] ${
              i === 0
                ? 'border-transparent bg-[linear-gradient(90deg,#1479c0,#5568b0)] text-white'
                : 'border-white/[0.08] bg-white/[0.03] text-[#a9b4c4]'
            }`}
          >
            {c}
          </Box>
        ))}

        {/* dim footer line */}
        <Box x={36} y={318} w={568} h={2} className="bg-white/[0.07]" />
        <Box x={36} y={344} className="whitespace-nowrap text-[18px] text-[#8a94a6]">
          Comment disappears when the incident is resolved
        </Box>
        <Box x={36} y={378} w={180} h={34} className="rounded-[10px] bg-white/[0.05]" />
      </Box>
    </Plane>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 3: comments & post-mortems (flat)                            */
/* ------------------------------------------------------------------ */

function CommentsVisual() {
  return (
    <div className={`${CARD} mx-auto w-full max-w-[420px] p-4`}>
      <p className="flex items-center gap-2 text-[12px] font-bold text-white">
        Comments &amp; Post-mortems
        <span className="rounded-[5px] bg-white/[0.1] px-1.5 text-[9px] font-semibold text-[#c4cdd9]">
          2
        </span>
      </p>

      <div className="mt-3 rounded-[8px] border border-white/[0.09] bg-white/[0.03] px-2.5 py-2">
        <p className="text-[10px] leading-[15px] text-[#8a94a6]">
          <Blur>Add a comment. Tag a team member with @ to notify them by email.</Blur>
        </p>
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-2">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-[#a9b4c4]">
          <span className="flex items-center gap-1.5">
            <Toggle on />
            Publish on status page
          </span>
          <span className="flex items-center gap-1.5">
            <Toggle />
            Mark as post-mortem
          </span>
        </div>
        <span
          className={`shrink-0 rounded-[7px] px-2.5 py-1 text-[10px] font-semibold text-white ${GRADIENT_BG}`}
        >
          Add comment
        </span>
      </div>

      <div className="mt-4 space-y-3 border-t border-white/[0.07] pt-3">
        <div className="flex gap-2.5">
          <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-white/[0.1] text-[8px] font-bold text-white">
            MP
          </span>
          <div className="min-w-0">
            <p className="text-[10px] text-white">
              <span className="font-bold">Max Petrovic</span>{' '}
              <span className="text-[#8a94a6]">17 hours ago</span>
            </p>
            <p className="mt-1 text-[9.5px] leading-[14px] text-[#c4cdd9]">
              Root cause: a failed deploy on the upstream API gateway. We rolled back to the
              previous release and confirmed recovery after 11 minutes. A health check was added to
              catch this earlier.
            </p>
          </div>
        </div>

        <div className="flex gap-2.5">
          <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-white/[0.1] text-[8px] font-bold text-white">
            JD
          </span>
          <div className="min-w-0">
            <p className="text-[10px] text-white">
              <span className="font-bold">John Doe</span>{' '}
              <span className="text-[#8a94a6]">2 hours ago</span>
            </p>
            <p className="mt-1 text-[9.5px] leading-[14px] text-[#c4cdd9]">
              <span style={{ color: ACCENT }}>@Max Petrovic</span> great job on the quick rollback.
              Let&rsquo;s share this on the status page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 4: filtering and sorting (skewed)                            */
/* ------------------------------------------------------------------ */

const FILTER_OPTIONS = [
  { label: 'Down', selected: true },
  { label: 'Expiring', selected: true },
  { label: 'Up', selected: false },
];

function FilterVisual() {
  return (
    <Plane label="Filter incidents by status and monitor type">
      <Box x={0} y={0} w={560} h={540} className={PLANE_CARD}>
        {/* dropdown header */}
        <Box
          x={30}
          y={30}
          w={500}
          h={64}
          className="flex items-center justify-between rounded-[16px] border-2 border-white/[0.1] bg-white/[0.04] px-5 text-[20px] text-[#e5e7eb]"
        >
          Status: Down, Expiring
          <ChevronDown size={26} aria-hidden="true" />
        </Box>

        {/* options */}
        {FILTER_OPTIONS.map(({ label, selected }, i) => (
          <Box
            key={label}
            x={50}
            y={122 + i * 62}
            w={460}
            h={48}
            className="flex items-center gap-4 text-[22px] text-[#e5e7eb]"
          >
            <span
              className={`grid size-[26px] place-items-center rounded-full border-2 ${
                selected
                  ? 'border-transparent bg-[linear-gradient(135deg,#1479c0,#85429a)]'
                  : 'border-white/25'
              }`}
            >
              {selected ? <span className="size-[10px] rounded-full bg-white" /> : null}
            </span>
            {label}
          </Box>
        ))}

        {/* second filter */}
        <Box
          x={50}
          y={322}
          w={460}
          className="whitespace-nowrap text-[20px] leading-[28px] text-[#a9b4c4]"
        >
          Type: HTTP(S), Keyword (Heartbeat)
        </Box>
        <Box x={30} y={372} w={500} h={2} className="bg-white/[0.07]" />

        {/* buttons */}
        <Box
          x={30}
          y={426}
          w={200}
          h={72}
          className="grid place-items-center rounded-[16px] border-2 border-white/[0.1] bg-white/[0.05] text-[22px] font-semibold text-[#e5e7eb]"
        >
          Reset
        </Box>
        <Box
          x={260}
          y={426}
          w={270}
          h={72}
          className={`grid place-items-center rounded-[16px] text-[22px] font-semibold text-white ${GRADIENT_BG}`}
        >
          Filter (2)
        </Box>
      </Box>
    </Plane>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 5: CSV export (flat)                                         */
/* ------------------------------------------------------------------ */

const EXPORT_ROWS = Array.from({ length: 6 }, (_, i) => i);

function ExportVisual() {
  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="grid grid-cols-[1.1fr_1fr] gap-3">
        <div
          className={`${CARD} grid h-[92px] place-items-center text-[26px] font-medium tracking-tight text-[#c4cdd9]`}
        >
          .CSV
        </div>
        <div className={`${CARD} grid h-[92px] place-items-center`}>
          <Upload size={42} strokeWidth={1.5} className="text-[#c4cdd9]" aria-hidden="true" />
        </div>
      </div>

      {/* dim table preview */}
      <div
        aria-hidden="true"
        className="mt-3 rounded-[12px] border border-white/[0.08] bg-white/[0.03] p-3 opacity-70 [mask-image:linear-gradient(180deg,#000_30%,transparent_100%)]"
      >
        <div className="mb-2 flex gap-3 text-[8px] text-[#8a94a6]">
          <span className="w-[26%]">Monitor</span>
          <span className="w-[22%]">Started</span>
          <span className="w-[22%]">Ended</span>
          <span className="w-[18%]">Duration</span>
          <span>Cause</span>
        </div>
        {EXPORT_ROWS.map((i) => (
          <div
            key={i}
            className="flex gap-3 border-t border-white/[0.06] py-1.5 text-[8px] text-[#a9b4c4]"
          >
            <span className="w-[26%]">
              <Blur>client-eshop.com</Blur>
            </span>
            <span className="w-[22%]">
              Apr {10 + i}, 09:1{i}
            </span>
            <span className="w-[22%]">
              Apr {10 + i}, 09:4{i}
            </span>
            <span className="w-[18%]">{12 + i * 3} min</span>
            <span style={{ color: i % 2 ? WARN : DOWN }}>{i % 2 ? 'Slow' : 'Down'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Rows                                                                */
/* ------------------------------------------------------------------ */

const FEATURES: {
  id: string;
  title: string;
  body: string;
  visual: ReactNode;
  visualRight: boolean;
}[] = [
  {
    id: 'visibility',
    title: 'Control your incident visibility',
    body: "Exclude incidents from reports and dashboards when they don't need to be publicized. Whether you're dealing with minor internal tests or false alarms, you decide what shows up in your metrics, keeping your data clean and focused.",
    visual: <VisibilityVisual />,
    visualRight: false,
  },
  {
    id: 'status-page',
    title: 'Push updates to status page',
    body: 'Keep your customers and users informed and push incident comments with one click to your public (or private) status page. The comment will automatically disappear once the incident is resolved.',
    visual: <StatusPageVisual />,
    visualRight: true,
  },
  {
    id: 'comments',
    title: 'Collaborate through comments',
    body: "Tag team members directly in incident comments. They'll get an email notification for quick collaboration and faster resolution.",
    visual: <CommentsVisual />,
    visualRight: false,
  },
  {
    id: 'filtering',
    title: 'Advanced filtering and sorting',
    body: 'Quickly pinpoint the incidents that need your attention by filtering or sorting based on: start date and end date, duration, root cause, or status (resolved or ongoing). This saves your team precious time and helps focus on critical events first.',
    visual: <FilterVisual />,
    visualRight: true,
  },
  {
    id: 'export',
    title: 'Export logs in a new, streamlined format',
    body: 'Easily export your incident logs, whether for a specific monitor or the entire account. The new export replaces separate "up" and "down" events with consolidated incidents that include duration and end date/time, making exports more concise and easier to read.',
    visual: <ExportVisual />,
    visualRight: false,
  },
];

function FeatureRow({ id, title, body, visual, visualRight }: (typeof FEATURES)[number]) {
  return (
    <article
      aria-labelledby={`${id}-title`}
      className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20"
    >
      <div className={`min-w-0 ${visualRight ? 'lg:order-2' : 'lg:order-1'}`}>{visual}</div>

      <div className={`min-w-0 ${visualRight ? 'lg:order-1' : 'lg:order-2'}`}>
        <h2
          id={`${id}-title`}
          className="mb-4 max-w-[420px] text-[clamp(1.5rem,2.4vw,1.875rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]"
        >
          {title}
          <span className={GRADIENT_TEXT}>.</span>
        </h2>
        <p className="max-w-[440px] text-[15px] leading-[1.7] text-[var(--muted)]">{body}</p>
      </div>
    </article>
  );
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
    />
  );
}

export default function IncidentFeaturesSection() {
  return (
    <section className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        {FEATURES.map((feature, i) => (
          <div key={feature.id}>
            {i > 0 ? <Divider /> : null}
            <FeatureRow {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}
