"use client";

import { useState, type FormEvent } from "react";

type MailtoFormProps = {
  recipient: string;
  subject: string;
  note?: string;
  submitLabel?: string;
};

export function MailtoForm({
  recipient,
  subject,
  note,
  submitLabel = "Envoyer le message",
}: MailtoFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    const href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl" noValidate>
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

      <button
        type="submit"
        className="mt-8 bg-deep px-6 py-3 text-[0.9375rem] text-deep-text transition-opacity hover:opacity-90"
      >
        {submitLabel}
      </button>

      {sent && (
        <p className="mt-4 border-l-2 border-accent bg-paper-raised px-4 py-3 text-sm text-ink">
          Votre messagerie s&apos;ouvre avec le message pré-rempli. Il ne
          reste plus qu&apos;à l&apos;envoyer.
        </p>
      )}
    </form>
  );
}
