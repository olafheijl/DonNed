import type { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  title: string;
  intro?: string;
  id?: string;
  tone?: 'white' | 'mist' | 'dark';
  hideTitle?: boolean;
}

export default function PageSection({
  children,
  title,
  intro,
  id,
  tone = 'white',
  hideTitle = false,
}: Props) {
  return (
    <section id={id} className={`section ${tone}`}>
      <div className="shell">
        <header className={!hideTitle || intro ? "section-heading" : undefined}>
          <h2 className={hideTitle ? 'visually-hidden' : undefined}>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
