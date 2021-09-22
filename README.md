# Projet groupomania

## Présentation du projet

Groupomania est un groupe souhaitant renforcer la communication entre ses salariés en mettant en place un resau social interne.

##Objectifs

* Developper un mvp du site intégrant une fonctionnalité demandé ci-dessous
* Faire une présentation de 20 minutes sur le site et ses fonctionnalités

### Spécifications fonctionnelles

* La présentation des fonctionnalités doit etre simple
* La création d'un compte doit etre simple et possible depuis un téléphone 
* Le profil doit contenir très peu d'informations pour que la complétion soit rapide 
* La suppression du compte doit etre possible 
* L'accès à un forum où les salariés publient des contenus doit etre présent
* L'accès à un forum où les salariés publient des textes doit etre présent
* Les utilisateurs doivent pouvoir facilement repérer les dernieres participations des employés
* Le ou la chargé(e) de communication  doit pouvoir modérer les interactions entre salariés

## Utilisation

### Backend

#### outils :
* Langages:Javascript;Sql
* Base de donées : Mysql
* Serveur: Node.js

#### Démarrer le serveur 

* Ouvrez le dossier backend et executer npm install pour installer les dépendances.
* Dans le dossier backend, créer un fichier .env et intégrer les variables suivantes:
* "DB_NAME=" suivi du nom à donner à la BDD
* "DB_USERNAME=" suivi du nom d'utilisateur pour l'accès à la BDD
* "DB_PASSWORD=" suivi du mot de passe lié à l'utilisateur ayant les droits d'accès à la base
* "DB_HOST=127.0.0.1"

* Lancer la commande npx sequelize-cli db:create
* Lancer la commande npx sequelize-cli db:migrate
* Lancer la commande nodemon server.

### Frontend

#### outils :

* Vuejs


#### Démarrer le serveur

* Ouvrir le dossier frontend  et executer npm install pour installer les dépendances 
* Executer npm run serve pour lancer le serveur front
* Se rendre sur http://localhost:8080


* 
