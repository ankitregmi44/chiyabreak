// Chiya Break on Cloudflare.
// The website files in /public are served directly by Cloudflare (free and unlimited).
// This small worker only answers /api/views: total visits and how many people have the page open now.
import { DurableObject } from "cloudflare:workers";

export class Counter extends DurableObject {
  async fetch(request) {
    const url = new URL(request.url);
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/views") {
      try {
        return await env.COUNTER.get(env.COUNTER.idFromName("chiyabreak")).fetch(request);
      } catch (e) {
        return new Response("counter unavailable", { status: 503 });
      }
    }
    return env.ASSETS.fetch(request);
  },
};
