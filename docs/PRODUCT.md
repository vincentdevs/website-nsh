# NSH Genève — refonte de design

## Objectif

Montrer à la NSH-Genève à quoi ressemblerait son site s'il reprenait la
structure et le design du site du Cercle Rousseau (association vaudoise
similaire), avec sa propre palette de couleurs et son propre contenu.

## Périmètre

- Sept pages : Accueil, La NSH, Événements, Retransmissions, Adhérer,
  Soutenir, Contact.
- Contenu statique, repris de nsh-ge.ch (voir `src/lib/data.ts` pour la
  source unique de tous les textes et données réutilisés).
- Pas de CMS ni de backend d'envoi d'email : les formulaires ouvrent le
  client mail du visiteur.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Polices Cardo
(titres) et Commissioner (texte courant), chargées via `next/font/google`,
identiques à celles du Cercle Rousseau.

## Palette

| Rôle | Couleur | Hex |
| --- | --- | --- |
| Accent principal / CTA | Bourgogne | `#782228` |
| Fond clair alterné | Gris poussière | `#d7cdcc` |
| Texte secondaire / accent | Bleu ardoise | `#59656f` |
| Fond principal | Blanc | `#ffffff` |
| En-tête, pied de page, bandeaux sombres | Vert sapin | `#091e05` |

Définie dans `src/app/globals.css`.
