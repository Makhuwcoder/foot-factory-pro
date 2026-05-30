# 🏟️ Foot Factory Pro

> *« On commence là où tout le monde s'arrête »*
>
> **Analyser. Développer. Performer.**

Plateforme de coaching football tout-en-un — IA, évaluations terrain, highlights automatiques, recrutement, convocations, matchs en direct.

---

## 🚀 Accès rapide

| Page | Description |
|---|---|
| `ffp-accueil.html` | Landing page premium |
| `ffp-login.html` | Connexion (coach / parents) |
| `ffp-dashboard.html` | Tableau de bord unifié |
| `ffp-coach.html` | Portail coach complet |
| `ffp-parents.html` | Espace parents |
| `ffp-media.html` | Media Platform & Pipeline IA |
| `ffp-scout.html` | Scout Platform (auth requise) |
| `ffp-match.html` | Feuille de match live |
| `ffp-messagerie.html` | Messagerie coach ↔ parents |
| `ffp-convocations.html` | Convocations officielles |
| `ffp-vie-club.html` | Calendrier public |
| `ffp-admin.html` | Administration |
| `ffp-guide.html` | Guide de déploiement |

---

## 🔐 Identifiants par défaut

| Rôle | Identifiant | Mot de passe |
|---|---|---|
| Coach | `coach` | `Terrain2026` |
| Parent | `1001` à `1030` | même code |
| Scout | `scout` | `Scout2026` |

---

## ⚡ Déploiement en 5 minutes

### Vercel (recommandé)
```bash
npm install -g vercel
cd /votre-dossier-ffp
vercel
```
→ URL publique immédiate : `https://foot-factory-pro.vercel.app`

### Netlify (drag & drop)
1. Aller sur [app.netlify.com](https://app.netlify.com)
2. Glisser ce dossier dans la zone de dépôt
3. Done ✓

### GitHub Pages
1. Créer un repo GitHub
2. Uploader tous les fichiers à la racine
3. Settings → Pages → Branch: main

---

## 🛡️ Sécurité

Le fichier `ffp-security.sql` contient le schéma Supabase complet avec :
- Row Level Security (RLS) sur toutes les tables
- Isolation inter-clubs et inter-catégories
- Hiérarchie 5 niveaux : SuperAdmin → Directeur → Coordinateur → Coach → Parent/Scout

---

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript ES5 (compatible tous navigateurs)
- PWA : installable sur mobile, offline ready
- IA Pipeline : YOLOv8 · OpenCV · Whisper · PySceneDetect (simulé)
- Storage : localStorage (prototype) → Supabase (production)
- Déploiement : Vercel / Netlify / Firebase Hosting

---

*Foot Factory Pro · Saison 2026-27*
