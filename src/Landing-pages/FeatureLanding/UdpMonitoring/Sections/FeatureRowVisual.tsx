import { ChannelsVisual, IntervalVisual, MobileVisual } from './FeatureVisuals';

interface FeatureRowVisualProps {
  visual: string;
  index?: number;
}

export default function FeatureRowVisual({ visual, index = 0 }: FeatureRowVisualProps) {
  const key = String(visual ?? '').toLowerCase();

  if (/interval|check|sec|monitor|schedule|uptime/.test(key)) return <IntervalVisual />;
  if (/channel|notif|alert|integration/.test(key)) return <ChannelsVisual />;
  if (/mobile|app|phone|android|ios/.test(key)) return <MobileVisual />;

  // nam na mille row-er kromo onujayi
  const fallback = [IntervalVisual, ChannelsVisual, MobileVisual][index % 3];
  const Fallback = fallback;
  return <Fallback />;
}
