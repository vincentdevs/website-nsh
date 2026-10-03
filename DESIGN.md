# NSH-Genève, design system

Référence des choix visuels du site, pour garder toute future modification
cohérente avec l'existant. Les valeurs listées ici sont celles réellement
implémentées dans le code au moment de la rédaction, pas des cibles à
atteindre.

---

## Polices

- **Titres (serif)** : Cardo, chargée via `next/font/google` dans
  `src/app/layout.tsx`, poids 400 et 700, styles normal et italic. Exposée
  comme variable CSS `--font-cardo`, mappée sur le token Tailwind
  `--font-serif`.
- **Texte courant (sans)** : Commissioner, même mécanisme, variable
  `--font-commissioner`, mappée sur `--font-sans`.
- Tous les `h1, h2, h3, h4` prennent `font-family: var(--font-serif)` et
  `font-weight: 700` par défaut (`src/app/globals.css`). Le corps de texte
  (`body`) utilise `var(--font-sans)`.

## Couleurs

Définies en variables CSS dans `src/app/globals.css`, puis exposées comme
tokens Tailwind (`bg-paper`, `text-ink`, etc.) via `@theme inline`.

| Token Tailwind | Variable CSS | Valeur | Usage |
|---|---|---|---|
| `paper` | `--color-paper` | `#ffffff` | Fond clair par défaut |
| `paper-raised` | `--color-paper-raised` | `#d7cdcc` | Fond des sections alternées (Dust Grey) |
| `ink` | `--color-ink` | `#0d0d0c` | Texte principal sur fond clair |
| `ink-soft` | `--color-ink-soft` | `#59656f` | Texte secondaire sur fond clair |
| `line` | `--color-line` | `#c7bab8` | Bordures des cartes et des champs de formulaire |
| `hairline` | `--color-hairline` | Encre à 20 % | Lignes de séparation (voir « Lignes de séparation ») |
| `red` | `--color-red` | `#782228` | Burgundy, couleur de marque, CTA et accents forts |
| `red-ink` | `--color-red-ink` | `#5a1a1f` | Variante foncée du rouge (hover, texte sur rouge) |
| `accent` | `--color-accent` | `#59656f` | Blue Slate, deuxième accent de marque |
| `accent-ink` | `--color-accent-ink` | `#434c53` | Variante foncée de l'accent |
| `mist` | `--color-mist` | `#d7cdcc` | Alias de paper-raised |
| `deep` | `--color-deep` | `#000100` | Evergreen quasi noir, fond des sections sombres et du footer |
| `deep-text` | `--color-deep-text` | `#ffffff` | Texte sur fond `deep` |
| `deep-soft` | `--color-deep-soft` | `#a8a8a6` | Texte secondaire sur fond `deep` |

Palette de marque d'origine : Burgundy `#782228`, Dust Grey `#d7cdcc`, Blue
Slate `#59656f`, White `#ffffff`, Evergreen `#000100`.

## Grille et largeurs

- **Conteneur de page** : `mx-auto max-w-[1240px]`, utilisé sur toutes les
  sections (18 occurrences dans le code).
- **Gouttières** : `px-6` en mobile, `md:px-10` à partir du breakpoint `md`.
- **Grilles de contenu** : `grid-cols-1` en mobile, basculent en
  `md:grid-cols-12` (colonnes de type 7/5 ou 8/4) ou en `sm:grid-cols-2
  lg:grid-cols-3` pour les grilles de cartes (comité, retransmissions).

## Titres (tailles fluides)

Toutes les tailles de titre utilisent `clamp()` pour une échelle fluide
plutôt que des breakpoints fixes.

| Rôle | Classe |
|---|---|
| H1 du hero de la home | `text-[clamp(2.6rem,4.68vw+1.04rem,4.94rem)]`, `leading-[1.05]`, `tracking-[-0.01em]` |
| H1 des bandeaux de page (`PageBanner`) | `text-[clamp(1.6rem,2.4vw+0.7rem,2.6rem)]`, `leading-[1.05]`, `tracking-[-0.01em]` |
| H2 de section (niveau principal) | `text-[clamp(1.75rem,2vw+1rem,2.25rem)]`, `leading-[1.2]` |
| H2 de sous-section (ex. La NSH) | `text-[clamp(1.5rem,1.6vw+1rem,1.875rem)]`, `leading-[1.2]` |

Le H1 du hero de la home est volontairement plus grand que celui des
`PageBanner` des autres pages : la home porte l'identité du site, les
bandeaux de contenu doivent rester compacts pour laisser voir le contenu
de la page dès l'arrivée.

## Bandeau de page (`PageBanner`)

Composant partagé (`src/components/PageBanner.tsx`) utilisé sur La NSH,
Événements, Retransmissions, Adhérer, Soutenir et Contact. Pas utilisé sur
la home, qui a son propre hero plein écran.

- Hauteur : `h-[176px]` mobile, `md:h-[205px]` desktop.
- Photo en fond, `object-cover`, `opacity-80`, overlay
  `bg-gradient-to-t from-deep via-deep/55 to-deep/10`.
- Contenu ancré en bas (`flex-col justify-end`), padding bas `pb-6`
  mobile, `md:pb-8` desktop.
- Description sous le titre : `mt-2`, `text-sm`, `leading-[1.5]`,
  `text-deep-text/85`, largeur max `max-w-[60ch]`, hauteur réservée
  `md:min-h-[2.7rem]` pour que le H1 reste à la même hauteur d'une page à
  l'autre quelle que soit la longueur du texte.

## Boutons et liens

| Style | Classe |
|---|---|
| CTA plein (clair sur sombre) | `bg-paper px-6 py-3 text-[0.9375rem] text-ink hover:bg-red hover:text-paper` |
| CTA plein (sombre) | `bg-deep px-6 py-3 text-[0.9375rem] text-deep-text hover:opacity-90` |
| CTA contour (sur fond sombre) | `border border-paper px-6 py-3 text-[0.9375rem] text-paper hover:border-deep-soft` |
| CTA contour (sur fond clair) | `border border-ink px-6 py-3 text-[0.9375rem] text-ink hover:border-accent hover:text-accent` |
| CTA petit contour | `border border-paper px-5 py-2.5 text-sm text-paper` |
| Lien texte souligné | `text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-red` |

Aucun `border-radius` sur les boutons, coins toujours droits. Les seuls
éléments arrondis du site sont les photos de personnes (`rounded-full`,
comité) et les vignettes de flyer d'événement (rectangulaires, pas
d'arrondi).

## Espacements de section

- Section pleine largeur (fond alterné `paper` / `paper-raised` / `deep`) :
  `py-16 md:py-20` pour une section standard, `py-14 md:py-16` pour une
  section resserrée (bandeau comité, footer).
- Blocs internes à une page (ex. La NSH) : séparés par l'espace seul,
  `mt-16`, sans ligne.
- Deux sections pleine largeur de fonds différents ne sont jamais séparées
  par une ligne, le changement de fond suffit.
- Cartes bordées (ex. carte "Prochain événement", encadré "En bref") :
  `border border-line` (ou `border-paper/25` sur fond sombre), padding
  `p-6 md:p-8`.

## Lignes de séparation

Reprises des sites du Cercle Rousseau et de Tribea, définies dans
`src/app/globals.css`. Il n'y a qu'une épaisseur, un filet de 1px en
`hairline` (l'encre à 20 %), et les lignes restent rares.

- `rules-between` : à poser sur le parent d'une liste. Il trace un filet
  entre deux éléments, jamais au-dessus du premier ni sous le dernier.
  Utilisé pour les cotisations sur Adhérer.
- Quand la liste est entrecoupée d'intertitres, comme les événements groupés
  par mois, l'élément porte lui-même `border-t border-hairline`, sauf quand
  il suit directement un intertitre.
- Les sections et les blocs d'une page ne sont jamais séparés par une ligne,
  seulement par l'espace et par le changement de fond.

## Formulaires

Identiques au site du Cercle Rousseau (classe `field` dans `globals.css`,
composant `MailtoForm`). Chaque champ n'a qu'une ligne en dessous, en encre,
sans cadre, et elle ne change jamais d'aspect. Le focus se lit sur le
libellé, qui passe du gris à l'encre et prend un petit carré de 6px. Le
formulaire est utilisé sur Contact, sur Adhérer et en bas de l'accueil
(`#nous-ecrire`).

## Photos

- Ratio standard pour une vignette d'événement ou de vidéo : `aspect-video`
  (16/9), `object-cover`.
- Portraits (comité) : cercle (`rounded-full`), tailles responsives
  `h-44 w-44` mobile → `lg:h-28 lg:w-28` desktop, `object-cover`, jamais de
  recadrage supplémentaire ni d'anneau de couleur autour.
- Photo de fond du footer : `fill` + `object-cover`, remplit tout le cadre
  du footer sans bande vide, recouverte d'un calque `bg-[#000100]/60`.

## Iconographie et logo

- Logo principal : `public/brand/logo-horizontal.png`, rendu à
  `h-11 w-auto` dans le footer, `h-9` dans la nav (icône + texte).
- Favicon et badge d'icône : monogramme CR extrait du logo de marque,
  `public/brand/icon-badge.png` (clair) et `icon-badge-black.png` (sombre).

---

Ce fichier documente l'état construit du site, pas une intention. Après
tout changement visible de police, couleur, bandeau ou grille, mettre ce
fichier à jour dans le même commit.
