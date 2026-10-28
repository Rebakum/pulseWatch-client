import type { ReactNode } from 'react';

export type Tile = {
  x: number;
  y: number;
  icon: ReactNode;
  active?: boolean;
};
