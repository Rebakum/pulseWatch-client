'use client';

import { ThemeProvider as NextThemesProvider } from '@wrksz/themes/next';
import type { ReactNode } from 'react';

type ThemeProviderProps = { children: ReactNode };

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
    {children}
  </NextThemesProvider>
);
