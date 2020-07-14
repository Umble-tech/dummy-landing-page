Les mer her: [umble.no](https://umble.no)
## 1. Sanity
Etter du har forket og klonet prosjektet, naviger deg inn med: `cd dummy-landing-page/studio`.
1. Kjør `npm install @sanity/cli -g` om du ikke allerede har gjort det.
2. Deretter `sanity install` og `sanity init`. (`sanity install && sanity init` om du er pro).
3. Nå vil du få spørsmålet: "The current folder contains a configured Sanity 
studio. Would you like to reconfigure it? (Y/n)" Svar ja med "y" eller bare enter.
4. Velg "Create new project" med piltastene og enter.
5. "Your project name:". Fyll inn.
6. "Use the default dataset configuration? (Y/n)" Svar ja


## 2. Gatsby
1. `cd ../web`
2. `npm install`
3. `touch .env`
4. Legg inn verdier for disse variablene
```
GATSBY_SITE_TITLE = # Navnet på nettsiden/produktet

SANITY_PROJECT_ID = # Finner du på Sanity.io
SANITY_DATASET = production # Om du valgte et annet navn, fyll inn det
SANITY_TOKEN = # valgfritt
```
6. Legg inn data i Sanity-prosjektet ditt
7. Gå tilbake til `web`-mappen og kjør siden med `npm run dev`
