"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function InterestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/intresseanmalan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) throw new Error("Formuläret kunde inte skickas");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      {status === "success" ? (
        <div className="interest-success" role="status" aria-live="polite">
          <span>Tack för din intresseanmälan</span>
          <h2>Vi har tagit emot dina uppgifter.</h2>
          <p>En bekräftelse har skickats till e-postadressen du angav. Vi kontaktar dig så snart vi kan.</p>
          <button className="button interest-new" type="button" onClick={() => setStatus("idle")}>
            Skicka en ny intresseanmälan
          </button>
        </div>
      ) : (
        <>
          <label>
            <span>Namn</span>
            <input type="text" name="name" autoComplete="name" maxLength={120} required />
          </label>
          <label>
            <span>Telefonnummer</span>
            <input type="tel" name="phone" autoComplete="tel" inputMode="tel" maxLength={40} required />
          </label>
          <label>
            <span>E-post</span>
            <input type="email" name="email" autoComplete="email" inputMode="email" maxLength={180} required />
          </label>
          <label className="interest-trap" aria-hidden="true">
            <span>Företag</span>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button interest-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Skickar…" : "Skicka intresseanmälan"}
          </button>
          <div className="interest-status" aria-live="polite">
            {status === "error" && <p className="error">Något gick fel. Försök igen eller mejla kontakt@traditionvardomsorg.com.</p>}
          </div>
          <p className="interest-privacy">
            Vi använder dina kontaktuppgifter för att återkomma om din förfrågan. Läs vår <a href="/integritet">integritetspolicy</a> om behandling, lagring och dina rättigheter. Lämna dina egna kontaktuppgifter; skicka inte känsliga uppgifter via formuläret.
          </p>
        </>
      )}
    </form>
  );
}
