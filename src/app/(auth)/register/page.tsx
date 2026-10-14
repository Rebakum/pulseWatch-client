'use client';

import { Globe, Mail } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

// Reusable Github SVG Icon Component
const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function RegisterPage() {
  const [targetUrl, setTargetUrl] = useState('');

  const handleMonitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Monitor target:', targetUrl);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center p-6">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-3 h-3 rounded-full bg-brand-gradient inline-block animate-pulse"></span>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">PulseWatch</h1>
      </div>

      <div className="w-full max-w-md bg-[color:var(--surface)]/80 p-8 rounded-2xl border border-[var(--border)] shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[var(--foreground)]">
          Start monitoring now
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>

        {/* Website URL Input Form */}
        <form onSubmit={handleMonitorSubmit} className="mb-6">
          <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
            Website to monitor
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted)]">
              <Globe className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="E.g. mywebsite.com"
              className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>
        </form>

        <div className="text-center text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
          Create your account
        </div>

        {/* OAuth & Email Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[var(--background)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-xl font-medium text-[var(--foreground)] transition-colors">
            <span className="font-bold text-lg">G</span> Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[var(--background)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-xl font-medium text-[var(--foreground)] transition-colors">
            <GithubIcon className="w-5 h-5" /> Github
          </button>

          <Link
            href="/register/email"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[var(--background)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-xl font-medium text-[var(--foreground)] transition-colors"
          >
            <Mail className="w-5 h-5" /> Use email
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-center text-sm text-[var(--muted)] space-y-3">
        <p>
          Already have an account?{' '}
          <Link href="/login" className="text-brand-blue font-medium hover:underline">
            Log in here
          </Link>
        </p>
        <p className="text-xs text-[var(--muted)] max-w-xs mx-auto">
          By creating account you agree to our{' '}
          <a href="#" className="underline hover:text-[var(--foreground)]">
            Terms &amp; Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-[var(--foreground)]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
