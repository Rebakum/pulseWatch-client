export type MockMonitor = {
  name: string;
  uptime: string;
  downAt: number[]; // indexes of failed checks in the history bar
};

export const content = {
  titleStart: 'Showcase your uptime via customizable ',
  titleHighlight: 'status pages',
  description:
    'Build trust with your customers by sharing real-time updates through status pages with custom design and your own domain. Go further on Team and Scale with white-labeled pages, password protection and subscriber notifications during incidents.',

  // Demo data for the illustration only
  mock: {
    historyLength: 60,
    uploadLabel: 'Upload your logo',
    monitors: [
      { name: 'Website', uptime: '99.54%', downAt: [44] },
      { name: 'Monitoring API', uptime: '100.00%', downAt: [] },
    ] satisfies MockMonitor[],
  },
};
