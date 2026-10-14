'use client';

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

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login email:', email, 'Remember:', rememberMe);
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
          Welcome back
          <span className="bg-brand-gradient bg-clip-text text-transparent">!</span>
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
              Your e-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E.g. info@example.com"
              required
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>
          <button
            type="submit"
            className="mt-10 inline-flex justify-center items-center rounded-full bg-brand-gradient w-full text-center py-3 px-4  text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Log in with email
          </button>

          <div className="text-left">
            <Link
              href="/forgot-password"
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Forgot your password?
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border)]"></div>
          </div>
          <span className="relative px-3 bg-[var(--surface)] text-xs text-[var(--muted)] uppercase tracking-wider">
            or
          </span>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[var(--background)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-full font-medium text-[var(--foreground)] transition-colors">
            <span className="font-bold text-lg">G</span> Login with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[var(--background)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-full font-medium text-[var(--foreground)] transition-colors">
            <GithubIcon className="w-5 h-5" /> Login with GitHub
          </button>
        </div>

        {/* Remember me toggle */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 bg-[var(--border)] rounded-full transition-colors ${rememberMe ? 'bg-brand-blue' : ''}`}
              ></div>
              <div
                className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${rememberMe ? 'transform translate-x-4' : ''}`}
              ></div>
            </div>
            <span className="text-sm text-[var(--foreground)] font-medium">
              Remember me for 30 days
            </span>
          </label>
        </div>
      </div>

      {/* Bottom Switcher */}
      <div className="mt-8 text-center text-sm text-[var(--muted)]">
        <p>Don&apos;t have an account yet?</p>
        <Link
          href="/register"
          className="text-brand-blue font-medium hover:underline mt-1 inline-block"
        >
          Create your Free account now
        </Link>
      </div>
    </div>
  );
}
