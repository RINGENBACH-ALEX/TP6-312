- URL site WEB :
- URL Notebook Observable :
- Nom : Ringenbach
- Prénom : Alex
- Nom binome :
- Prénom binome :

# Remarques :

TP6 R3.12 — routes paramétriques (dynamiques) avec Astro, TailwindCSS et Observable Plot. Même direction artistique que le TP3/TP4.

## Pages

- [Accueil](src/pages/index.astro)
- [Toutes les espèces en onglets](src/pages/penguins.astro) : liste des espèces calculée par `[...new Set(penguins.map(...))]`, onglets générés par `map`.
- Rendu dynamique ([index](src/pages/rendu-dynamique/index.astro), [[species]](src/pages/rendu-dynamique/[species].astro)) : `export const prerender = false;`, espèce lue dans `Astro.params`, 404 si l'espèce n'existe pas.
- Rendu statique ([index](src/pages/rendu-statique/index.astro), [[species]](src/pages/rendu-statique/[species].astro)) : pages générées au build par `getStaticPaths()`.
- TD voitures ([index](src/pages/cars/year/index.astro), [[year]](src/pages/cars/year/[year].astro)).
- Bonus, dataset `weather` d'Observable ([onglets](src/pages/meteo/index.astro), [dynamique](src/pages/meteo/rendu-dynamique/[weather].astro), [statique](src/pages/meteo/rendu-statique/[weather].astro)).

## Éléments techniques

- Données et graphiques factorisés dans [src/lib/penguins.ts](src/lib/penguins.ts) et [src/lib/weather.ts](src/lib/weather.ts), cartes de graphique dans [ChartCard](src/components/ChartCard.astro).
- `cars.json` et `weather.json` convertis depuis les CSV du paquet npm `@observablehq/sample-datasets`.
- Accessibilité : lien d'évitement, onglets ARIA navigables au clavier (flèches, Début, Fin), `aria-current` dans les menus, graphiques avec `role="img"` et description.
- Menu à sous-menus en `<details>` (fonctionne sans JS), échelles communes entre les pages pour comparer les graphiques.
