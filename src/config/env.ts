import { z } from 'zod';

const DEFAULT_API_URL = 'http://localhost:4000';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url('NEXT_PUBLIC_API_URL must be a valid URL'),
});

const rawEnv = {
  // Falls back to the local API so `next build` and first-run dev work without a .env.
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? DEFAULT_API_URL,
};

const parsedEnv = envSchema.safeParse(rawEnv);

if (!parsedEnv.success) {
  const issues = parsedEnv.error.issues
    .map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
    .join('\n');
  throw new Error(`Invalid client environment configuration:\n${issues}`);
}

const stripTrailingSlashes = (value: string): string => value.replace(/\/+$/, '');

export const env = {
  NEXT_PUBLIC_API_URL: stripTrailingSlashes(parsedEnv.data.NEXT_PUBLIC_API_URL),
} as const;

export type ClientEnv = typeof env;
