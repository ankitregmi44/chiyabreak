# Chiya Break — chiyabreak.com

A pixel-art Kathmandu Durbar Square scene with slow Nepali-style music. © 2026 AR.

## Files
- `public/index.html` — the whole website (scene, music, controls). Edit this to change the site.
- `public/favicon.svg`, `public/*.png` — the clay tea cup icon.
- `worker/index.js` — the visitor counter shown at the top right (`/api/views`).
- `wrangler.jsonc`, `package.json` — settings for Cloudflare. Leave these as they are.

## How updates work
The site is hosted on Cloudflare (Workers, free plan) and connected to this GitHub repository.
Any change saved here goes live on chiyabreak.com automatically in about a minute.

## Previews
- `chiyabreak.com/#tihar` or `/#dashain` — show the festival decorations any day
- `chiyabreak.com/#woof` — the dogs bark a few seconds after sound is turned on
