# SUCCESS TRAVELS MALI — Site vitrine professionnel

Projet 100% **HTML + CSS + JavaScript**, sans framework, facile à modifier dans VS Code.

## Contenu
- Accueil / hero avec moteur de recherche de vols (interface)
- Vols : aller-retour, aller simple, multi-destinations
- Services : billets, hôtels, visas, Omra/Hajj, séjours, transferts
- Promotions
- Destinations
- Pourquoi Success Travels
- Espace client / connexion (interface de démonstration)
- Formulaire de contact / demande de devis
- Responsive téléphone, tablette et PC
- Animations et notifications JavaScript

## Structure
```
success-travels/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/images/
```

## Installation
1. Décompresser le ZIP.
2. Ouvrir le dossier dans VS Code.
3. Ouvrir `index.html` avec votre navigateur, ou utiliser l'extension **Live Server**.

## Personnalisation rapide
- Nom/logo : `index.html` → `SUCCESS TRAVELS`.
- Téléphone/WhatsApp/e-mail : chercher `+223 XX XX XX XX`, `00000000` et `contact@successtravels.ml`.
- Couleurs : modifier les variables au début de `css/style.css`.
- Photos : modifier les URLs `background-image` dans `css/style.css`.
- Textes et destinations : directement dans `index.html`.

## Important : fonctions à connecter
Le site est un **front-end prêt à personnaliser**. La recherche de vols, la connexion client, les réservations, l'envoi réel des formulaires, les paiements et la gestion des dossiers nécessitent un backend/API.

Pour une version complète, on pourra ensuite ajouter :
- Backend Node.js/Express ou Laravel
- Base de données MySQL/PostgreSQL
- Authentification sécurisée
- Tableau de bord administrateur
- Gestion clients, réservations, promotions et demandes
- Notifications WhatsApp/e-mail
- API de vols (GDS) si disponible
- Paiement en ligne adapté au Mali

## Inspiration
L'architecture reprend des éléments courants observés sur les agences de voyage maliennes modernes : recherche de vols, services, hôtels, visas, pèlerinage, séjours, destinations, espace client et contact. Le contenu, la marque et le design de ce projet sont propres à **Success Travels**.
