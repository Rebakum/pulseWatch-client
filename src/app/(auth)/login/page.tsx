import Link from 'next/link';
import { Logo } from '@/components/common/Logo/Logo';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Input } from '@/components/ui/Input/Input';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <Logo className="mb-8 rounded" />

      <Card className="w-full max-w-md" title="Welcome back" description="Sign in to check your monitors.">
        {/* Submit wiring lands with the auth task; the foundation ships no API endpoints yet. */}
        <form className="space-y-4">
          <Input
            id="login-email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
          <Input
            id="login-password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
          />

          <Button type="button" className="w-full" size="lg">
            Sign in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          New to PulseWatch?{' '}
          <Link
            href="/register"
            className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
          >
            Create an account
          </Link>
        </p>
      </Card>
    </main>
  );
}
