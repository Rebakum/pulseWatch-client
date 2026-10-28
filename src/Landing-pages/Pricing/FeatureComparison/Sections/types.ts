export type Cell = boolean | string | { before: string; link: string; after?: string };

export type Values = [Cell, Cell, Cell, Cell];

export type Row = {
  label: string;
  values: Values;
  info?: boolean;
  highlight?: boolean;
};

export type Section = {
  title: string;
  rows: Row[];
};

export type Plan = {
  name: string;
  price: string;
  prefix?: string;
  cta: string;
  featured?: boolean;
};
