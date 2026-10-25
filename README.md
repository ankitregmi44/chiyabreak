# Chiya Break — chiyabreak.com

Durbar Square scenes of Kathmandu and Patan (Lalitpur) in three art styles (Pixel, Lofi, Flat) with three slow Nepali radio stations. © 2026 AR.

Move between the squares with the arrows on the left and right edges (they appear when the mouse comes near a side; always shown on phones), or the ← → keys.
Tap a street dog to wake it (not at night); double-tap and it rolls over.

Shops (momo, chiya, clay pots in Kathmandu, statues in Patan) are open 8 AM–10 PM Nepal time. "Auto" weather and the temperature come from live Kathmandu weather (Open-Meteo).

## Files
- `public/index.html` — the whole website (scene, music, controls). Edit this to change the site.
  The pixel style draws into a small 320×180 canvas; Lofi and Flat draw the same scene with smooth shapes on a sharp canvas (search for "Lofi & Flat art styles").
  Patan is drawn once for all styles (search for "Patan (Lalitpur) Durbar Square"); new squares are added to `PL` and `PLACE_ORDER`.
- `public/music/` — the recorded radio stations (sarangi & madal, harmonium chill). The madal & flute station is played live by the browser.
- `public/favicon.svg`, `public/*.png` — the clay tea cup icon.
- `worker/index.js` — the visitor counter shown at the top right (`/api/views`).
- `wrangler.jsonc`, `package.json` — settings for Cloudflare. Leave these as they are.

## How updates work
The site is hosted on Cloudflare (Workers, free plan) and connected to this GitHub repository.
Any change saved here goes live on chiyabreak.com automatically in about a minute.

## Previews
- `chiyabreak.com/#tihar` or `/#dashain` — show the festival decorations any day
- `chiyabreak.com/#patan` — open straight in Patan Durbar Square
- `chiyabreak.com/#woof` — the dogs bark a few seconds after sound is turned on
