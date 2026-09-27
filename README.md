# NSH Genève, refonte de design

Concept de refonte du site de la Nouvelle Société Helvétique, section de
Genève (nsh-ge.ch), pour qui c'est fait, et pourquoi il existe.

## Ce que c'est

Une maquette fonctionnelle en Next.js qui reprend la structure, la grille et
le langage visuel du site du Cercle Rousseau (police Cardo/Commissioner,
bandeaux pleine largeur, cartes sobres) et l'applique aux textes, photos et
contenus réels de la NSH-Genève, avec la palette de couleurs propre à la NSH
(Bourgogne, Gris poussière, Bleu ardoise, Blanc, Vert sapin).

Le contenu (présentation, mission, comité, événement à venir, les 17
retransmissions, cotisations, coordonnées bancaires) a été repris directement
de nsh-ge.ch, chaque photo de membre du comité et chaque vidéo YouTube étant
la même que sur le site actuel. Rien n'a été inventé.

## Différence avec le site actuel

Le site actuel de la NSH-Genève tient sur une seule page d'accueil, qui empile tout
le contenu. Cette refonte le répartit sur sept pages, une par thème (Accueil,
La NSH, Événements, Retransmissions, Adhérer, Soutenir, Contact), pour que
chaque page réponde à une seule question du visiteur.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Ce qui manque avant une mise en ligne réelle

- Les formulaires (Adhésion, Contact) ouvrent le client mail du visiteur avec
  le message pré-rempli plutôt que d'envoyer directement un email : il n'y a
  pas d'infrastructure d'envoi (Resend ou équivalent) branchée sur ce concept.
- Les liens vers les bulletins de versement QR (cotisation, don) pointent
  encore vers les fichiers PDF hébergés sur nsh-ge.ch.
- Aucun nom de domaine ni hébergement n'est configuré, ce projet tourne en
  local pour l'instant.
