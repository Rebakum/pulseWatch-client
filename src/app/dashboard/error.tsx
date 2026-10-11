'use client';

import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Card
        className="w-full max-w-md text-center"
        title="Something went wrong"
        description="The dashboard could not load. Try again, or come back in a moment."
      >
        {process.env.NODE_ENV !== 'production' ? (
          <p className="mb-4 break-words rounded-lg bg-slate-100 px-3 py-2 text-left text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {error.message}
          </p>
        ) : null}

        <Button onClick={reset} className="w-full">
          Try again
        </Button>
      </Card>
    </div>
  );
}
