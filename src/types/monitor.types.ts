export type MonitorType = 'HTTP' | 'TCP' | 'PING' | 'KEYWORD';

export type MonitorStatus = 'UP' | 'DOWN' | 'PAUSED' | 'WARNING';

export type IncidentStatus = 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED';

export interface Monitor {
  id: string;
  userId: string;
  name: string;
  type: MonitorType;
  url: string;
  intervalSeconds: number;
  timeoutMs: number;
  expectedStatusCodes: number[];
  status: MonitorStatus;
  isPaused: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CheckResult {
  id: string;
  monitorId: string;
  statusCode: number | null;
  responseTimeMs: number | null;
  error: string | null;
  checkedAt: string;
}

export interface Incident {
  id: string;
  monitorId: string;
  startedAt: string;
  detectedAt: string;
  resolvedAt: string | null;
  reason: string | null;
  status: IncidentStatus;
}
