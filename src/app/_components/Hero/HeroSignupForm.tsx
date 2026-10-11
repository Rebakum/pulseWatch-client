'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const HeroSignupForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setError('Enter a valid email address.');
      return;
    }

    setError(undefined);
    setIsNavigating(true);
    router.push(`/register?email=${encodeURIComponent(trimmedEmail)}`);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Input
          id="hero-email"
          label="Email"
          hideLabel
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          error={error}
          disabled={isNavigating}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error !== undefined) {
              setError(undefined);
            }
          }}
          className="h-12 sm:flex-1"
        />
        <Button type="submit" size="lg" isLoading={isNavigating} className="w-full sm:w-auto">
          Start monitoring free
        </Button>
      </div>
      <p className="mt-3 text-sm text-[var(--muted)]">No credit card required.</p>
    </form>
  );
};
