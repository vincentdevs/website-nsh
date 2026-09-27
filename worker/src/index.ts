export interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  ALLOWED_ORIGIN: string;
}

function corsHeaders(origin: string, allowedOrigin: string) {
  const allow = origin === allowedOrigin ? origin : allowedOrigin;
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(
  data: unknown,
  status: number,
  origin: string,
  allowedOrigin: string,
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin, allowedOrigin),
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, env.ALLOWED_ORIGIN),
      });
    }

    if (request.method !== "POST") {
      return json({ error: "Méthode non autorisée." }, 405, origin, env.ALLOWED_ORIGIN);
    }

    let body: {
      name?: string;
      email?: string;
      message?: string;
      subject?: string;
      company?: string;
    };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Requête invalide." }, 400, origin, env.ALLOWED_ORIGIN);
    }

    // Honeypot: a hidden field real users never fill in.
    if (body.company) {
      return json({ ok: true }, 200, origin, env.ALLOWED_ORIGIN);
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const subject = String(body.subject || "Contact NSH-Genève").trim();

    if (!name || !email || !message) {
      return json(
        { error: "Merci de remplir tous les champs." },
        400,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return json({ error: "Adresse email invalide." }, 400, origin, env.ALLOWED_ORIGIN);
    }

    if (!env.RESEND_API_KEY) {
      return json(
        {
          error:
            "L'envoi d'email n'est pas encore configuré. Contactez l'administrateur du site.",
        },
        503,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NSH Genève <contact@nsh-ge.ch>",
        to: env.CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `${subject} - ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      return json(
        { error: "L'envoi a échoué, merci de réessayer plus tard." },
        502,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    return json({ ok: true }, 200, origin, env.ALLOWED_ORIGIN);
  },
};
