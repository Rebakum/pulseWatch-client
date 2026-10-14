'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FormEvent টাইপ যুক্ত করা হয়েছে
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // API Call Simulate
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-center items-center px-4 font-sans selection:bg-[var(--color-brand-blue)] selection:text-white">
      {/* Brand Logo with Status Indicator */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="h-3.5 w-3.5 rounded-full bg-[var(--color-status-up)] shadow-[0_0_12px_rgba(22,163,74,0.6)] animate-pulse"></span>
        <span className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          CodesRaft
        </span>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-purple)] to-[var(--color-brand-magenta)] bg-clip-text text-transparent">
            Password
          </span>{' '}
          reset.
        </h1>

        {/* Subtitle */}
        <p className="text-[var(--muted)] text-sm sm:text-base mb-8">
          We will send password reset link to your e-mail.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[var(--foreground)] mb-2"
              >
                Your e-mail
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E.g. info@example.com"
                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-all"
              />
            </div>
            <button
              type="submit"
              className="mt-10 inline-flex justify-center items-center rounded-full bg-brand-gradient w-full text-center py-3 px-4  text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              {' '}
              {loading ? 'Sending link...' : 'Send password reset link'}
            </button>
          </form>
        ) : (
          /* Success Message State */
          <div className="p-4 mb-6 rounded-lg bg-[var(--surface)] border border-[var(--color-status-up)]/30 text-[var(--color-status-up)] text-sm text-center">
            Password reset link has been sent to{' '}
            <span className="font-semibold text-[var(--foreground)]">{email}</span>. Please check
            your inbox!
          </div>
        )}

        {/* Back to Login */}
        <div className="mt-8">
          <Link
            href="/login"
            className="text-[var(--color-brand-blue)] hover:text-[var(--color-brand-magenta)] hover:underline font-medium text-sm transition-colors"
          >
            Back to Log in
          </Link>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-sm text-[var(--muted)]">
          Don't have an account yet?{' '}
          <Link
            href="/signup"
            className="block sm:inline text-[var(--color-brand-blue)] hover:text-[var(--color-brand-magenta)] hover:underline font-medium mt-1 sm:mt-0 transition-colors"
          >
            Create your Free account now
          </Link>
        </div>
      </div>
    </div>
  );
}
