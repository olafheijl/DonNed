import Button from '../components/Button';
import { useEffect, useRef } from 'react';
import PartnerCarousel from '../components/PartnerCarousel';
import HomePageHero from '../components/HomePageHero';
import PageSection from '../components/PageSection';
import VisualPlaceholder from '../components/VisualPlaceholder';
import ResearchMetrics from '../components/ResearchMetrics';
import ModelPipeline from '../components/ModelPipeline';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ContactCallout from '../components/ContactCallout';
import BrandLogo from '../components/BrandLogo';
import { ui, sections, pipeline, audiences, homepagePartners } from '../content';

export default function HomePage() {
  const home = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!home.current || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        if (!target.matches(':focus-within')) target.classList.add('section-arrived');
      }
    }, { threshold: 0.08 });

    for (const content of home.current.querySelectorAll(':scope > section:not(.home-hero) > .shell')) {
      if (content.getBoundingClientRect().top >= window.innerHeight) observer.observe(content);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={home}>
      <HomePageHero />
      <section className="partner-strip">
        <div className="shell">
          <header className="strip-heading">
            <h2>{sections.partners}</h2>
            <a className="text-link" href="/samenwerkingen/">
              Bekijk samenwerkingen <span aria-hidden="true">→</span>
            </a>
          </header>
          <PartnerCarousel partners={homepagePartners} />
        </div>
      </section>
      <PageSection title={sections.challenge} tone="mist">
        <div className="split">
          <div>
            <p className="lead">
              Goed kunnen zien maakt verschil bij lezen, werken en zelfstandig reizen. Tegelijk kunnen sommige oogafwijkingen zich ontwikkelen voordat iemand merkt dat het zicht achteruitgaat. De maatschappelijke uitdaging is om oogzorg op tijd beschikbaar te maken voor mensen die haar nodig hebben, van screening tot een eerste afspraak en zo nodig verdere behandeling.
            </p>
            <dl className="compact-stats">
              {[
                'Zorgvraag',
                'Toegang tot oogzorg',
                'Maatschappelijke impact',
              ].map((label) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <strong>[Statistiek]</strong>
                    <span>[Wetenschappelijke bron]</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <VisualPlaceholder label="[Afbeelding maatschappelijke zorguitdaging]" />
        </div>
      </PageSection>
      <PageSection
        title={sections.science}
        intro="[Beschrijving klinische validatie]"
        tone="dark"
      >
        <ResearchMetrics />
        <Button variant="secondary" href="/onderzoek-validatie/">
          {ui.research}
        </Button>
      </PageSection>
      <PageSection title={sections.ai}>
        <div className="split">
          <VisualPlaceholder
            label="[Visualisatie modelarchitectuur]"
            kind="architecture"
          />
          <div>
            <p className="lead">We ontwikkelen AI-modellen die patronen in netvliesbeelden leren herkennen. Bij de ontwikkeling besteden we aandacht aan de kwaliteit van de beelden, de annotaties waarmee het model leert en de evaluatie op beelden die het tijdens de training nog niet heeft gezien.</p>
            <a className="text-link" href="/ai-technologie/">
              {ui.technology} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ModelPipeline steps={pipeline} />
      </PageSection>
      <PageSection title="RetScan" tone="mist" hideTitle>
        <div className='split'>
          <div className="retscan-intro">
            <BrandLogo product />
            <p className="lead">RetScan is de medische AI-technologie van DonNed voor oogscreening. De technologie analyseert netvliesfoto’s met als doel zorgverleners te ondersteunen bij het herkennen van beelden die verdere beoordeling vragen.</p>
            <Button href="/retscan/">
              {ui.discover}
            </Button>
          </div>
          <img
            className="retscan-figure"
            src="/beelden/Fundus analyse.png"
            alt="Visualisatie van RetScan"
            loading="lazy"
          />
        </div>
      </PageSection>
      <PageSection
        title={sections.practice}
        intro="[Beschrijving klinische implementatie]"
      >
        <div className="editorial-grid">
          {audiences.map((label) => (
            <article key={label}>
              <VisualPlaceholder label="[Afbeelding doelgroep]" />
              <h3>{label}</h3>
              <p>[Beschrijving doelgroep]</p>
              <a className="text-link" href="/samenwerkingen/#implementatie">
                {ui.more} →
              </a>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection
        title={sections.projects}
        intro="[Introductie onderzoeksprojecten]"
        tone="mist"
      >
        <div className="split">
          <VisualPlaceholder
            label="[Visualisatie onderzoeksproject]"
            kind="graph"
          />
          <div>
            <h3>[Titel onderzoeksproject]</h3>
            <p>[Beschrijving onderzoeksproject]</p>
            <a className="text-link" href="/onderzoek-validatie/#projecten">
              {ui.research} →
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection title={sections.news}>
        <ArticlePreviewGrid />
        <div className="actions">
          <a className="text-link" href="/nieuws-inzichten/">
            Bekijk nieuws & inzichten →
          </a>
          <a className="text-link" href="/onderzoek-validatie/#publicaties">
            {ui.publications} →
          </a>
        </div>
      </PageSection>
      <ContactCallout />
    </div>
  );
}
