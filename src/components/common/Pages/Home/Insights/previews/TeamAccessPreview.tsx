import { PREVIEW_MEMBERS } from './insightPreview.data';
import { LayeredPreview } from './LayeredPreview';
import { PreviewPanel } from './PreviewPanel';

export function TeamAccessPreview() {
  return (
    <LayeredPreview
      main={
        <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="text-sm font-bold">Team members</p>

          <ul className="space-y-2">
            {PREVIEW_MEMBERS.map((member) => (
              <li
                key={member.id}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-[9px] font-bold text-white">
                  {member.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10px] font-semibold">{member.name}</span>
                  <span className="block truncate text-[9px] text-[var(--muted)]">
                    {member.email}
                  </span>
                </span>
                <span className="rounded-md bg-brand-blue/10 px-2 py-0.5 text-[9px] font-medium text-brand-blue">
                  {member.role}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-brand-gradient p-4 text-white">
            <p className="text-xs font-semibold">Assign roles to every teammate</p>
            <p className="mt-1 text-[10px] opacity-90">
              Admins manage everything, editors change monitors, viewers only read.
            </p>
          </div>
        </div>
      }
      floating={
        <PreviewPanel title="Invite team member">
          <p className="text-[10px] font-semibold">Email</p>
          <div className="mt-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[10px] text-[var(--muted)]">
            name@company.com
          </div>

          <p className="mt-3 text-[10px] font-semibold">Role</p>
          <div className="mt-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[10px]">
            Viewer
          </div>

          <p className="mt-3 text-[10px] font-semibold">Monitors</p>
          <div className="mt-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[10px]">
            3 selected
          </div>

          <div className="mt-4 rounded-lg bg-brand-gradient py-2 text-center text-[10px] font-semibold text-white">
            Send invite
          </div>
        </PreviewPanel>
      }
    />
  );
}
