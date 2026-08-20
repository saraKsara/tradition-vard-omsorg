# Tradition vård & omsorg – export

Detta är en fristående statisk export av den aktuella `tradition-website`-versionen på Vercel.

## Viktigt
Den ursprungliga källkoden till den Nitro/Vinext-baserade deploymenten kunde inte hämtas direkt från Vercel.
Den här exporten återskapar de publika sidorna som vanliga HTML-filer och innehåller en lokal JavaScript-version av behovskalkylatorn.

För att behålla samma visuella uttryck laddar `styles.css` den nuvarande stylesheeten och bildfilerna från:
`https://tradition-website.vercel.app`

Det gör projektet direkt körbart, men nästa steg bör vara att kopiera bilder/font/CSS lokalt när originalkällan återfinns.

## Sidor
- `/`
- `/personlig-hemtjanst/`
- `/ledsagning-och-avlosning/`
- `/privatfinansierad-hemtjanst/`
- `/behovskalkylator/`

## Öppna lokalt i Visual Studio Code

Öppna mappen i VS Code och kör i terminalen:

```bash
python3 -m http.server 8000
```

Öppna sedan:

`http://localhost:8000`

## Pusha till GitHub

I projektmappen:

```bash
git init
git branch -M main
git add .
git commit -m "Import Tradition Vård & Omsorg website"
git remote add origin https://github.com/saraKsara/tradition-vard-omsorg.git
git push -u origin main
```

Om repot redan innehåller en commit, klona repot först och kopiera filerna dit i stället.

## Vercel
Repo:t kan importeras direkt i Vercel som ett statiskt projekt. `vercel.json` är redan inkluderad.
