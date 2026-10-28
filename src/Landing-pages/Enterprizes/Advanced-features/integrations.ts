import { Bell, MessageSquare, Webhook, Zap, type LucideIcon } from 'lucide-react';

export type Integration = {
  name: string;
  icon?: LucideIcon; // generic icon, used when there is no `src`
  src?: string; // path inside /public, e.g. '/integrations/slack.svg'
};

// To show real brand logos (Slack, Telegram, Zapier...), download each logo from
// the brand's own press / brand-assets page, put the SVG in /public/integrations/
// and set `src` here. Follow each brand's usage guidelines.
export const integrations: Integration[] = [
  { name: 'Chat alerts', icon: MessageSquare },
  { name: 'Notifications', icon: Bell },
  { name: 'Webhooks', icon: Webhook },
  { name: 'Automation', icon: Zap },
];
