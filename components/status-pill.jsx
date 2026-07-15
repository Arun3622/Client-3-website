import { Icon } from "@/components/icon";

const statusMeta = {
  OK: { icon: "check", tone: "ok" },
  Good: { icon: "check", tone: "ok" },
  Excellent: { icon: "check", tone: "ok" },
  "Minor Issue": { icon: "alert", tone: "minor" },
  "Minor Issues": { icon: "alert", tone: "minor" },
  "Major Issue": { icon: "close", tone: "major" },
  "Major Issues": { icon: "close", tone: "major" }
};

export function StatusPill({ status }) {
  const config = statusMeta[status] ?? statusMeta.OK;

  return (
    <span className={`status-pill status-pill-${config.tone}`}>
      <Icon className="status-pill-icon" name={config.icon} strokeWidth={2} />
      {status}
    </span>
  );
}
