# ap-detectives.com

Site vitrine d'AP Détectives & Consulting. Astro (sortie 100 % statique) + Tailwind CSS 4, hébergé sur Netlify.

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

## Où modifier quoi

- Coordonnées, agréments, navigation : `src/data/site.ts` (source unique, reprise dans le pied de page, les mentions légales et le JSON-LD).
- Questions/réponses : `src/data/faq.json`.
- Couleurs et polices : `src/styles/global.css` (bloc `@theme`).
- Redirections et en-têtes HTTP : `netlify.toml`.

## Mise en ligne (Netlify)

1. Créer le site Netlify à partir du dépôt Git ; la configuration de build est lue dans `netlify.toml`.
2. Forms → activer la détection, puis Form notifications → Email notification vers `contact@ap-detectives.com` pour le formulaire `contact`.
3. Tester un envoi depuis l'URL de prévisualisation Netlify (le formulaire ne fonctionne pas en local).
4. DNS chez Namecheap : ne modifier que les enregistrements A / CNAME du site. Les enregistrements MX, SPF et DKIM de Private Email doivent rester en place.

## Images provisoires

Seule `hero-bureau.jpg` vient du site d'origine. Les autres photos et `logo.png` sont recadrés depuis des captures d'écran, en basse définition : à remplacer par les fichiers d'origine dans `src/assets/images/` en gardant les mêmes noms.
