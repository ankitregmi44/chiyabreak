# Chiya Break — chiyabreak.com

Durbar Square scenes of Kathmandu, Patan (Lalitpur) and Bhaktapur, and the lakeside of Pokhara, in six art styles (Lofi, Pixel, Flat, Mithila, Watercolour, Anime) with ten slow Nepali radio stations. © 2026 AR.

Move between the squares with the arrows on the left and right edges (they appear when the mouse comes near a side; always shown on phones), or the ← → keys.
Tap a street dog to wake it (not 9 PM–6 AM, when the dogs sleep beside the dai/didi/baje); double-tap for a random trick: roll over, spin, sit up and beg, play bow, or a little bark.
Tap a pigeon and it flies somewhere else (not while roosting at night); double-tap for a loop-the-loop or a cooing dance.
The scene always follows live Nepal time. Settings (bottom left): style, weather, volume and street sounds.

Shops (momo, chiya, clay pots in Kathmandu, statues in Patan, juju dhau in Bhaktapur) are open 8 AM–10 PM Nepal time. "Auto" weather and the temperature are live for each square: Kathmandu, Patan and Bhaktapur (Open-Meteo).

Visitors land on a home screen and pick a place; "‹ All places" on any scene goes back. On computers the small pictures on the home screen move (they are this same page opened with `?thumb=ktm`, `?thumb=patan`, `?thumb=bkt` or `?thumb=pkr`); phones show still pictures from `public/thumbs/`.
To add a place card, edit `HOME` in index.html (search for "home screen: choose a place"). To change what I say about a place, edit `THOUGHTS` (search for "my thoughts about each place").
To post a new "food for thought", add a line at the top of `FOOD` (search for "food for thought") with the date as its `id`. The newest shows on the home screen with pixel reaction buttons; older ones move to "Earlier thoughts".

## Pokhara
The five-headed Ganesh, the World Peace Stupa (people climb its stairs and sit), Phewa lake with painted boats under the Annapurna range (the lake mirrors the mountains; clouds drift across them), a waterfall, the Shiva statue above a chiya shop, and a plain stone wall and street lamps along the road. There are no festival decorations in Pokhara.
An aama sits on the steps with the radio and roasts makai: she reads her paper, sips tea, fans the fire now and then, and people stop to buy a paper cone of makai. Her fire and its thin smoke are only there while she is awake (she sleeps 9 PM–6 AM like the others).
Rowing boats go out on the lake and come back in the daytime; motorbikes pass now and then; paragliders (every 1.5–3 hours, 7 AM–5:30 PM) and a hot air balloon (every 2–4 hours) appear in fair weather.
All of it is in index.html: search for "Pokhara (Lakeside)".

## Files
- `public/index.html` — the whole website (scene, music, controls). Edit this to change the site.
  The pixel style draws into a small 320×180 canvas; Lofi and Flat draw the same scene with smooth shapes on a sharp canvas (search for "Lofi & Flat art styles").
  The Anime style uses the same shapes with richer colours, light and shadow, the Himalaya, prayer flags, drifting leaves and anime faces (search for "Anime art style").
  Patan is drawn once for all styles (search for "Patan (Lalitpur) Durbar Square"); new places are added to `PL` and `PLACE_ORDER`. Pokhara is drawn the same way (search for "Pokhara (Lakeside)").
- `public/music/` — the recorded radio stations (sarangi & madal, harmonium chill). All stations except sarangi & madal and harmonium chill are composed live by the browser (search for "more live stations" in index.html): madal & flute, Newa Lofi, Mithila, Funky Tune, Sitar, Rainy Guitar, 90s Pop and Folk Rock. Switch stations with the ‹ › arrows on the station button.
- `public/favicon.svg`, `public/*.png` — the clay tea cup icon.
- `worker/index.js` — the visitor counter shown at the top right (`/api/views`) and the reaction counts for the thought of the week (`/api/react`).
- `wrangler.jsonc`, `package.json` — settings for Cloudflare. Leave these as they are.

## How updates work
The site is hosted on Cloudflare (Workers, free plan) and connected to this GitHub repository.
Any change saved here goes live on chiyabreak.com automatically in about a minute.

## Previews
- `chiyabreak.com/#tihar` or `/#dashain` — show the festival decorations any day (on Tihar nights, 6 PM–midnight, children play with jhurjhure sparklers, gamala and little crackers)
- `chiyabreak.com/#patan`, `/#bhaktapur` or `/#pokhara` — open straight in that place
- `chiyabreak.com/#paraglide` or `/#hotair` — Pokhara with paragliders or the hot air balloon arriving in a few seconds
- `chiyabreak.com/#thoughts` — open the "Earlier thoughts" diary (the small link only shows once there is more than one thought)
- `chiyabreak.com/#plane` — an aeroplane crosses the sky in a few seconds (normally every few hours)
- `chiyabreak.com/#kukur` — Kukur Tihar (7–8 Nov 2026): the dogs get a red tika and a leaf plate of food
- `chiyabreak.com/#woof` — the dogs bark a few seconds after sound is turned on
