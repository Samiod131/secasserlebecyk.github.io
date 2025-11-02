# Se Casser le Bec YK - Blog

Blog personnel généré avec [Eleventy](https://www.11ty.dev/) et hébergé sur GitHub Pages.

## Installation

```bash
npm install
```

## Développement Local

```bash
npm start
```

Le site sera disponible à `http://localhost:8080`

## Build

```bash
npm run build
```

Le site sera généré dans le dossier `_site/`

## Déploiement

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions lors d'un push sur la branche `main`.

## Structure

- `src/` - Code source
  - `blog/` - Articles de blog (Markdown)
  - `css/` - Styles CSS
  - `js/` - JavaScript
  - `images/` - Images et logo
  - `_includes/` - Templates Nunjucks

## Technologies

- **Eleventy** - Générateur de site statique
- **Nunjucks** - Moteur de templates
- **Markdown** - Format d'écriture
- **KaTeX** - Rendu LaTeX
- **GitHub Pages** - Hébergement
