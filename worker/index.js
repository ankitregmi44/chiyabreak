// Chiya Break on Cloudflare.
// The website files in /public are served directly by Cloudflare (free and unlimited).
// This small worker answers /api/views (total visits and how many people have the page open now)
// and /api/react (the reaction buttons under the thought of the week).
import { DurableObject } from "cloudflare:workers";

export class Counter extends DurableObject {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/react") return this.react(request, url);
    const id = (url.searchParams.get("id") || "").replace(/[^a-z0-9]/gi, "").slice(0, 20);
    const isNew = url.searchParams.get("new") === "1";
    const s = this.ctx.storage;

    let total = (await s.get("total")) || 0;
    if (isNew) { total += 1; await s.put("total", total); }

    const now = Date.now();
    const live = (await s.get("live")) || {};
    if (id) live[id] = now;
    for (const k of Object.keys(live)) if (now - live[k] > 150000) delete live[k];
    await s.put("live", live);

    return Response.json(
      { total, live: Math.max(1, Object.keys(live).length) },
      { headers: { "cache-control": "no-store" } }
    );
  }
}

const REACTS = ["up", "love", "sad", "laugh", "angry"];

// Reactions for one thought. id is the date of the thought (2026-11-11).
// GET reads the counts; POST adds one to `r` (and takes one away from `prev` when a visitor changes their mind).
Counter.prototype.react = async function (request, url) {
  const s = this.ctx.storage;
  const tidy = (c) => { const o = {}; for (const k of REACTS) o[k] = (c && c[k]) || 0; return o; };
  // ?ids=2026-11-11,2026-11-04 reads the counts of several thoughts at once (for "Earlier thoughts")
  const ids = url.searchParams.get("ids");
  if (ids && request.method === "GET") {
    const all = {};
    for (const i of ids.split(",").slice(0, 60)) if (/^\d{4}-\d{2}-\d{2}$/.test(i)) all[i] = tidy(await s.get("react:" + i));
    return Response.json(all, { headers: { "cache-control": "no-store" } });
  }
  const id = url.searchParams.get("id") || "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(id)) return new Response("bad id", { status: 400 });
  const counts = (await s.get("react:" + id)) || {};
  if (request.method === "POST") {
    const r = url.searchParams.get("r"), prev = url.searchParams.get("prev");
    if (!REACTS.includes(r)) return new Response("bad reaction", { status: 400 });
    if (r !== prev) {
      counts[r] = (counts[r] || 0) + 1;
      if (REACTS.includes(prev) && counts[prev] > 0) counts[prev] -= 1;
      await s.put("react:" + id, counts);
    }
  }
  return Response.json(tidy(counts), { headers: { "cache-control": "no-store" } });
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/views" || url.pathname === "/api/react") {
      try {
        return await env.COUNTER.get(env.COUNTER.idFromName("chiyabreak")).fetch(request);
      } catch (e) {
        return new Response("counter unavailable", { status: 503 });
      }
    }
    return env.ASSETS.fetch(request);
  },
};
