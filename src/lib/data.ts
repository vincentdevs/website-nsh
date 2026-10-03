import { asset } from "@/lib/asset";

export const ASSOCIATION_NAME = "NSH Genève";
export const ASSOCIATION_FULL_NAME =
  "Nouvelle Société Helvétique, groupe de Genève";

export const CONTACT_EMAIL = "secretariat@nsh-geneve.ch";
export const BUS_ACCESS = "Bus 1/5/8/20 - Arrêt Contamines";
export const CONTACT_ENDPOINT =
  "https://nsh-geneve-contact.querovincent.workers.dev";

export const COMMITTEE = [
  {
    name: "Nicolas Rey",
    role: "Président",
    email: "presidence@nsh-geneve.ch",
    photo: asset("/media/comite/nicolas-rey.png"),
  },
  {
    name: "Alexandre Ben Khalifa",
    role: "Secrétaire",
    email: "secretariat@nsh-geneve.ch",
    photo: asset("/media/comite/alexandre-ben-khalifa.png"),
  },
  {
    name: "Dimitri Chichlo",
    role: "Trésorier",
    email: "tresorerie@nsh-geneve.ch",
    photo: asset("/media/comite/dimitri-chichlo.png"),
  },
  {
    name: "Sebastian Aeschbach",
    role: "Membre du Comité",
    email: undefined,
    photo: asset("/media/comite/sebastian-aeschbach.png"),
  },
  {
    name: "Maurice Stauffacher",
    role: "Membre du Comité",
    email: undefined,
    photo: asset("/media/comite/maurice-stauffacher.png"),
  },
  {
    name: "Philippe Jobin",
    role: "Membre du Comité",
    email: undefined,
    photo: asset("/media/comite/philippe-jobin.png"),
  },
];

// Evenements publies sur nsh-ge.ch. Chaque entree porte startDateTime pour
// permettre le tri chronologique ; ajouter un evenement ici suffit a le
// faire apparaitre sur /evenements, tandis que la home n'affiche que le
// plus proche a venir (choisi dans le navigateur par NextEventBanner).
export const EVENTS = [
  {
    title:
      "La Suisse dans un monde sans boussole: entre Europe fragilisée et Amérique hostile",
    speaker: "Richard Werly",
    date: "8 octobre 2026",
    startDateTime: "2026-10-08T18:30:00+02:00",
    dayNumber: "8",
    monthLabel: "Octobre 2026",
    time: "18h30 - 22h00",
    location: "Maison Dufour",
    address: "Rue de Contamines 9A, 1206 Genève",
    photo: asset("/media/evenements/werly-8-octobre-2026.png"),
    bio: "Journaliste et essayiste, Richard Werly est aujourd'hui le correspondant France/Europe du média Suisse Blick, après une longue carrière au Temps. Il a auparavant travaillé à Bangkok, Tokyo, Bruxelles et Genève. Il est notamment l'auteur de deux ouvrages : Europe : rallumer les étoiles (Nevicata, 2020) et Cette Amérique qui nous déteste (Nevicata, 2025).",
    registrationNote:
      "Entrée libre (mais sur inscription). Veuillez préciser le titre de la conférence dans l'objet du courriel.",
  },
  {
    title: "Qu'est-ce qui fait la Suisse ? Héritage, service, avenir",
    speaker: "Derek Grangier",
    date: "10 décembre 2026",
    startDateTime: "2026-12-10T18:30:00+01:00",
    dayNumber: "10",
    monthLabel: "Décembre 2026",
    time: "18h30",
    location: "Maison Dufour",
    address: "Rue de Contamines 9A, 1206 Genève",
    photo: asset("/media/evenements/grangier-10-decembre-2026.jpg"),
    bio: "À partir d'une réflexion articulée autour du passé, du présent et du futur, Derek Grangier proposera une conférence consacrée à l'origine possible des valeurs qui font la Suisse, à la manière dont elles se vivent aujourd'hui dans le service, ainsi qu'aux défis que leur transmission pose pour notre société.\n\nCuisinier de formation et diplômé de l'Ecole Hôtelière de Genève (EHG), le lieutenant-colonel d'état-major général Derek Grangier exerce des fonctions d'instructeur au sein de l'armée depuis 2013. Officier de carrière depuis 2017, il est actuellement commandant remplaçant de l'école de ravitaillement 45, à Drognens, et commandant du bataillon d'exploration 1 au sein de la brigade mécanisée 1.\n\nLa soirée sera également l'occasion de mettre en lumière son ouvrage Citoyen-soldat : des valeurs et un service militaire (Éditions à la Carte, 2025). Dans cet essai, l'auteur interroge le rôle du soldat et du chef militaire, leurs vertus et la place de l'engagement, du sens du devoir et de la conduite dans un monde en quête de repères.",
    registrationNote:
      "Entrée libre (mais sur inscription). Veuillez préciser le titre de la conférence dans l'objet du courriel.",
  },
];

// Heure du build, figee une fois pour toutes les pages generees.
export const BUILT_AT = Date.now();

export const UPCOMING_EVENTS = [...EVENTS]
  .filter((event) => new Date(event.startDateTime).getTime() >= BUILT_AT)
  .sort(
    (a, b) =>
      new Date(a.startDateTime).getTime() -
      new Date(b.startDateTime).getTime(),
  );

export const REPLAYS = [
  {
    speaker: "Yacine Rezki",
    title:
      "Le fisc a-t-il toujours raison? Des libertés individuelles à la souveraineté populaire",
    date: "18 août 2026",
    youtubeId: "vSDaJ-k5n8A",
  },
  {
    speaker: "Olivier Massin",
    title: "La vie en woke : l'extension du domaine de l'injuste",
    date: "27 mai 2026",
    youtubeId: "1kg6dXwfk4Y",
  },
  {
    speaker: "Marc Chesney",
    title:
      "Les déboires de la finance casino : De la crise de 2007 à la disparition de Crédit Suisse",
    date: "29 avril 2026",
    youtubeId: "guKyrKUYIFU",
  },
  {
    speaker: "Jacques Pitteloud",
    title: "La Suisse face aux bouleversements mondiaux",
    date: "17 mars 2026",
    youtubeId: "UmLMfL_7xjA",
  },
  {
    speaker: "Bruno Giussani",
    title:
      "Moins d'Amérique dans nos vies : la nécessité d'une souveraineté numérique",
    date: "3 mars 2026",
    youtubeId: "dhObki1vsro",
  },
  {
    speaker: "Myret Zaki",
    title:
      "Du secret bancaire à la monnaie liquide : les batailles successives pour la souveraineté suisse",
    date: "17 février 2026",
    youtubeId: "aAgfHxCsFPc",
  },
  {
    speaker: "Micheline Calmy-Rey",
    title: "Neutralité: outil de paix ou perte d'impartialité?",
    date: "28 janvier 2026",
    youtubeId: "vJM3_z6KfKE",
  },
  {
    speaker: "Raphaël Pomey",
    title: "Police-politique-population: parler juste en temps de tempête",
    date: "29 septembre 2025",
    youtubeId: "hRLFuDxn1kE",
  },
  {
    speaker: "Pierre-Yves Maillard",
    title: "Accords bilatéraux: quel avenir pour notre modèle suisse ?",
    date: "20 août 2025",
    youtubeId: "7WlYkU5_H2c",
  },
  {
    speaker: "Pierre-Alain Fridez",
    title: "Pourquoi les chars russes n'envahiront pas la Suisse",
    date: "20 mai 2025",
    youtubeId: "Bewx3A9FXc8",
  },
  {
    speaker: "Alexandre Vautravers",
    title: "Sécurité par la coopération dans le nouveau contexte stratégique",
    date: "16 avril 2025",
    youtubeId: "Qr_NgvMKv68",
  },
  {
    speaker: "Lena Rey",
    title: "Le wokisme: une idéologie qui intoxique",
    date: "26 mars 2025",
    youtubeId: "t50C7_0nGc8",
  },
  {
    speaker: "Jean-Daniel Ruch",
    title: "La neutralité suisse au défi",
    date: "18 février 2025",
    youtubeId: "ZE3YbB3EPf0",
  },
  {
    speaker: "René Schwok",
    title:
      "Relations Suisse-UE: quelques clés pour s'y retrouver dans le dédale",
    date: "30 janvier 2025",
    youtubeId: "mMkeyogrcBY",
  },
  {
    speaker: "François Schaller",
    title:
      "Suisse-UE: mythes et réalité. Ou comment le Brexit a complètement changé les relations entre Berne et Bruxelles",
    date: "28 novembre 2024",
    youtubeId: "5z0TzKKTnVY",
  },
  {
    speaker: "Olivier Delamarche",
    title: "Crise, croissance, résilience: la Suisse dans l'échiquier global",
    date: "31 octobre 2024",
    youtubeId: "kQl-ouV3Q2A",
  },
  {
    speaker: "George Martin",
    title: "La Suisse en pleine crise de nerfs géopolitique",
    date: "10 octobre 2024",
    youtubeId: "NTC8BHR3eCQ",
  },
];

export const COTISATIONS = [
  {
    label: "Cotisation individuelle",
    amount: "CHF 60.00",
    pdfHref: asset("/documents/cotisation-individuelle.pdf"),
  },
  {
    label: "Cotisation couple",
    amount: "CHF 90.00",
    pdfHref: asset("/documents/cotisation-couple.pdf"),
  },
];

export const DON_BANK_DETAILS = {
  institution: "PostFinance",
  iban: "CH91 0900 0000 1200 1049 7",
  account: "12-1049-7",
  beneficiary:
    "NOUVELLE SOCIETE HELVETIQUE GROUPE DE GENEVE / 1206 Genève",
  pdfHref: asset("/documents/facture-don.pdf"),
};

export const STATUTS_PDF_HREF = asset("/documents/statuts-nsh-geneve.pdf");

export const HLS_ARTICLE_HREF =
  "https://hls-dhs-dss.ch/fr/articles/016430/2009-04-30/";

export const NHG_HREF = "https://nhg.ch/";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@CercleRousseau";

export const CERCLE_ROUSSEAU_URL = "https://cerclerousseau.ch";
export const CERCLE_ROUSSEAU_VIDEOS_URL = "https://cerclerousseau.ch/videos";

export const CERCLE_ROUSSEAU_EVENT = {
  title: "De la fourche à la fourchette : les défis de l'agriculture d'aujourd'hui",
  speaker: "Blaise Hofmann",
  date: "23 novembre 2026",
  time: "19h15",
  location: "Librairie Le Valentin",
  summary:
    "Blaise Hofmann interroge les défis de l'agriculture suisse d'aujourd'hui, de la production à l'assiette. Entrée libre, réservation obligatoire par e-mail (places limitées).",
  href: "https://cerclerousseau.ch/evenements/de-la-fourche-a-la-fourchette-les-defis-de-l-agriculture-d-aujourd-hui",
  photo: asset("/media/partenaires/cercle-rousseau-evenement.png"),
};
