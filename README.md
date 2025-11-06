# SandboxJSX

Un projet React + Vite pour apprendre et expérimenter avec JSX et les composants React.

## 🚀 Fonctionnalités

- **Application React** avec Vite pour le hot reloading
- **Liste interactive de légumes** avec gestion des clics
- **Ajout dynamique** de nouveaux légumes via input et bouton
- **Gestionnaire d'état** avec useState pour une liste mutable
- **Architecture modulaire** avec exports nommés
- **IDs uniques** pour chaque élément de liste

## 📁 Structure du projet

```
src/
├── App.jsx                    # Composant principal
├── ClickableVegetableList.jsx # Liste interactive avec useState
├── VegetableList.jsx          # Liste simple (non utilisée)
├── main.jsx                   # Point d'entrée React
└── App.css                    # Styles
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

1. **Cliquer sur un légume** → Affiche une alerte avec le nom du légume
2. **Ajouter un légume** → Taper dans l'input et cliquer "Ajouter" ou appuyer sur Entrée
3. **Navigation** → Chaque élément a un ID unique (li0, li1, li2, etc.)

## 🧪 Technologies utilisées

- **React 18** avec hooks (useState)
- **Vite** pour le build et le dev server
- **ESLint** pour la qualité du code
- **JSX** avec exports nommés pour la modularité

## 📝 Concepts React démontrés

- Composants fonctionnels
- Gestion d'état avec useState
- Event handlers (onClick, onChange, onKeyPress)
- Rendu conditionnel et listes dynamiques
- Props et composition de composants
- Exports/imports nommés pour la réutilisabilité

---

*Projet d'apprentissage React par Malik Karaoui*
