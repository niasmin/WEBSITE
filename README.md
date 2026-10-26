# Healthcare Empire — Game website

Thai promotional website for [Healthcare Empire: Care & Beyond](https://github.com/niasmin/Healthcare-Simulator-Starter). Built with vanilla JavaScript and Vite. Includes responsive layouts, accessible chapter tabs, a concept-art dialog, and FAQ disclosures. Play buttons open the existing game deployment; the game itself is not bundled.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Source attribution

Game details and images in `public/assets/` and `public/favicon.png` come from the user-provided `niasmin/Healthcare-Simulator-Starter` repository, commit `8cd05d522b3f9a90d31bf43b2337043ae3017e31`. Artwork is concept art, not a screenshot of playable mechanics. No asset ownership or redistribution license is asserted by this website. Confirm rights before wider publication.

Google Fonts provides Manrope and IBM Plex Sans Thai; system fonts are used if unavailable. All main website interactions run locally without a backend.

## GitHub Pages

The production base path is `/WEBSITE/`. In repository Settings → Pages, select **GitHub Actions** as the build source. Pushes to `main` build and deploy through `.github/workflows/deploy.yml`. The intended site URL is `https://niasmin.github.io/WEBSITE/`.
