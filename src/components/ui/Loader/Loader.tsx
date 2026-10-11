const LOADER_BAR_DELAYS = [
  '[animation-delay:0s]',
  '[animation-delay:0.2s]',
  '[animation-delay:0.4s]',
  '[animation-delay:0.6s]',
  '[animation-delay:0.8s]',
  '[animation-delay:1s]',
  '[animation-delay:1.2s]',
] as const;

export function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-[#008080]"
    >
      <div className="relative flex">
        {LOADER_BAR_DELAYS.map((delayClass) => (
          <span
            key={delayClass}
            className={`mx-5 h-[300px] w-[50px] animate-loader-bar bg-[#008080] ${delayClass}`}
          />
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}