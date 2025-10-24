# 🔐 SSH Key Vercel - À ajouter dans 1Password

**Date de création** : 23 octobre 2025
**Projet** : COSMIC RAG - nextaigeneration-cosmic-rag
**Utilisation** : Déploiements Vercel

---

## 📋 Informations de la clé

**Type** : ED25519
**Email** : cosmic@vercel-nextaigeneration
**Fingerprint** : SHA256:5c38hsQG0xlOs0wO5hPbwXHU5Lv1CV57aR1S1wZuNFM

**Fichiers** :
- 🔐 Privée : `~/.ssh/id_ed25519_vercel`
- 🔓 Publique : `~/.ssh/id_ed25519_vercel.pub`

---

## 🔑 Clé Publique

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJI+sNev31uHHnfKUJYcWuAO49o/TqUbym6Q/I5sBU85 cosmic@vercel-nextaigeneration
```

---

## 🔒 Clé Privée

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACCSPrDXr99bhx53ylCWHFrgDuPaP06lG8pukPyObAVPOQAAAJg75s4OO+bO
DgAAAAtzc2gtZWQyNTUxOQAAACCSPrDXr99bhx53ylCWHFrgDuPaP06lG8pukPyObAVPOQ
AAAECfqW3qPxKJuHqvqHwT0xpS8ONr+BQnkDJLqmXxVWJakpI+sNev31uHHnfKUJYcWuAO
49o/TqUbym6Q/I5sBU85AAAAGmNvc21pY0B2ZXJjZWwtbmV4dGFpZ2VuZXJhdGlvbgECAw
QFBgc=
-----END OPENSSH PRIVATE KEY-----
```

---

## 📝 Ajout dans 1Password (Interface Web)

### Étape 1 : Se connecter
1. Ouvrir https://fredfrenchtouchsrl.1password.eu
2. Se connecter avec votre compte utilisateur personnel (pas le service account)

### Étape 2 : Choisir le vault
- **Recommandé** : Créer un nouveau vault "SSH-Keys" ou "Dev-Tools"
- **Alternative** : Utiliser "AI-Models-Keys" existant

### Étape 3 : Créer l'item
1. Cliquer sur **"New Item"**
2. Type : **"SSH Key"** ou **"Secure Note"**
3. Titre : **"SSH Key - Vercel nextAIgeneration"**

### Étape 4 : Remplir les champs

**Champs principaux** :
- **Title** : SSH Key - Vercel nextAIgeneration
- **Tags** : `vercel`, `ssh`, `nextaigeneration`, `cosmic-rag`, `deployment`

**Dans la section Notes** (copier-coller) :
```
Project: COSMIC RAG - nextaigeneration-cosmic-rag
Created: 2025-10-23
Fingerprint: SHA256:5c38hsQG0xlOs0wO5hPbwXHU5Lv1CV57aR1S1wZuNFM

PUBLIC KEY:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJI+sNev31uHHnfKUJYcWuAO49o/TqUbym6Q/I5sBU85 cosmic@vercel-nextaigeneration

PRIVATE KEY:
[Copier le contenu ci-dessus]

SSH CONFIG:
Host: vercel.com
IdentityFile: ~/.ssh/id_ed25519_vercel
User: git
```

### Étape 5 : Sauvegarder
Cliquer sur **"Save"**

---

## ⚙️ Configuration SSH (Déjà fait ✅)

La clé a déjà été ajoutée à `~/.ssh/config` :

```bash
# Vercel nextAIgeneration
Host vercel.com
  HostName vercel.com
  User git
  IdentityFile ~/.ssh/id_ed25519_vercel
  IdentitiesOnly yes
```

Et ajoutée à l'agent SSH :
```bash
ssh-add ~/.ssh/id_ed25519_vercel
```

---

## 🚀 Configuration dans Vercel

Une fois la clé dans 1Password, suivre ces étapes :

### Via CLI Vercel
```bash
# Se connecter à Vercel
vercel login

# Lier au projet existant
cd ~/cosmic-rag-github
vercel link --project=cosmic-rag-github

# Ou créer un nouveau projet
vercel --prod
```

### Via Interface Web Vercel
1. Ouvrir https://vercel.com/settings/git
2. Aller dans **"SSH Keys"**
3. Cliquer sur **"Add SSH Key"**
4. Coller la clé publique (voir ci-dessus)
5. Donner un nom : "COSMIC RAG - MacBook Pro"

---

## ✅ Checklist de sécurité

- [x] Clé ED25519 générée (plus sécurisée que RSA)
- [x] Passphrase vide (ok pour clé dédiée machine)
- [x] Clé ajoutée à l'agent SSH
- [x] Configuration SSH créée
- [ ] Clé stockée dans 1Password
- [ ] Clé ajoutée dans Vercel
- [ ] Test de connexion réussi

---

## 📚 Ressources

**Documentation Vercel** :
- https://vercel.com/docs/cli
- https://vercel.com/docs/git

**1Password** :
- Service Account actuel : lecture seule
- Compte personnel requis pour ajout

---

## 🔄 Clés SSH existantes

Pour référence, vous avez aussi :

1. **GitHub** : `~/.ssh/id_ed25519_github`
   - Organisation : nextAIgeneration
   - Repo : nextaigeneration-cosmic-rag

2. **GitLab** : `~/.ssh/id_ed25519_gitlab`
   - GitLab FFT Mercure
   - Repos internes

**Recommandation** : Ajouter également ces clés dans 1Password pour centraliser la gestion.

---

**Créé le** : 23 octobre 2025
**Par** : Claude Code - Session configuration SSH/1Password
