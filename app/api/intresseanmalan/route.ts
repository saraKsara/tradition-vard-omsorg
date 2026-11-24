const MAX_NAME_LENGTH = 120;
const MAX_PHONE_LENGTH = 40;
const MAX_EMAIL_LENGTH = 180;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const name = clean(body.name, MAX_NAME_LENGTH);
  const phone = clean(body.phone, MAX_PHONE_LENGTH);
  const email = clean(body.email, MAX_EMAIL_LENGTH);
  const company = clean(body.company, 200);

  if (company) return Response.json({ ok: true });

  if (!name || !phone || !isEmail(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ ok: false }, { status: 503 });

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Tradition vård & omsorg <formular@mail.traditionvardomsorg.com>",
      to: ["kontakt@traditionvardomsorg.com"],
      reply_to: email,
      subject: `Ny intresseanmälan från ${name}`,
      text: [
        "Ny intresseanmälan via webbplatsen",
        "",
        `Namn: ${name}`,
        `Telefonnummer: ${phone}`,
        `E-post: ${email}`,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend delivery failed", resendResponse.status);
    return Response.json({ ok: false }, { status: 502 });
  }

  const autoReplyResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Tradition vård & omsorg <formular@mail.traditionvardomsorg.com>",
      to: [email],
      reply_to: "kontakt@traditionvardomsorg.com",
      subject: "Vi har tagit emot din intresseanmälan",
      text: [
        `Hej ${name},`,
        "",
        "Tack för din intresseanmälan! Vi har tagit emot dina kontaktuppgifter och återkommer till dig inom kort.",
        "",
        "Har du frågor under tiden är du välkommen att svara på detta mejl eller ringa oss på 08-525 129 42.",
        "",
        "Vänliga hälsningar",
        "Tradition Vård & Omsorg",
      ].join("\n"),
    }),
  });

  if (!autoReplyResponse.ok) {
    console.error("Resend auto-reply failed", autoReplyResponse.status);
  }

  return Response.json({ ok: true });
}
