# Deploy The Groom Room to Netlify

## Quick path: Netlify Drop (no GitHub needed)

1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag this entire `website` folder onto the page
3. Your site is live in seconds at a random URL like `random-name-123.netlify.app`
4. Add a custom domain in Netlify settings if desired

---

## Full path: GitHub → Netlify (for automatic deploys)

### 1. Create a new GitHub token

Your previous token was likely revoked. Create a new one:

- **GitHub** → **Settings** → **Developer settings** → **Personal access tokens**
- **Generate new token (classic)**  
- Check **repo** (full control)  
- Copy the new token

### 2. Push to GitHub

Open Terminal and run (replace `YOUR_NEW_TOKEN`):

```bash
cd "/Users/fredsales/Desktop/Cursor Folders/Pet Grooming/website"
git push https://Azaiah00:YOUR_NEW_TOKEN@github.com/Azaiah00/petgrooming.git main
```

### 3. Connect to Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import existing project**
2. Choose **GitHub** → select **petgrooming**
3. Publish directory: **`.`** (already set in netlify.toml)
4. Click **Deploy**

Future pushes to `main` will auto-deploy.
