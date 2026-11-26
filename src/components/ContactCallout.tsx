import { ui } from '../content';

export default function ContactCallout() {
  return (
    <section className="callout">
      <div className="shell callout-inner">
        <div>
          <h2>[Titel contact en samenwerking]</h2>
          <p>[Uitnodiging tot samenwerking]</p>
        </div>
        <a className="button primary" href="/contact/">
          {ui.meet}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
