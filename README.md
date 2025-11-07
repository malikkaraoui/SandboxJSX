# SandboxJSX

Un projet React + Vite pour apprendre et expérimenter avec JSX et les composants React.

## 🚀 Fonctionnalités

- **Application React** avec Vite pour le hot reloading rapide
- **Liste interactive de légumes** avec gestion des clics et alertes
- **Ajout dynamique** de nouveaux légumes via input clavier et bouton de validation
- **Gestionnaire d'état** avec useState pour une liste mutable et réactive
- **Architecture modulaire** avec exports nommés (pas de default export)
- **IDs uniques** pour chaque élément de liste (li0, li1, li2, etc.)
- **Validation d'input** avec trim() pour éviter les espaces superflus

## 📁 Structure du projet

```
src/
├── App.jsx                    # Composant principal de l'application
├── ClickableVegetableList.jsx # Liste interactive avec useState et event handlers
├── VegetableList.jsx          # Composant de liste simple (non utilisé actuellement)
├── main.jsx                   # Point d'entrée React avec StrictMode
├── App.css                    # Styles du composant App
└── index.css                  # Styles globaux
```

## 🛠️ Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou le port suivant si occupé).

## 🎯 Utilisation

1. **Cliquer sur un légume** → Affiche une popup alert avec le nom du légume cliqué
2. **Ajouter un légume** → Taper le nom dans l'input et cliquer "Ajouter" ou appuyer sur Entrée
3. **IDs dynamiques** → Chaque élément génère automatiquement un ID unique (li0, li1, li2, etc.)
4. **Liste évolutive** → Les nouveaux légumes s'ajoutent en temps réel grâce à useState

## 🧪 Technologies utilisées

- **React 18** avec hooks (useState)
- **Vite 7.2** pour le build ultra-rapide et le dev server avec HMR
- **ESLint** pour la qualité et la cohérence du code
- **JSX** avec exports nommés pour une meilleure modularité future

## 📝 Concepts React démontrés

- **Composants fonctionnels** : Structure moderne avec arrow functions
- **Gestion d'état** : useState pour tableaux mutables et inputs contrôlés
- **Event handlers** : onClick, onChange, onKeyPress
- **Rendu dynamique** : map() pour générer des listes à partir d'arrays
- **Validation** : trim() pour nettoyer les inputs utilisateur
- **Props et composition** : Import et utilisation de composants enfants
- **Exports/imports nommés** : Architecture scalable sans default exports

## 🎓 Apprentissages clés

- Pourquoi utiliser `useState` pour rendre un tableau mutable
- La méthode `.trim()` pour nettoyer les chaînes de caractères
- Différence entre exports nommés et default exports
- Génération d'IDs uniques avec template literals
- Gestion d'événements clavier avec onKeyPress

---

*Projet d'apprentissage React par Malik Karaoui*
