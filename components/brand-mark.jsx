import { Icon } from "@/components/icon";

export function BrandMark() {
  return (
    <a className="brand-mark" href="#top" aria-label="CheckMate PDI Expert home">
      <span className="brand-badge">
        <Icon name="shield" className="brand-badge-icon" />
      </span>
      <span className="brand-copy">
        <strong>CheckMate</strong>
        <span>PDI Expert</span>
      </span>
    </a>
  );
}
