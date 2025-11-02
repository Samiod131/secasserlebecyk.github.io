# 📘 Guide Utilisateur - Se Casser le Bec YK

## 🚀 Démarrage Rapide

### Installation Initiale

1. **Cloner le repo et installer les dépendances** :
```bash
cd secasserlebecyk.github.io
npm install
```

2. **Lancer le site localement** :
```bash
npm start
```
Ouvrir `http://localhost:8080` dans votre navigateur.

3. **Tester le build** :
```bash
npm run build
```

---

## ✍️ Ajouter un Nouvel Article

### Méthode Simple

1. Créer un nouveau fichier dans `src/blog/` avec un nom comme `mon-article.md`

2. Ajouter le **frontmatter** (en-tête) au début du fichier :

```markdown
---
title: "Titre de Mon Article"
date: 2024-01-25
tags: 
  - mathématiques
  - science
section: tutoriels
description: "Une courte description de l'article"
thumbnail: /images/mon-image.jpg
---

## Mon Contenu

Écrire votre article ici en Markdown...
```

3. **Sauvegarder** - C'est tout ! L'article apparaîtra automatiquement.

### Champs du Frontmatter

| Champ | Requis | Description | Exemple |
|-------|--------|-------------|---------|
| `thumbnail` | ❌ Non | Image d'aperçu de l'article | `/images/article-image.jpg` |
| `title` | ✅ Oui | Titre de l'article | `"Introduction au Calcul"` |
| `date` | ✅ Oui | Date de publication | `2024-01-25` |
| `tags` | ❌ Non | Liste de tags | `[mathématiques, tutoriel]` |
| `section` | ❌ Non | Section/catégorie | `science` |
| `description` | ❌ Non | Description courte | `"Un guide pour débuter"` |

---

## 📝 Écrire en Markdown

### Formatage de Base

```markdown
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3

**Gras** et *italique*

- Liste
- À puces

1. Liste
2. Numérotée

[Lien](https://example.com)

![Image](/images/mon-image.jpg)
```

### Code

````markdown
```python
def hello():
    print("Bonjour!")
```
````

---

## 🔢 Ajouter des Formules LaTeX

### Formule Inline (dans le texte)

```markdown
La formule $E = mc^2$ est célèbre.
```

### Formule en Bloc (centrée)

```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### Équations Multiples

```markdown
$$
\begin{aligned}
a^2 + b^2 &= c^2 \\
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\end{aligned}
$$
```

### Exemples de Symboles LaTeX

- Fractions : `\frac{a}{b}`
- Racine : `\sqrt{x}`
- Intégrale : `\int_a^b`
- Somme : `\sum_{i=1}^n`
- Limite : `\lim_{x \to \infty}`
- Indices : `x_i`, exposants : `x^2`
- Grec : `\alpha, \beta, \gamma, \pi`

---

## 🖼️ Ajouter des Images

1. **Placer l'image** dans `src/images/`

2. **Référencer dans l'article** :
```markdown
![Description de l'image](/images/mon-image.jpg)
```

---

## 🏷️ Organiser avec Tags et Sections

### Tags
Les tags sont comme des mots-clés. Un article peut avoir plusieurs tags :

```markdown
tags: 
  - mathématiques
  - algèbre
  - tutoriel
```

Les visiteurs peuvent voir tous les articles avec un tag sur `/tags/mathématiques/`

### Sections
Une section est comme une catégorie principale. Un article a **une seule** section :

```markdown
section: science
```

Les sections disponibles se trouvent sur `/sections/`

---

## 🎨 Personnalisation

### Modifier le Logo

Remplacer `src/images/logo.svg` par votre propre logo (SVG, PNG, ou JPG).

Pour changer la taille, éditer dans `src/css/style.css` :
```css
.logo-image {
    width: 50px;  /* Changer cette valeur */
    height: 50px;
}
```

### Modifier les Couleurs

Dans `src/css/style.css`, modifier les variables CSS au début :

```css
:root {
    --primary-color: #2c3e50;      /* Couleur principale (header, titres) */
    --secondary-color: #3498db;    /* Couleur secondaire (liens, tags) */
    --accent-color: #e74c3c;       /* Couleur accent */
    --text-color: #333;            /* Couleur du texte */
}
```

### Modifier le Nom du Site

Dans `src/_includes/components/header.njk`, changer :
```html
<span class="logo-text">Se Casser le Bec YK</span>
```

Et dans `src/_includes/layouts/base.njk` :
```html
<title>{% if title %}{{ title }} | {% endif %}Se Casser le Bec YK</title>
```

### Modifier le Menu de Navigation

Dans `src/_includes/components/header.njk` :
```html
<nav class="main-nav">
    <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/sections/">Sections</a></li>
        <li><a href="/tags/">Tags</a></li>
        <!-- Ajouter vos liens ici -->
    </ul>
</nav>
```

---

## 🌐 Déploiement sur GitHub Pages

### Configuration Initiale (une seule fois)

1. **Créer un repo GitHub** nommé `secasserlebecyk.github.io`

2. **Activer GitHub Pages** :
   - Aller dans Settings → Pages
   - Source : **GitHub Actions**

3. **Pousser votre code** :
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Déploiement Automatique

Chaque fois que vous faites un `git push`, le site se déploie automatiquement via GitHub Actions.

Le site sera disponible à : `https://secasserlebecyk.github.io`

### Workflow de Travail

1. **Écrire localement** :
```bash
npm start
# Tester sur http://localhost:8080
```

2. **Ajouter/modifier des articles** dans `src/blog/`

3. **Commiter et pousser** :
```bash
git add .
git commit -m "Nouvel article: [titre]"
git push
```

4. **Attendre 1-2 minutes** - Le site est mis à jour automatiquement !

---

## 📂 Structure des Fichiers

```
secasserlebecyk.github.io/
├── src/                          # 👈 Vous travaillez ici
│   ├── blog/                     # 📝 Vos articles (Markdown)
│   │   ├── article-1.md
│   │   └── article-2.md
│   ├── images/                   # 🖼️ Vos images
│   │   └── logo.svg
│   ├── css/                      # 🎨 Styles (optionnel)
│   │   └── style.css
│   └── _includes/                # 🏗️ Templates (avancé)
│
├── _site/                        # ⚙️ Généré automatiquement (ne pas modifier)
├── package.json                  # 📦 Configuration npm
├── .eleventy.js                  # ⚙️ Configuration Eleventy
└── .github/workflows/deploy.yml # 🚀 Déploiement auto
```

**Règle d'or** : Ne modifier que les fichiers dans `src/` !

---

## ❓ FAQ & Dépannage

### Le site ne s'affiche pas sur GitHub Pages

1. Vérifier que GitHub Actions est activé (Settings → Pages → Source: GitHub Actions)
2. Vérifier le statut du workflow dans l'onglet "Actions"
3. Attendre quelques minutes après le push

### Les formules LaTeX ne s'affichent pas

- Vérifier que vous utilisez `$...$` pour inline et `$$...$$` pour bloc
- Les doubles backslash peuvent causer des problèmes : utiliser `\\` si nécessaire

### Erreur lors du build

```bash
npm run build
```
Lire l'erreur - souvent c'est une erreur de syntaxe dans le frontmatter YAML.

### Changer la langue du site

Dans `src/_includes/layouts/base.njk`, changer :
```html
<html lang="fr">  <!-- fr pour français, en pour anglais -->
```

---

## 🎯 Workflow Typique

### Écrire un Nouvel Article

1. `npm start` - Démarrer le serveur local
2. Créer `src/blog/mon-nouvel-article.md`
3. Écrire l'article avec frontmatter
4. Sauvegarder - voir les changements en direct sur `localhost:8080`
5. `git add . && git commit -m "Nouvel article" && git push`
6. C'est en ligne en 2 minutes ! ✨

### Modifier le Style

1. Ouvrir `src/css/style.css`
2. Modifier les valeurs CSS
3. Sauvegarder - voir les changements instantanément
4. Push quand satisfait

---

## 📚 Ressources

- **Markdown** : https://www.markdownguide.org/
- **LaTeX Math** : https://katex.org/docs/supported.html
- **Eleventy** : https://www.11ty.dev/docs/
- **GitHub Pages** : https://docs.github.com/en/pages

---

## 💡 Conseils

- ✅ **Commiter souvent** - Petits commits fréquents
- ✅ **Tester localement** - Toujours vérifier avec `npm start`
- ✅ **Nommer clairement** - Utilisez des noms de fichiers descriptifs
- ✅ **Organiser** - Utilisez tags et sections de façon cohérente
- ✅ **Images optimisées** - Compresser les images avant de les ajouter

---

## 🆘 Besoin d'Aide ?

Si vous rencontrez un problème :
1. Lire les messages d'erreur
2. Vérifier la syntaxe Markdown/YAML
3. Tester avec `npm run build`
4. Consulter la documentation Eleventy

---

**Bon blogging ! 🚀**
