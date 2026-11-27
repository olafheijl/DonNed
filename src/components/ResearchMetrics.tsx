import { metrics } from '../content';

export default function ResearchMetrics() {
  return (
    <dl className="metric-grid">
      {metrics.map((label) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>
            <strong>[Onderzoeksresultaat]</strong>
            <span>[Betrouwbaarheidsinterval]</span>
            <span>[Bronverwijzing]</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
