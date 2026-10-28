# TechStrategist Portfolio

A responsive React and Vite portfolio for Joseph Njoroge, focused on practical technology projects and digital strategy.

## Run locally

```powershell
npm install
npm run dev
```

Create a production build with `npm run build`, or serve that build locally with `npm run preview`.

## Content and assets

- Project descriptions, external URLs, availability notes, and case-study details live in `src/data/projects.js`.
- Skills are editable in `src/data/skills.js`.
- Experience, education, and the currently empty verified-credentials list live in `src/data/experience.js`.
- The hero carousel uses three supplied portraits: `public/profile.jpeg`, `public/portrait-main.jpeg`, and `public/portrait-monochrome.webp`. Replace these files to update its slides; the first portrait is also reused on the About page.
- Project cards use CSS illustrations because verified project screenshots were not supplied. Replace them with genuine screenshots when available.

Review the project URLs before publishing: the ICT Quest and JoForge Studio home pages responded during the initial review, while the supplied Image-to-PDF URL returned HTTP 404 on 27 October 2026. A reachable home page does not confirm that every feature works.

## Contact form

The form validates required fields in the browser and prepares an email draft addressed to `joforge19@gmail.com`. It does not send or store submissions. Visitors must review and send the draft from their own email app; a WhatsApp link is provided as an alternative. Connect a backend or a form provider if direct submission is needed.

## Deployment

Build the site with `npm run build` and deploy the contents of `dist/` to a static host configured to serve `index.html` for client-side routes. No API keys or server credentials are required by the current frontend.
