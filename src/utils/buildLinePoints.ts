export function buildLinePoints(
  values: readonly number[],
  width: number,
  height: number,
  padding = 10,
): string {
  if (values.length < 2) return '';

  const min = Math.min(...values);
  const range = Math.max(...values) - min || 1;
  const drawableHeight = height - padding * 2;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - padding - ((value - min) / range) * drawableHeight;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}
