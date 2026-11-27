import PageSection from './PageSection';
import VisualPlaceholder from './VisualPlaceholder';
import { placeholders } from '../content';

export default function PageTopics({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <PageSection title={title}>
      <div className="editorial-grid modules">
        {items.map((name) => (
          <article key={name}>
            <h3>{name}</h3>
            <p>
              {placeholders(`Beschrijving ${name.toLocaleLowerCase('nl')}`)}
            </p>
            {name === 'Team' && (
              <VisualPlaceholder label="[Afbeelding teamlid]" />
            )}
            {name === 'Productvoordelen' && (
              <ul className="benefits">
                {Array.from({ length: 6 }, (_, index) => (
                  <li key={index}>[Beschrijving productvoordeel]</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </PageSection>
  );
}
