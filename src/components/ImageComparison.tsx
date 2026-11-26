import { useState, type CSSProperties } from 'react';
import VisualPlaceholder from './VisualPlaceholder';

export default function ImageComparison() {
  const [reveal, setReveal] = useState('50');
  return (
    <div
      className="comparison"
      style={{ '--reveal': reveal + '%' } as CSSProperties}
    >
      <div className="comparison-stage">
        <VisualPlaceholder label="[Origineel netvliesbeeld]" kind="retina" />
        <div className="comparison-overlay">
          <VisualPlaceholder
            label="[Visualisatie AI-analyse]"
            kind="architecture"
          />
        </div>
      </div>
      <label>
        Vergelijk origineel en AI-analyse{' '}
        <input
          type="range"
          min="0"
          max="100"
          value={reveal}
          onChange={(event) => setReveal(event.target.value)}
        />
      </label>
      <div className="comparison-legend">
        <span>AI-analyse</span>
        <span>Origineel netvliesbeeld</span>
      </div>
      <p>[Beschrijving heatmap]</p>
    </div>
  );
}
