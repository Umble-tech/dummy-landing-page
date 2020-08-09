# Hvordan bruke en landingsside for å validere produktet ditt – Del 3 (Git-repoet)

## Sette opp domenet

Om du jobber i en større bedrift med et eksisterende brand, må du stille deg spørsmålet om denne siden skal ligge under deres eksisterende brand, eller om det skal opprettes en ny side med eget navn og brand.

Domenet kjøper du hos f.eks. domeneshop, Netlify, GoDaddy, [One.com](http://one.com) osv.

### Github

Velkommen, nå som du er her på Github er det bare å se øverst til høyre, og trykke på **Fork**.
Last den ned ved å skrive dette i terminalen (husk å legg inn ditt brukernavn):

```
git clone https://github.com/BRUKERNANV/dummy-landing-page
```

*Du kan også finne denne linken ved å trykke på **clone**-knappen inne i dummy-landing-page-prosjektet på din bruker.*

### Sanity

Etter du har forket og klonet prosjektet, må du navigere deg inn i mappen med: `cd dummy-landing-page/studio`.

1. Kjør `npm install @sanity/cli -g` (hvis du får permission denied, kan være at du må skrive `sudo` foran).
2. Deretter `sanity install` og `sanity init`. (`sanity install && sanity init` om du er pro).
3. Nå vil du få spørsmålet: "The current folder contains a configured Sanity studio. Would you like to reconfigure it? (Y/n)" Svar ja med `y` eller bare **enter**.
4. Velg "Create new project" med piltastene og **enter**.
5. "Your project name:". Fyll inn.
6. "Use the default dataset configuration? (y/n)" Svar ja 

### Plausible

Opprett en konto [https://plausible.io/](https://plausible.io/)

1. Opprett en ny nettside her.

    [Plausible · Web analytics](https://plausible.io/register)

2. Hopp over script-delen. Den implementeres automatisk i templaten. Trykk **Start collecting data**
3. Data vil komme opp i dette dashbordet, så fort vi har fått siden opp på Netlify.

### Netlify

1. Opprett en ny konto her: [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. Opprett en ny side ved å trykke på: **New site from Git**

    1. Velg **GitHub,** logg inn
    2. Velg repositoriet fra listen.
    3. Under basic build settings. Legg inn:
        - **Build command:** `npm run build`
        - **Publish directory:** `public`

        Trykk S*how advanced* → *New variable:*

        Her legger du inn:

        ```bash
        # Ikke bruk " eller ', bare skriv rett inn
        GATSBY_SITE_TITLE = # Navnet på nettsiden/produktet

        SANITY_PROJECT_ID = # Finner du på Sanity.io
        SANITY_DATASET = production # Om du valgte et annet navn, fyll inn det
        SANITY_TOKEN = # valgfritt

        PLAUSIBLE_SITE = # domenet du la inn hos Plausible
        ```

3. Gå til settings → Build & deploy → Trykk edit settings under Build settings
4. Legg inn `web` i **Base directory** **og trykk ****save**
5. Gå til **Domain management** i sidebaren og trykk **Add custom domain.**
    1. Skriv inn domenet ditt uten www, trykk **verify** og **Yes, add domain.**
    2. Gå inn hos domeneleverandøren din og opprett en ny DNS-peker. Legg inn ANAME eller ALIAS til url-en i Netlify. Du finner den øverst til venstre under **overview-** eller **settings-**taben.
6. Gå til overview igjen. Første build har nå failet. Gå inn på den og trykk retry.

## Neste steg

Analytics vil etter et par ukers tid gi deg svaret på om brukere er interessert i produktet ditt. Store deler av trafikken på siden har meldt seg på nyhetsbrevet eller meldt interesse. Eller så er dette antallet veldig lavt. Denne dataen forteller deg hvor enten at folk er interessert, eller ikke. 
