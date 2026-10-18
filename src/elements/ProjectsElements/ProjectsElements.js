import gestion from "../../assets/Projets/gestion.jpg";
import bee from "../../assets/Projets/bee.jpg";
import check from "../../assets/Projets/vérification.png";
import SmashBurger from "../../assets/Projets/SmashBurger.jpg";
import boutiqueJeux from "../../assets/Projets/boutiqueJeux.jpg";
import geii from "../../assets/Projets/geii.jpg";
import boutique from "../../assets/Projets/boutique.png";
import compression from "../../assets/Projets/compression.jpg";
import annuaire from "../../assets/Projets/annuaire.jpg";
import backlog from "../../assets/Projets/backlog.png";
import vintage from "../../assets/Projets/vintage.jpg";
import fake from "../../assets/Projets/fake.jpg";
import bank from "../../assets/Projets/bank.webp";
import esport from "../../assets/Projets/esport.jpg";
import training from "../../assets/Projets/training.png";
import skaldly from "../../assets/Projets/skaldly.jpg";
import budget from "../../assets/Projets/budget.jpg";
import simulation from "../../assets/Projets/simulation.jpg";
import miniSentry from "../../assets/Projets/miniSentry.jpg";
const ProjectsElements = [
  {
    id: 1,
    title: "Gestion d'équipement d'une salle de classe",
    src: gestion,
    hauteur: "h-60",
    language: "HTML, CSS, PHP, Bootstrap",
    equipe: "1",
    type: "Académique",
    description:
      "Application web permettant de gérer le parc d'équipements informatiques d'une salle de classe. Les utilisateurs peuvent enregistrer, suivre l'état de chaque équipement, signaler des pannes et consulter l'historique des interventions via une interface simple et intuitive.",
    lien: "https://github.com/sid-ahmedmoussi0/Gestion_equipements",
  },
  {
    id: 2,
    title: "Vérification de mots innapropriés dans un article",
    src: check,
    hauteur: "h-60",
    language: "Spring Boot, React JS, Redux, Axios",
    equipe: "1",
    type: "Personnel",
    description:
      "Application fullstack permettant d'analyser automatiquement un texte soumis par l'utilisateur afin de détecter les mots inappropriés. Le backend Spring Boot expose une API REST qui effectue l'analyse, tandis que le frontend React gère la saisie et l'affichage des résultats avec gestion d'état via Redux.",
    lien: "#",
  },
  {
    id: 3,
    title: "Application d'auto-formation Smash Burger",
    src: SmashBurger,
    hauteur: "h-60",
    language: "Dart, Flutter",
    equipe: "3",
    type: "Académique",
    description:
      "Application mobile Flutter développée en équipe pour permettre aux nouveaux employés de la chaîne Smash Burger de se former de manière autonome. Elle propose des fiches recettes interactives, des tutoriels pas-à-pas et des quiz d'évaluation pour valider les connaissances acquises.",
    lien: "https://github.com/Sid-Ahmed7/SmashBurger",
  },
  {
    id: 4,
    title: "Réalisation d'un site pour la filière GEII",
    src: geii,
    hauteur: "h-60",
    language: "HTML, CSS, PHP, JS, Bootstrap",
    equipe: "3",
    type: "Académique",
    description:
      "Site web vitrine réalisé en équipe pour la filière GEII (Génie Électrique et Informatique Industrielle). Il présente les formations proposées, les débouchés professionnels, les projets étudiants ainsi que les informations de contact, avec un espace d'administration pour la mise à jour du contenu.",
    lien: "#",
  },
  {
    id: 5,
    title: "Réservation de Jeux Vidéo",
    src: boutiqueJeux,
    hauteur: "h-60",
    language: "HTML, CSS, PHP, Bootstrap",
    equipe: "1",
    type: "Académique",
    description:
      "Plateforme web de location de jeux vidéo permettant aux utilisateurs de parcourir un catalogue, de vérifier les disponibilités et d'effectuer des réservations en ligne. Le système gère les stocks, les dates de retour et l'historique des locations par compte utilisateur.",
    lien: "https://github.com/sid-ahmedmoussi0/Projet_Moussi",
  },
  {
    id: 6,
    title: "Boutique en ligne",
    src: boutique,
    hauteur: "h-60",
    language: "Spring Boot, React JS, Redux, Axios",
    equipe: "1",
    type: "Personnel",
    description:
      "Application e-commerce fullstack avec gestion complète du catalogue produits, panier d'achat persistant, système d'authentification JWT et intégration d'un flux de paiement. Le backend Spring Boot gère la logique métier et expose une API REST consommée par le frontend React.",
    lien: "https://github.com/Sid-Ahmed7/Application_de_paiement",
  },
  {
    id: 7,
    title: "Compression d'une image",
    src: compression,
    hauteur: "h-60",
    language: "Python",
    equipe: "1",
    type: "Académique",
    description:
      "Implémentation en Python d'un algorithme de compression d'images basé sur la décomposition en valeurs singulières (SVD). Le programme permet de choisir le niveau de compression et affiche une comparaison visuelle entre l'image originale et l'image compressée, en mesurant le taux de réduction obtenu.",
  },
  {
    id: 8,
    title: "Surveillance à distance de ruches",
    src: bee,
    hauteur: "h-60",
    language: "C++",
    equipe: "3",
    type: "Académique",
    description:
      "Système embarqué de monitoring de ruches d'abeilles développé en équipe. Des capteurs (température, humidité, poids) sont reliés à un microcontrôleur programmé en C++ qui collecte les données et les transmet à distance pour permettre à l'apiculteur de surveiller l'état de ses ruches sans déplacement.",
  },
  {
    id: 9,
    title: "Annuaire téléphonique",
    src: annuaire,
    hauteur: "h-50",
    language: "Shell",
    equipe: "1",
    type: "Académique",
    description:
      "Script Shell interactif permettant de gérer un annuaire téléphonique en ligne de commande. Il offre les fonctionnalités CRUD complètes : ajout, recherche par nom ou numéro, modification et suppression de contacts, avec persistance des données dans un fichier texte.",
  },
  {
    id: 10,
    title: "Backlog de jeux vidéo",
    src: backlog,
    hauteur: "h-60",
    language: "Nuxt",
    equipe: "1",
    type: "Personnel",
    description:
      "Application web développée avec Nuxt.js pour gérer sa liste personnelle de jeux vidéo. Chaque jeu peut être classé selon son statut (à jouer, en cours, terminé, abandonné), noté et commenté. L'interface propose des filtres et un tableau de bord pour visualiser sa progression.",
    lien: "https://github.com/Sid-Ahmed7/nuxt-backlog-jeux",
  },
  {
    id: 11,
    title: "API TrainUp",
    src: training,
    hauteur: "h-60",
    language: "Node.js, Express, TypeScript",
    equipe: "3",
    type: "Académique",
    description:
      "API RESTful de suivi sportif développée en équipe avec Node.js, Express et TypeScript. Elle permet de gérer les utilisateurs, les programmes d'entraînement, les exercices et les performances. La documentation Swagger facilite l'intégration et les tests de l'API.",
    lien: "https://github.com/Sid-Ahmed7/TrainUp",
  },
  {
    id: 12,
    title: "Location de voitures vintage",
    src: vintage,
    hauteur: "h-60",
    language: "Symfony",
    equipe: "3",
    type: "Académique",
    description:
      "Plateforme de location de véhicules de collection développée avec le framework PHP Symfony. Elle propose un catalogue de voitures vintage avec photos et fiches techniques, un système de réservation avec gestion des disponibilités et un espace administrateur pour gérer le parc automobile.",
    lien: "https://github.com/Sofianedevv/Retro-car-rent",
  },
  {
    id: 13,
    title: "Simulation de fausses discussions sur les messageries",
    src: fake,
    hauteur: "h-60",
    language: "Symfony, Vue.js",
    equipe: "3",
    type: "Académique",
    description:
      "Application web permettant de créer et de personnaliser des captures d'écran de conversations de messageries instantanées (WhatsApp, iMessage, Messenger). Développée avec Symfony en backend et Vue.js en frontend, elle offre un éditeur en temps réel pour générer des discussions réalistes.",
    lien: "https://github.com/Sofianedevv/TalkLabs",
  },
  {
    id: 14,
    title: "BanqueAvenir",
    src: bank,
    hauteur: "h-60",
    language: "TypeScript, Express, AdonisJS, Nuxt.js, WebSocket",
    equipe: "3",
    type: "Académique",
    description:
      "Application bancaire complète développée en Clean Architecture. Le backend AdonisJS expose une API sécurisée pour les opérations bancaires (virements, historique, gestion de comptes) tandis que le frontend Nuxt.js offre une interface réactive. Les transactions sont propagées en temps réel via WebSocket.",
    lien: "https://github.com/Sid-Ahmed7/Clean-Architecture-Avenir",
  },
  {
    id: 15,
    title: "Esport Tournament API",
    src: esport,
    hauteur: "h-60",
    language: "NestJS",
    equipe: "3",
    type: "Académique",
    description:
      "API REST de gestion de tournois e-sport développée avec NestJS. Elle permet de créer des tournois, d'inscrire des équipes, de générer automatiquement les brackets, d'enregistrer les résultats des matchs et de calculer les classements en temps réel.",
    lien: "https://github.com/Sid-Ahmed7/Projet_nest",
  },
  {
    id: 16,
    title: "Skaldly – Plateforme d'apprentissage des langues assistée par IA",
    src: skaldly,
    hauteur: "h-60",
    language: "Spring Boot, React, TypeScript, PostgreSQL, WebSocket, Docker Swarm",
    equipe: "",
    type: "Académique",
    description:
      "Plateforme SaaS complète d'apprentissage des langues par l'immersion, déployée en production sur skaldly.fr. Elle propose des exercices interactifs adaptés au niveau de l'utilisateur, un suivi détaillé de la progression, et des fonctionnalités collaboratives en temps réel via WebSocket. L'infrastructure est orchestrée avec Docker Swarm pour garantir disponibilité et scalabilité.",
    lien: "https://skaldly.fr",
  },
  {
    id: 17,
    title: "Gestionnaire de dépenses partagées assisté par l'IA",
    src: budget,
    hauteur: "h-60",
    language: "Spring Boot, Spring Security, React, TypeScript, PostgreSQL, Mistral AI",
    equipe: "1",
    type: "Personnel",
    description:
      "Application de gestion des dépenses en groupe (colocation, voyages, sorties) avec authentification sécurisée via Spring Security. L'intégration de Mistral AI permet d'analyser les habitudes de dépenses et de proposer des suggestions automatisées pour rééquilibrer les remboursements entre participants. Un tableau de bord interactif offre une vue claire des soldes.",
    lien: "#",
  },
  {
    id: 18,
    title: "Mini Sentry – Outil de suivi des erreurs",
    src: miniSentry,
    hauteur: "h-60",
    language: "Spring Boot, React, TypeScript, PostgreSQL, RabbitMQ, Docker",
    equipe: "1",
    inProgress: true,
    type: "Personnel",
    description:
      "Outil de monitoring applicatif inspiré de Sentry, actuellement en cours de réalisation. Il collecte les erreurs émises par les applications clientes via un SDK dédié, les achemine à travers une file RabbitMQ pour absorption des pics de charge, les stocke en base PostgreSQL et les présente dans un dashboard React avec filtres, stack traces et statistiques.",
    lien: "#",
  },
  {
    id: 19,
    title: "IA d'analyse de decks & simulation de combos",
    src: simulation,
    hauteur: "h-60",
    language: "Python",
    equipe: "1",
    inProgress: true,
    type: "Personnel",
    description:
      "Moteur d'analyse de decks de cartes à collectionner en cours de développement. Il utilise des algorithmes d'intelligence artificielle pour détecter les synergies entre cartes, simuler des milliers de parties afin d'évaluer les probabilités de combo, et fournir un score de viabilité compétitive accompagné de recommandations d'optimisation.",
    lien: "#",
  },
];


export default ProjectsElements;
