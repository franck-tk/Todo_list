# 📚 Del Coding - Gestionnaire de Tâches Académiques

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

Une application web moderne et professionnelle pour gérer les tâches académiques, développée par et pour les étudiants.

## 🎯 Fonctionnalités

- ✅ **Ajouter des tâches** - Créez rapidement de nouvelles tâches avec titre et description
- 📋 **Lister les tâches** - Visualisez toutes vos tâches académiques
- ☑️ **Marquer comme terminée** - Cochez les tâches complétées
- 🗑️ **Supprimer des tâches** - Supprimez les tâches inutiles
- 🔍 **Filtrer les tâches** - Filtrez par statut (Toutes, En cours, Terminées)
- 💾 **Persistance des données** - Les tâches sont sauvegardées localement
- 📱 **Design responsif** - Fonctionne sur tous les appareils
- 🎨 **Interface professionnelle** - Design moderne avec Tailwind CSS

## 📝 Structure des Tâches

Chaque tâche contient :
- **Titre** - Le nom/sujet de la tâche (requis)
- **Description** - Détails supplémentaires (optionnel)
- **Date de création** - Horodatage automatique
- **Statut** - En cours ou Terminée

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript (Vanilla)** - Logique sans dépendances
- **LocalStorage** - Persistance des données côté client
- **Git/GitHub** - Contrôle de version

## 🚀 Installation et Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Git (pour cloner le projet)
- Node.js et npm (pour builder le CSS Tailwind)

### Étapes d'installation

1. **Clonez le projet**
```bash
git clone https://github.com/yourusername/Todo-app.git
cd Todo-app
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Générer le CSS Tailwind**
```bash
npm run build:css
```

4. **Lancer un serveur local**
```bash
npm start
```

5. **Ouvrir l'application**
- Rendez-vous sur `http://localhost:8000`

### Mode développement
Pour reconstruire automatiquement le CSS pendant que vous travaillez :
```bash
npm run dev:css
```

## 📂 Structure du Projet

```
Todo-app/
├── index.html                  # Page principale
├── package.json                # Configuration npm
├── package-lock.json           # Verrouillage des dépendances
├── postcss.config.js           # Configuration PostCSS
├── tailwind.config.js          # Configuration Tailwind CSS
├── README.md                   # Documentation du projet
├── .gitignore                  # Fichiers ignorés par Git
├── src/
│   ├── assets/
│   │   └── css/
│   │       ├── input.css       # CSS source Tailwind
│   │       └── output.css      # CSS généré compilé
│   └── js/
│       └── script.js           # Logique JavaScript de l'application
└── .git/                       # Repository Git local
```

## 🎨 Design et Prototype

Prototype Figma :
- **Lien Figma** : [Voir le prototype](https://www.figma.com/file/your-figma-link)
- Couleurs principales : Bleu (#2563eb), Indigo (#4f46e5)
- Typographie : Sans-serif moderne
- Layout : Responsive (Desktop, Tablet, Mobile)

## 💾 Stockage Local

Les tâches sont sauvegardées dans le **localStorage** du navigateur :
- **Clé** : `delCodingTasks`
- **Format** : JSON Array
- **Durée** : Tant que les données du navigateur ne sont pas effacées

## 🔒 Sécurité

- **Protection XSS** : Échappement du HTML utilisateur
- **Validation** : Vérification des entrées côté client
- **Pas de transfert réseau** : Données locales uniquement

## 🎓 Principes de Génie Logiciel Appliqués

- **Modularité** : Code organisé en classe `TodoApp`
- **SRP** (Single Responsibility)** : Chaque méthode a une seule responsabilité
- **DRY** (Don't Repeat Yourself) : Réutilisation du code
- **Maintenabilité** : Code commenté et bien structuré
- **Responsive Design** : Compatible tous appareils
- **Clean Code** : Nommage clair et cohérent

## 📱 Compatibilité des Navigateurs

- ✅ Google Chrome (v90+)
- ✅ Mozilla Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Microsoft Edge (v90+)
- ✅ Opera (v76+)

## 🐛 Dépannage

**Les tâches ne se sauvegardent pas ?**
- Vérifiez que le localStorage n'est pas désactivé
- Videz le cache du navigateur

**L'application n'affiche pas correctement ?**
- Vérifiez que JavaScript est activé
- Actualisez la page (Ctrl+R ou Cmd+R)

## 🔮 Améliorations Futures

- [ ] Backend avec base de données
- [ ] Authentification utilisateur
- [ ] Catégorisation des tâches
- [ ] Niveaux de priorité
- [ ] Notifications/Rappels
- [ ] Export PDF
- [ ] Mode sombre
- [ ] Synchronisation cloud

## 👥 Contribuants

- **Del Coding Team** - Équipe de développement
- **Étudiants camerounais** - Utilisateurs beta

## 📜 Licence

MIT License - Libre d'utilisation

## 📧 Contact

- Email : contact@delcoding.cm
- Site : www.delcoding.cm
- GitHub : [@delcoding](https://github.com/delcoding)

---

**Fait avec ❤️ par la communauté Del Coding**

*Dernière mise à jour : Avril 2026*
