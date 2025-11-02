# ✅ Checklist Navigation - À Tester

## URLs à Vérifier sur GitHub Pages

Base URL: `https://samiod131.github.io/secasserlebecyk.github.io/`

### Pages Principales
- [ ] `/` - Page d'accueil
- [ ] `/blog/` - Liste des articles
- [ ] `/tags/` - Liste des tags
- [ ] `/sections/` - Liste des sections

### Navigation Header
Depuis n'importe quelle page :
- [ ] Logo → Accueil
- [ ] Menu "Accueil" → `/`
- [ ] Menu "Blog" → `/blog/`
- [ ] Menu "Sections" → `/sections/`
- [ ] Menu "Tags" → `/tags/`

### Page d'Accueil
- [ ] Cliquer sur un article → Article s'ouvre
- [ ] Thumbnail cliquable → Article s'ouvre
- [ ] Bouton "Voir tous les articles" → `/blog/`
- [ ] CSS chargé (styles visibles)
- [ ] Logo visible

### Page Blog
- [ ] Liste d'articles visible
- [ ] Cliquer sur titre article → Article s'ouvre
- [ ] Cliquer sur thumbnail → Article s'ouvre
- [ ] Cliquer sur section → Page section
- [ ] Cliquer sur tag → Page tag

### Article Individuel
- [ ] Contenu affiché correctement
- [ ] Formules LaTeX rendues (si présentes)
- [ ] Cliquer sur section → Page section
- [ ] Cliquer sur tag → Page tag
- [ ] "Retour au blog" → `/blog/`
- [ ] Images dans l'article visibles

### Page Tags
- [ ] Liste de tous les tags
- [ ] Cliquer sur un tag → Articles avec ce tag
- [ ] Depuis page d'un tag : "Tous les tags" → `/tags/`

### Page Sections
- [ ] Liste de toutes les sections
- [ ] Cliquer sur section → Articles de cette section
- [ ] Depuis page section : "Toutes les sections" → `/sections/`

## Éléments Visuels
- [ ] Styles CSS appliqués partout
- [ ] Logo visible dans header
- [ ] Thumbnails visibles sur articles
- [ ] Hover effects fonctionnent
- [ ] Responsive (tester sur mobile)

## Erreurs à NE PAS Voir
- [ ] ❌ Pas de 404
- [ ] ❌ Pas de CSS manquant
- [ ] ❌ Pas d'images cassées
- [ ] ❌ Pas de liens en `/` seul

## Si Problèmes

### CSS ne charge pas
Vérifier dans le HTML source que les liens sont :
```html
<link rel="stylesheet" href="/secasserlebecyk.github.io/css/style.css">
```

### 404 sur articles
Vérifier que les liens d'articles sont :
```html
<a href="/secasserlebecyk.github.io/blog/titre-article/">
```

### Images ne chargent pas
Vérifier que les chemins d'images sont :
```html
<img src="/secasserlebecyk.github.io/images/logo.svg">
```

## Tous les Changements Appliqués

✅ `.eleventy.js` - Ajout `pathPrefix`
✅ `base.njk` - CSS/JS avec filtre `url`
✅ `header.njk` - Tous les liens avec filtre `url`
✅ `index.njk` - URLs posts et thumbnails
✅ `blog/index.njk` - URLs posts et thumbnails
✅ `tags/*.njk` - Tous les liens
✅ `sections/*.njk` - Tous les liens
✅ `post.njk` - Tous les liens

## Après Vérification

Si tout fonctionne, supprimer ce fichier :
```bash
rm TEST-NAVIGATION.md
```
