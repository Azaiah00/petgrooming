# Netlify Deployment Guide for The Groom Room Website

Your website is ready to deploy. Follow these steps to get it on GitHub and Netlify.

---

## Step 1: Push to GitHub (Required First)

The 403 error means your token needs to be refreshed. Create a **new** Personal Access Token:

1. Go to **GitHub** → **Settings** → **Developer settings** → **Personal access tokens**
2. Click **Generate new token** (classic)
3. Name it (e.g., "Netlify Deploy")
4. Check the **repo** scope (full control of private repositories)
5. Click **Generate token**
6. **Copy the token** — you won't see it again!

### Push from Terminal

Open Terminal and run:

```bash
cd "/Users/fredsales/Desktop/Cursor Folders/Pet Grooming/website"
git push https://YOUR_GITHUB_USERNAME:YOUR_NEW_TOKEN@github.com/Azaiah00/petgrooming.git main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username and `YOUR_NEW_TOKEN` with the new token.

**Or** use GitHub Desktop / VS Code Source Control and sign in when prompted.

---

## Step 2: Deploy to Netlify

### Option A: Import from GitHub (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign up / log in
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and authorize Netlify
4. Select the **Azaiah00/petgrooming** repository
5. Netlify will auto-detect settings:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `website` (or `.` if repo root is the website)
6. If your repo root IS the website folder, use:
   - **Publish directory:** `.`
7. Click **Deploy site**
8. Your site will be live in 1-2 minutes!

### Option B: Drag & Drop (If GitHub Push Fails)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `website` folder onto the page
3. Netlify will deploy it instantly
4. Note: Updates require manual re-upload each time

---

## Step 3: Custom Domain (Optional)

1. In Netlify: **Site settings** → **Domain management**
2. Add custom domain (e.g., thegroomroomrva.com)
3. Update DNS at your registrar to point to Netlify

---

## Your Repo Structure

```
petgrooming/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── booking.html
├── contact.html
├── faq.html
├── css/
├── js/
├── assets/
└── README.md
```

**Publish directory for Netlify:** `.` (root of repo)

---

## Troubleshooting

- **403 on push:** Create a new token with `repo` scope
- **Netlify 404:** Set Publish directory to `.`
- **Video not playing:** Ensure `assets/` folder is included in the deploy
