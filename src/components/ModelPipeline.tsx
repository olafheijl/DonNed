import type { CSSProperties } from 'react';
type PipelineStep = string | { title: string; description: string };

interface Props {
  steps: readonly PipelineStep[];
}

export default function ModelPipeline({ steps }: Props) {
  return (
    <ol
      className="pipeline"
      style={{ '--steps': steps.length } as CSSProperties}
    >
      {steps.map((step, index) => {
        const title = typeof step === 'string' ? step : step.title;
        const description = typeof step === 'string' ? undefined : step.description;

        return (
          <li key={title}>
            <span className="step-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
          </li>
        );
      })}
    </ol>
  );
}
