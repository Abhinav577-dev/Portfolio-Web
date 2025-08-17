# React Portfolio (Vite + Bootstrap)

A clean, responsive portfolio starter built with **React + Vite + Bootstrap**, pre-wired for **GitHub Pages** via Actions.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Customize

- Edit your info in:
  - `src/components/Hero.jsx`, `About.jsx`, `Contact.jsx`
  - `src/components/Projects.jsx` (edit the `PROJECTS` array)
  - Replace `public/resume.pdf` with your real resume
- Change colors/fonts in `src/styles.css`

## Deploy to GitHub Pages

1. Create a GitHub repo (public), push this project.
2. Edit **vite.config.js** and set:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/'
   ```
   Replace `YOUR_REPO_NAME` with your repository name exactly.
3. Push to `main`. The **Deploy to GitHub Pages** workflow will build and publish.
4. In your repo: Settings → Pages → Source = "GitHub Actions".
5. Your site will be available at `https://<your-username>.github.io/YOUR_REPO_NAME/`

## Optional: Custom Domain
- Add a `CNAME` file in `public/` with your domain (e.g., `portfolio.abhinav.dev`) and set it in GitHub Pages settings.

## Notes
- This template uses Bootstrap via CDN in `index.html`.
- Modify or remove Bootstrap as you like.
- Vite preview build goes to `/dist`.
- Requires Node 18+ (or 20).
