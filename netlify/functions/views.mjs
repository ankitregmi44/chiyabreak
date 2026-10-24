// Counts visits and how many people have the page open right now.
// Called by the page every 30 seconds at /api/views.
import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore({ name: "views", consistency: "strong" });
  const url = new URL(req.url);
  const id = (url.searchParams.get("id") || "").replace(/[^a-z0-9]/gi, "").slice(0, 20);
  const isNew = url.searchParams.get("new") === "1";

  let total = (await store.get("total", { type: "json" })) || 0;
  if (isNew) { total += 1; await store.setJSON("total", total); }

  const now = Date.now();
  const live = (await store.get("live", { type: "json" })) || {};
  if (id) live[id] = now;
  for (const k of Object.keys(live)) if (now - live[k] > 150000) delete live[k];
  const keys = Object.keys(live);
  if (keys.length > 5000) keys.slice(0, keys.length - 5000).forEach((k) => delete live[k]);
  await store.setJSON("live", live);

  return Response.json({ total, live: Math.max(1, Object.keys(live).length) }, { headers: { "cache-control": "no-store" } });
};

export const config = { path: "/api/views" };
