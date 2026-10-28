import type { SpotlightVisual } from '@/types/landing';
import type { ComponentType } from 'react';
import AlertingStackMock from './AlertingStackMock';
import StatusPageMock from './StatusPageMock';
import TeamInviteMock from './TeamInviteMock';

const ROW_VISUALS = {
  statusPage: StatusPageMock,
  teamInvite: TeamInviteMock,
  alertingStack: AlertingStackMock,
} satisfies Record<SpotlightVisual, ComponentType>;

export default function SpotlightRowVisual({ visual }: { visual: SpotlightVisual }) {
  const Visual = ROW_VISUALS[visual];
  return <Visual />;
}
