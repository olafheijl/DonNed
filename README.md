# DonNed

Nederlandstalig, statisch websiteprototype voor Digitaal Oognetwerk Nederland en RetScan.

## Lokaal starten

Gebruik Node.js 24 en npm.

```sh
npm ci
npm run dev
npm run build
```

De productiebuild staat in `dist/`. Gebruik `npm run preview` om die lokaal te bekijken.

## Structuur

- `src/pages/` bevat de homepage, statische routes en artikeldetails.
- `src/components/` bevat herbruikbare onderdelen voor onder meer beeld, onderzoek, modelontwikkeling en contact.
- `src/styles/site.css` bevat het kleurenpalet, de typografie en responsieve stijlen.
- `src/content/nl.ts` bevat de Nederlandse navigatie en centrale voorbeeldcontent. De taalmodule loopt via `src/content/index.ts`. Voeg voor een volgende taal een eigen module en gelokaliseerde routes toe en registreer de taal in `astro.config.mjs`.
- `src/content.config.ts` definieert schema's voor toekomstige Markdown-content in `src/entries/`. De huidige routes renderen uitsluitend voorbeeldvelden. Sluit de collecties bij de eerste redactionele invoer aan op de pagina's.

Plaats de originele bestanden `Logo DONNED@4x-100.webp` en `logo retscan.webp` in `public/merken/` en bouw opnieuw. Tot dan gebruikt de site tekstlabels als plaatsaanduiding. Het contactformulier valideert lokaal en doet geen netwerkverzoek.
