# Chiya Break — chiyabreak.com

Durbar Square scenes of Kathmandu, Patan (Lalitpur) and Bhaktapur in five art styles (Lofi, Pixel, Flat, Mithila, Watercolour) with ten slow Nepali radio stations. © 2026 AR.

Move between the squares with the arrows on the left and right edges (they appear when the mouse comes near a side; always shown on phones), or the ← → keys.
Tap a street dog to wake it (not 9 PM–6 AM, when the dogs sleep beside the dai/didi/baje); double-tap for a random trick: roll over, spin, sit up and beg, play bow, or a little bark.
Tap a pigeon and it flies somewhere else (not while roosting at night); double-tap for a loop-the-loop or a cooing dance.
The scene always follows live Nepal time. Settings (bottom left): style, weather, volume and street sounds.

Shops (momo, chiya, clay pots in Kathmandu, statues in Patan, juju dhau in Bhaktapur) are open 8 AM–10 PM Nepal time. "Auto" weather and the temperature are live for each square: Kathmandu, Patan and Bhaktapur (Open-Meteo).

## Files
- `public/index.html` — the whole website (scene, music, controls). Edit this to change the site.
  The pixel style draws into a small 320×180 canvas; Lofi and Flat draw the same scene with smooth shapes on a sharp canvas (search for "Lofi & Flat art styles").
  Patan is drawn once for all styles (search for "Patan (Lalitpur) Durbar Square"); new squares are added to `PL` and `PLACE_ORDER`.
- `public/music/` — the recorded radio stations (sarangi & madal, harmonium chill). All stations except sarangi & madal and harmonium chill are composed live by the browser (search for "more live stations" in index.html): madal & flute, Newa Lofi, Mithila, Dohori, Sitar, Rainy Guitar, 90s Pop and Folk Rock. The station button opens a list.
- `public/favicon.svg`, `public/*.png` — the clay tea cup icon.
- `worker/index.js` — the visitor counter shown at the top right (`/api/views`).
- `wrangler.jsonc`, `package.json` — settings for Cloudflare. Leave these as they are.

## How updates work
The site is hosted on Cloudflare (Workers, free plan) and connected to this GitHub repository.
Any change saved here goes live on chiyabreak.com automatically in about a minute.

## Previews
- `chiyabreak.com/#tihar` or `/#dashain` — show the festival decorations any day (on Tihar nights, 6 PM–midnight, children play with jhurjhure sparklers, gamala and little crackers)
- `chiyabreak.com/#patan` or `/#bhaktapur` — open straight in that square
- `chiyabreak.com/#plane` — an aeroplane crosses the sky in a few seconds (normally every few hours)
- `chiyabreak.com/#kukur` — Kukur Tihar (7–8 Nov 2026): the dogs get a red tika and a leaf plate of food
- `chiyabreak.com/#woof` — the dogs bark a few seconds after sound is turned on
