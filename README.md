# DonNed

Nederlandstalig websiteprototype voor Digitaal Oognetwerk Nederland en RetScan, gebouwd met React, TypeScript en Vite.

## Lokaal starten

Gebruik Node.js 24 en npm. Voer vanuit de hoofdmap van het project uit:

```sh
npm ci
npm run dev
```

Met `npm run build` maak je de statische site in `dist/`. Gebruik `npm run preview` om die build lokaal te bekijken. Configureer je hosting om `404.html` te tonen bij een onbekend adres.

## Delen via hetzelfde wifi-netwerk

Start op je eigen computer `npm run dev:lan` en deel het adres onder **Network** dat bij je wifi-interface hoort, inclusief de poort. Laat de server draaien terwijl je collega de site bekijkt. Stop een lopende Vite-server met Ctrl+C in zijn terminal.

## Wat staat waar?

- `src/pages/HomePage.tsx` bevat de homepage. De andere bestanden in `src/pages/` heten naar hun pagina, bijvoorbeeld `RetScanPage.tsx` en `ResearchPage.tsx`.
- `src/components/` bevat gedeelde onderdelen zoals `HeroSection.tsx`, `BrandLogo.tsx`, `SiteHeader.tsx` en `ContactForm.tsx`.
- `src/routes.tsx` koppelt pagina’s aan URL’s.
- `src/content/nl.ts` bevat de Nederlandse navigatie en gedeelde voorbeeldcontent. `src/content/index.ts` kiest de taalmodule. `src/content/entrySchemas.ts` en `src/entries/` bereiden toekomstige redactionele invoer voor.
- `src/styles/base.css` bevat kleuren en typografie, `layout.css` de gedeelde pagina-indeling en `components.css` de stijlen van onderdelen.

## Afbeeldingen vervangen

De logo’s staan in `public/merken/`. De bestandsnamen staan in `src/components/BrandLogo.tsx`. In `src/styles/components.css` pas je de grootte aan bij `.brand-img` en `.brand-img--retscan`.

Plaats de fundusfoto voor de homepage in `public/beelden/`, bijvoorbeeld als `fundus.jpg`. Zet daarna `homeFundusImage` onderaan `src/content/nl.ts` op `'/beelden/fundus.jpg'`. Met een lege waarde toont de hero de bestaande getekende visualisatie. De maat van de foto staat bij `.home-hero-photo` in `src/styles/homepage-hero.css`.

Het contactformulier valideert lokaal en doet geen netwerkverzoek.
