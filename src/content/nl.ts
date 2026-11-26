export const locale = 'nl';

export const navigation = [
  ['/', 'Home'], ['/retscan/', 'RetScan'], ['/ai-technologie/', 'AI & technologie'],
  ['/onderzoek-validatie/', 'Onderzoek & validatie'], ['/samenwerkingen/', 'Samenwerkingen'],
  ['/nieuws-inzichten/', 'Nieuws & inzichten'], ['/over-donned/', 'Over DonNed'], ['/contact/', 'Contact'],
] as const;

export const ui = {
  skip: 'Naar inhoud', menu: 'Menu', mainNav: 'Hoofdnavigatie', footerNav: 'Footernavigatie',
  meet: 'Plan een kennismaking', discover: 'Ontdek RetScan', research: 'Bekijk ons onderzoek',
  technology: 'Ontdek onze technologie', publications: 'Bekijk onze publicaties',
  collaborate: 'Samenwerken met DonNed', contact: 'Neem contact op', more: 'Lees meer',
  all: 'Alles', filter: 'Filter op categorie', send: 'Versturen',
  required: 'Vul dit veld in.', emailError: 'Vul een geldig e-mailadres in.',
  demo: 'Dit is een voorbeeldformulier. Er is geen bericht verzonden.',
  fields: ['Naam', 'Organisatie', 'Zakelijk e-mailadres', 'Telefoonnummer (optioneel)', 'Onderwerp', 'Bericht'],
  subjects: ['Wetenschappelijke samenwerking', 'Klinisch onderzoek', 'AI-technologie', 'RetScan-integratie', 'Commerciële mogelijkheden', 'Algemene vraag'],
};

export const sections = {
  partners: 'Academische en klinische samenwerkingen',
  challenge: 'Maatschappelijke zorguitdaging',
  science: 'Onderzoek & klinische validatie',
  ai: 'AI-technologie en modelontwikkeling',
  practice: 'Van onderzoek naar klinische praktijk',
  projects: 'Lopende onderzoeksprojecten',
  news: 'Nieuws & inzichten',
};

export const audiences = ['Huisartsen en zorggroepen', 'Diagnostische centra', 'Oogzorginstellingen', 'Onderzoeks- en innovatiepartners'];
export const partnerGroups = [
  ['Wetenschappelijke samenwerkingen', ['Academische onderzoekspartners', 'Universitair medische centra', 'Klinische onderzoekspartners']],
  ['Implementatie en integratie', ['Zorgorganisaties', 'Technologiepartners', 'Implementatie- en integratiepartners']],
] as const;
export const metrics = ['Sensitiviteit', 'Specificiteit', 'Klinische prestatiemaat', 'Modelprestatie'];
export const placeholders = (label: string) => `[${label}]`;

export const pages = {
  'retscan': { title: 'RetScan', intro: 'Beschrijving RetScan', visual: 'Afbeelding netvliesanalyse',
    modules: ['Onderliggende AI-modellen', 'Technologische mogelijkheden', 'Klinische workflow', 'Productvoordelen', 'Klinische prestaties', 'Wetenschappelijke validatie', 'Integratiemogelijkheden'] },
  'ai-technologie': { title: 'AI & technologie', intro: 'Beschrijving AI-model', visual: 'Visualisatie modelarchitectuur',
    modules: ['Netvliesbeeldanalyse', 'Modelprestaties', 'Toekomstig onderzoek en ontwikkeling'] },
  'onderzoek-validatie': { title: 'Onderzoek & validatie', intro: 'Beschrijving wetenschappelijk onderzoek', visual: 'Visualisatie klinische validatie',
    modules: ['Klinische validatie', 'Retrospectieve studies', 'Prospectieve studies', 'Onderzoeksmethodologie', 'Academische samenwerkingen'] },
  'samenwerkingen': { title: 'Samenwerkingen', intro: 'Beschrijving wetenschappelijke samenwerking', visual: 'Afbeelding onderzoekssamenwerking', modules: [] },
  'nieuws-inzichten': { title: 'Nieuws & inzichten', intro: 'Introductie nieuws en inzichten', visual: 'Afbeelding uitgelicht artikel', modules: [] },
  'over-donned': { title: 'Over DonNed', intro: 'Beschrijving DonNed', visual: 'Afbeelding DonNed',
    modules: ['Missie', 'Visie', 'Ontstaansgeschiedenis', 'Team', 'Expertise', 'Samenwerkingspartners'] },
  'contact': { title: 'Contact', intro: 'Introductietekst contact', visual: '', modules: [] },
  'privacyverklaring': { title: 'Privacyverklaring', intro: 'Tekst privacyverklaring', visual: '', modules: [] },
  'cookiebeleid': { title: 'Cookiebeleid', intro: 'Tekst cookiebeleid', visual: '', modules: [] },
};

export const newsCategories = ['Onderzoek', 'Technologie', 'Samenwerkingen'];
export const articles = newsCategories.map((category, index) => ({
  slug: `artikel-${index + 1}`, category, title: '[Titel artikel]', date: '[Publicatiedatum]',
  summary: '[Introductie artikel]', body: '[Artikeltekst]', image: '[Afbeelding artikel]',
}));

export const publications = [{
  title: '[Titel wetenschappelijke publicatie]', authors: '[Auteurs]', date: '[Publicatiedatum]',
  journal: '[Tijdschrift]', doi: '[DOI]', sourceLabel: '[Externe publicatielink]',
  downloadLabel: '[Downloadbare publicatie]', sourceUrl: '', downloadUrl: '',
}];

// Set this to '/beelden/fundus.jpg' after adding the photo to public/beelden.
export const homeFundusImage: string = '/beelden/Rechts Centraal.png';

export const homepagePartners = [
  { name: 'LUMC', logo: 'LUMC.webp' },
  { name: 'Alrijne', logo: 'alrijne.png' },
  { name: 'Amsterdam UMC', logo: 'amsterdam umc.png' },
  { name: 'Erasmus MC', logo: 'erasmus mc.png' },
  { name: 'Hogeschool Rotterdam', logo: 'hogeschool rotterdam.png' },
  { name: 'Hogeschool Utrecht', logo: 'hogeschool utrecht.png' },
  { name: 'Het Oogziekenhuis Rotterdam', logo: 'oog ziekenhuis rotterdam.png' },
  { name: 'Star-shl', logo: 'star shl.jpg' },
];

export const pipeline = [
  {
    title: 'Trainingsdatasets',
    description: 'Selecteer netvliesbeelden die passen bij de taak waarvoor het model wordt ontwikkeld.',
  },
  {
    title: 'Data-annotatie',
    description: 'Leg per beeld vast welke kenmerken of bevindingen als voorbeeld dienen voor het model.',
  },
  {
    title: 'Beeldvoorbewerking',
    description: 'Controleer de beeldkwaliteit en bereid de foto’s op een consistente manier voor.',
  },
  {
    title: 'Modeltraining',
    description: 'Laat het model aan de hand van voorbeelden leren welke patronen relevant zijn voor de taak.',
  },
  {
    title: 'Modelevaluatie',
    description: 'Toets het model op beelden die het tijdens de training nog niet heeft gezien.',
  },
  {
    title: 'Modelverbetering',
    description: 'Bekijk waar het model fouten maakt en gebruik die inzichten voor de volgende ontwikkelronde.',
  },
];