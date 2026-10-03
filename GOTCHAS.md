# NSH-Genève, gotchas et règles apprises

Ce fichier rassemble ce que la refonte a appris entre le 27 et le 28
septembre 2026, en 47 commits. Chaque règle vient d'une erreur réellement
commise ou d'une correction demandée, pas d'une bonne pratique générique.
Il se lit avant de créer une page, un composant ou une section, et
complète `DESIGN.md`, qui donne les valeurs exactes (couleurs, tailles,
espacements) : ce fichier-ci dit ce qu'il ne faut pas refaire et pourquoi.

---

## Section 0 : les règles absolues

Une seule entorse suffit à bloquer une modification.

**0.1 Aucun texte, chiffre ou photo inventé.** Tout le contenu vient de
nsh-ge.ch ou d'un fichier fourni par la NSH, et il est regroupé dans
`src/lib/data.ts`. Quand une donnée manque, on laisse un `[PLACEHOLDER]`
visible plutôt que d'écrire une phrase plausible. Exemple réel : la page
Événements a d'abord montré une photo générique de Genève, remplacée
ensuite par le vrai flyer de la conférence Werly (commit `7aaec69`).

**0.2 Tout chemin local passe par `asset()` ou `next/link`.** Sur GitHub
Pages, le site vit sous `/website-nsh/`. Un `<a href="/retransmissions">`
ou un `src="/media/..."` écrit en dur marche en local et casse en ligne,
parce qu'il perd ce préfixe. C'est ce qui avait cassé le lien vers
Retransmissions depuis Événements (commit `3d222ba`). Pour une image ou
un PDF, `asset("/media/...")`, et pour une page interne, `<Link>`.

**0.3 Une seule épaisseur de ligne, et seulement entre des éléments.** Un
filet de 1px en `border-hairline` (l'encre à 20 %), jamais au-dessus du
premier élément ni sous le dernier. Deux sections de fonds différents ne
sont jamais séparées par une ligne. Les traits bourgogne de 2px et les
lignes au-dessus de chaque bloc ont été essayés puis retirés parce qu'ils
chargeaient la page.

**0.4 Aucun champ de formulaire en boîte.** Chaque champ porte la classe
`field` et n'a qu'une ligne en dessous, comme sur le Cercle Rousseau. Un
nouveau formulaire réutilise `MailtoForm` plutôt que de recréer des
`<input>` stylés à la main.

**0.5 Rien ne part sur `main` sans être vu rendu.** Chaque push sur `main`
déploie le site en ligne (`.github/workflows/deploy-pages.yml`). On
vérifie donc la page dans un navigateur à 1440px et à 390px avant de
pousser, et une branche de revue ne déclenche aucun déploiement.

---

## Mise en page

**Le hero se règle une fois, en le regardant rendu.** Le titre du hero de
l'accueil a bougé six fois en une journée (-12 %, -10 %, -15 %, +10 %,
3 lignes, puis centré verticalement) parce que chaque passe corrigeait un
pourcentage à l'aveugle. Ce qui a tenu : `justify-center` sur le bloc, un
h1 assez étroit pour passer sur 3 lignes et laisser le jet d'eau visible à
droite. Pour un nouveau hero, on fixe la largeur du titre et on centre,
puis on regarde la capture avant de toucher aux marges.

**Le bandeau photo des pages de contenu reste compact.** `PageBanner` est
passé de 360/420px à 176/205px en deux étapes, parce qu'un bandeau haut
repoussait le vrai contenu sous la ligne de flottaison. Une nouvelle page
de contenu utilise `PageBanner` tel quel, sans en créer une variante plus
haute.

**Les h1 doivent tomber à la même hauteur d'une page à l'autre.**
`PageBanner` réserve une hauteur minimale pour le texte d'intro. Une intro
beaucoup plus longue que les autres (c'était le cas de Soutenir) décale le
titre, donc on raccourcit le texte plutôt que d'agrandir le bandeau.

**Une vidéo principale tient dans la première vue.** Sur Retransmissions,
le lecteur, son titre et sa date doivent être visibles sans défiler, ce
qui a demandé un en-tête compact, des marges resserrées et un lecteur
moins large. On vérifie ce point sur un écran de portable à chaque
changement de la page.

**Une grille qui passe en une colonne sur mobile agrandit ses images.**
Les portraits du comité passent de 112px à 176px sur téléphone, parce
qu'une colonne seule laisse de la place qu'un petit portrait gaspille.

**Les cartes du comité restent centrées à toutes les largeurs.** Un
alignement à gauche à partir de `sm` les faisait flotter sur la page La
NSH.

---

## Photos et médias

**On ne détoure pas les portraits.** Retirer le fond blanc du studio a
laissé du crénelage sur les cheveux et les épaules (commit `496a47e`,
annulé par `a2f04a0`). Les portraits restent tels que le site source les
fournit, déjà recadrés en cercle, sur un fond sombre.

**Une photo de fond sous du texte porte un calque sombre.** Le footer
utilise la photo de la rade sous un calque `#000100` à 60 %. Il reste en
`object-cover` : l'essai en `object-contain` a laissé des bandes noires
sur les côtés.

**La photo du footer pèse 4 Mo.** `public/media/footer/geneve-rade-soir.jpg`
se charge sur chaque page. Toute nouvelle photo pleine largeur est
compressée avant d'être ajoutée, et celle-ci doit l'être avant une vraie
mise en ligne.

**Les documents sont rapatriés dans le dépôt.** Les PDF (cotisations, don,
statuts) vivent dans `public/documents` et non plus sur le WordPress de
nsh-ge.ch, pour que le site ne casse pas le jour où l'ancien site ferme.

**Les vidéos se lisent dans la page, les autres renvoient à YouTube.** Sur
l'accueil, cliquer une miniature change la vidéo du lecteur
(`FeaturedReplays`). Dans la grille « Toutes les retransmissions », une
miniature ouvre YouTube dans un nouvel onglet. On garde cette séparation
pour ne pas avoir deux lecteurs qui se disputent la page.

---

## Données et contenu

**Les événements sont une liste triée, pas un objet unique.** `EVENTS`
contient tous les événements avec leur `startDateTime`, et
`UPCOMING_EVENTS` écarte ceux qui sont passés au moment du build puis
les trie. Sur l'accueil, `NextEventBanner` refait ce choix dans le
navigateur du visiteur : le bandeau passe donc à l'événement suivant dès
que l'heure de début du précédent est passée, sans attendre un nouveau
build, et disparaît s'il n'y a plus rien à venir. On n'écrit jamais une
date ou un titre d'événement ailleurs que dans ce tableau.

**Le nom complet s'écrit sans le sigle.** « Nouvelle Société Helvétique »
n'est pas suivi de « (NSH) ». Le sigle seul reste utilisé dans la
navigation et dans « NSH-Genève ».

**L'événement partenaire du Cercle Rousseau est recopié, pas lu en
direct.** `CERCLE_ROUSSEAU_EVENT` est une donnée fixe dans `data.ts`, et
il faut la mettre à jour à la main quand leur prochain événement change.

---

## Formulaires et envoi

**Les formulaires postent vers le Worker, pas vers `mailto:`.** Le Worker
Cloudflare `nsh-geneve-contact` (dossier `worker/`) reçoit le message et
l'envoie via Resend à secretariat@nsh-geneve.ch, et `mailto:` ne sert que
de repli quand l'envoi échoue. Tant que le domaine n'est pas vérifié chez
Resend, le Worker ne peut écrire qu'à l'adresse du compte Resend, donc un
envoi qui échoue en test n'indique pas forcément un bug dans le site.

**Chaque formulaire garde son champ piège.** Le champ caché `company` est
rempli seulement par les robots, et le composant simule alors un succès
sans rien envoyer. Il ne faut ni le supprimer ni le rendre visible.

**Le message de confirmation ne vient pas dans une boîte.** Il s'affiche
sous un filet `border-hairline`, comme le reste du formulaire.

---

## SEO

**Le site reste en `noindex` tant qu'il vit sur l'aperçu GitHub Pages.**
`IS_PREVIEW_HOST` dans `src/lib/seo.ts` pilote `robots.ts`. Il repasse à
`false` le jour où le domaine final est branché, et pas avant, sinon
Google indexe une adresse provisoire.

**Chaque nouvelle page reçoit ses métadonnées et ses données
structurées.** Un titre et une description assez longs pour que Google
les reprenne, une URL canonique, et le bloc Schema.org qui correspond
(`Event` pour un événement, `VideoObject` pour une vidéo). La page est
ajoutée à `sitemap.ts`.

**Les niveaux de titres ne sautent pas.** Retransmissions passait d'un H1
à un H5 sans H2 ni H3. Une page suit l'ordre h1, h2, h3, quelle que soit
la taille visuelle voulue, qui se règle en CSS.

**Ce qu'un site statique ne peut pas faire reste ouvert.** Le choix du
domaine final, les redirections 301 depuis nsh-ge.ch et une page par
conférence sont les actions 1, 2 et 7 de l'audit SEO du 27 septembre
2026, et elles attendent une décision de la NSH.

---

## Méthode de travail

**Un commit par changement visible, avec le pourquoi dans le message.**
L'historique de ce dépôt sert de journal : chaque message dit ce qui a
changé et pour quelle raison, ce qui a permis d'écrire ce fichier. On
garde cette habitude.

**Un essai qui ne marche pas s'annule franchement.** Le détourage des
portraits, l'en-tête bourgogne, le footer en `object-contain` et les
traits bourgogne ont chacun été essayés puis retirés. Ils sont notés ici
pour qu'on ne les retente pas sans une nouvelle raison.

**Le Cercle Rousseau est la référence de structure.** La grille, les
polices, les lignes et les formulaires en viennent. Avant d'inventer un
nouveau motif, on regarde s'il existe déjà sur ce site
(`/Users/vincent/website-cerclerousseau`), et on le reprend avec la
palette de la NSH.
