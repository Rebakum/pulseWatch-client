import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';

export default function MonitorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Monitors</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Every site, endpoint and host you keep an eye on.
          </p>
        </div>

        {/* Creating monitors ships with the monitor CRUD task. */}
        <Button disabled size="md">
          Add monitor
        </Button>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="h-10 w-10 text-brand-500"
          >
            <path
              d="M2 12h4l2.5-6 3.5 12 3-8 1.5 2H22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            No monitors yet
          </h2>
          <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Add your first monitor to start recording checks, uptime and incidents.
          </p>
        </div>
      </Card>
    </div>
  );
}
