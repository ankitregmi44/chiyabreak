# Chiya Break — chiyabreak.com

A pixel-art Kathmandu Durbar Square scene with three slow Nepali radio stations. © 2026 AR.

Shops (momo, chiya, clay pots) are open 8 AM–10 PM Nepal time. "Auto" weather and the temperature come from live Kathmandu weather (Open-Meteo).

## Files
- `public/index.html` — the whole website (scene, music, controls). Edit this to change the site.
- `public/music/` — the recorded radio stations (sarangi & madal, harmonium chill). The madal & flute station is played live by the browser.
- `public/favicon.svg`, `public/*.png` — the clay tea cup icon.
- `worker/index.js` — the visitor counter shown at the top right (`/api/views`).
- `wrangler.jsonc`, `package.json` — settings for Cloudflare. Leave these as they are.

## How updates work
The site is hosted on Cloudflare (Workers, free plan) and connected to this GitHub repository.
Any change saved here goes live on chiyabreak.com automatically in about a minute.

## Previews
- `chiyabreak.com/#tihar` or `/#dashain` — show the festival decorations any day
- `chiyabreak.com/#woof` — the dogs bark a few seconds after sound is turned on
