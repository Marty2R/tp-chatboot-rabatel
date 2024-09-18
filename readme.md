# Chatbot

Ce projet est un Chatbot connecté à l'api Gemini 1.5 Flash qui générer des réponses en fonction des messages que vous aller envoyer.

> [!NOTE]
> Ce projet est encore en cours de développement.

## Prérequis

Avant de commencer, verifier d'avoir les éléments suivants installés :

1. Node.js (v14 ou plus récent)

2. npm

## Installation

1. > Clonez le repo : https://github.com/Marty2R/tp-chatboot-rabatel.git

2. > cd tp-chatboot-rabatel

## Lancer le projet

1. > npm i

2. > npm run dev

Le projet sera disponible sur http://localhost:8000.

## Configaration

Créez un fichier .env dans la racine du projet.

Copier le code

> GEMINI_API_KEY=your-gemini-api-key

> PORT=8000

Remplacez your-gemini-api-key par votre clé d'accès à l'API de Gemini 1.5 Flash.

Si nécessaire, modifiez le port par défaut dans le fichier .env ou dans index.js.

## Utilisation

1. Ouvrez votre navigateur et allez à l'adresse http://localhost:8000.

2. Entrez une question dans le champ de texte et cliquez sur "Ask to ia...".

Le chatbot répondra à la question en utilisant le modèle Gemini.

# Affinage Gemini

## Résumé de L'affinage :

- Le réglage d'un modèle sert à améliorer l'ia pour une tâche specifique en lui donnant des exemples d'entraînement. En lui montrant des fausses entrée et les réponses attendues, le modèle apprend à mieux répondre à la question. Une fois ajusté, le modèle ajoute les nouvelles informations apprises avec celles d'origine pour améliorer la performance et la pertinance des réponces.
