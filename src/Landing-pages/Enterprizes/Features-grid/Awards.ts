export type Award = {
  name: string;
  src: string; // path inside /public, e.g. '/awards/leader-2026.svg'
};

// Only add badges your product has actually earned, with the issuer's permission.
// Leave the array empty and the awards row hides itself.
export const awards: Award[] = [
  // { name: 'Award name', src: '/awards/award.svg' },
];
