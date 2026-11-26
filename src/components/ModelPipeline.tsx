import type { CSSProperties } from 'react';
interface Props {
  steps: readonly string[];
}

export default function ModelPipeline({ steps }: Props) {
  return (
    <ol
      className="pipeline"
      style={{ '--steps': steps.length } as CSSProperties}
    >
      {steps.map((step, index) => (
        <li key={step}>
          <span className="step-index">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3>{step}</h3>
          <p>[Beschrijving processtap]</p>
        </li>
      ))}
    </ol>
  );
}
