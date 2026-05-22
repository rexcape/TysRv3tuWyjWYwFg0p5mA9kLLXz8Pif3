export default {
  async fetch(request, env, _ctx): Promise<Response> {
    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";

    const { success } = await env.RATE_LIMITER.limit({ key: ip });
    if (!success) {
      return new Response(null, {
        status: 429,
        statusText: "Too Many Requests",
      });
    }

    const url = new URL(request.url);
    const params = url.searchParams;

    const BokxdBxyxBWL = params.get(env.QPQMZTWCMWTP);
    const yLhMYPcXeDkD = params.get(env.HVFMXDVHJJDP);
    const HEHpCYwHmNsQ = params.get(env.FZCVURPKQYBA);

    if (BokxdBxyxBWL !== env.CTZGBKRYUVWR || yLhMYPcXeDkD !== env.VBZPFGJFABWH || HEHpCYwHmNsQ !== env.AGYEVXNETDAQ) {
      return new Response(null, {
        status: 403,
        statusText: "Forbidden",
      });
    }

    const value = await env.KV.get(env.VTBAZRWHXKMS);

    console.debug(
      `[success] time=${new Date().toISOString()} ip=${ip} country=${request.cf?.country ?? "unknown"} city=${request.cf?.city ?? "unknown"}`,
    );

    return new Response(value);
  },
} satisfies ExportedHandler<Env>;
