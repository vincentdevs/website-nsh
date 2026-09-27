"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_ENDPOINT } from "@/lib/data";

type MailtoFormProps = {
  recipient: string;
  subject: string;
  note?: string;
  submitLabel?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function MailtoForm({
  recipient,
  subject,
  note,
  submitLabel = "Envoyer le message",
}: MailtoFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users never fill this hidden field in.
    if (String(formData.get("company") || "").length > 0) {
      setStatus("success");
      return;
    }

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, subject }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "L'envoi a échoué.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue, merci de réessayer.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-xl border-l-2 border-accent bg-paper-raised px-6 py-8">
        <p className="text-base text-ink">
          Votre message a bien été envoyé. La NSH-Genève vous répondra dans
          les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir ce champ
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-2.5 text-base text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-2.5 text-base text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-2.5 text-base text-ink focus:border-accent focus:outline-none"
        />
      </div>

      {note && <p className="mt-4 text-sm text-ink-soft">{note}</p>}

      {status === "error" && (
        <p className="mt-4 text-sm text-red">
          {errorMessage} Vous pouvez aussi écrire directement à{" "}
          <a
            href={`mailto:${recipient}`}
            className="underline decoration-line underline-offset-4"
          >
            {recipient}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 bg-deep px-6 py-3 text-[0.9375rem] text-deep-text transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Envoi en cours…" : submitLabel}
      </button>
    </form>
  );
}
