import { Mail, Webhook } from 'lucide-react';

import { PREVIEW_CONTACTS, PREVIEW_REGIONS } from './insightPreview.data';
import { LayeredPreview } from './LayeredPreview';
import { MonitorDashboardMock } from './MonitorDashboardMock';
import { PreviewPanel } from './PreviewPanel';

export function MultiLocationPreview() {
  return (
    <LayeredPreview
      main={<MonitorDashboardMock statusLabel="Up" tone="up" />}
      floating={
        <>
          <PreviewPanel title="Regions">
            <div className="relative mb-3 h-20 rounded-lg bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:10px_10px]">
              {PREVIEW_REGIONS.map((region) => (
                <span key={region.id} className={`absolute flex h-3 w-3 ${region.dotPosition}`}>
                  <span className="absolute inline-flex h-full w-full rounded-full bg-status-up opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-status-up" />
                </span>
              ))}
            </div>
            <ul className="space-y-1.5 text-[10px]">
              {PREVIEW_REGIONS.map((region) => (
                <li key={region.id} className="flex justify-between gap-2">
                  <span>
                    {region.location}, <span className="text-[var(--muted)]">{region.name}</span>
                  </span>
                  <span className="text-status-up">{region.responseTime}</span>
                </li>
              ))}
            </ul>
          </PreviewPanel>

          <PreviewPanel title="To be notified">
            <ul className="space-y-2">
              {PREVIEW_CONTACTS.map((contact) => (
                <li key={contact.id} className="flex items-center justify-between text-[10px]">
                  <span className="font-medium">{contact.name}</span>
                  <span className="flex items-center gap-1 text-[var(--muted)]">
                    {contact.channel === 'Email' ? (
                      <Mail className="h-3 w-3" />
                    ) : (
                      <Webhook className="h-3 w-3" />
                    )}
                    {contact.channel}
                  </span>
                </li>
              ))}
            </ul>
          </PreviewPanel>
        </>
      }
    />
  );
}
