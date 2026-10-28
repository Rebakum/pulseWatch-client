type UptimeBarProps = {
  length: number;
  downAt?: number[];
};

// Row of small ticks: one per check, red when that check failed
export default function UptimeBar({ length, downAt = [] }: UptimeBarProps) {
  const up = length - downAt.length;

  return (
    <div
      role="img"
      aria-label={`${up} of ${length} recent checks were operational`}
      className="flex h-5 flex-1 items-stretch gap-[2px]"
    >
      {Array.from({ length }).map((_, i) => (
        <span
          key={i}
          className={`flex-1 rounded-[2px] ${
            downAt.includes(i) ? 'bg-[var(--color-status-down)]' : 'bg-[var(--color-status-up)]'
          }`}
        />
      ))}
    </div>
  );
}
