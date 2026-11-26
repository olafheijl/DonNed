import type { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  title: string;
  intro?: string;
  id?: string;
  tone?: 'white' | 'mist' | 'dark';
}

export default function PageSection({
  children,
  title,
  intro,
  id,
  tone = 'white',
}: Props) {
  return (
    <section id={id} className={`section ${tone}`}>
      <div className="shell">
        <header className="section-heading">
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
