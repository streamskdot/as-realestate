"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "お名前", en: "Full Name", required: true, type: "text" },
  { name: "furigana", label: "ふりがな", en: "Furigana", required: true, type: "text" },
  { name: "email", label: "メールアドレス", en: "Email", required: true, type: "email" },
  { name: "company", label: "御社名", en: "Company Name", required: false, type: "text" },
  { name: "phone", label: "電話番号", en: "Phone", required: true, type: "tel" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleAction() {
    setPending(true);
    // Simulate submission delay for UX feedback
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setPending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="lux-card flex flex-col items-center rounded-sm p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold-primary" aria-hidden />
        <h3 className="font-display mt-4 text-2xl text-text-primary">
          Thank You
        </h3>
        <p className="font-serif-jp mt-2 text-sm text-text-secondary">
          お問い合わせありがとうございます。担当者より追ってご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form action={handleAction} className="space-y-6">
      {fields.map((f) => (
        <div key={f.name}>
          <label
            htmlFor={f.name}
            className="mb-2 flex items-center gap-2 text-sm text-text-primary"
          >
            <span className="font-serif-jp">{f.label}</span>
            <span className="text-xs text-text-muted">/ {f.en}</span>
            {f.required && (
              <span className="text-xs text-gold-primary">（必須）</span>
            )}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            required={f.required}
            className="w-full rounded-sm border border-border-gold bg-bg-black px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-gold-primary"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="mb-2 flex items-center gap-2 text-sm text-text-primary"
        >
          <span className="font-serif-jp">お問い合わせ内容</span>
          <span className="text-xs text-text-muted">/ Message</span>
          <span className="text-xs text-gold-primary">（必須）</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-sm border border-border-gold bg-bg-black px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-gold-primary"
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-text-secondary">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 accent-[#c9a84c]"
          required
        />
        <span className="font-serif-jp">上記内容に同意して送信する</span>
      </label>

      <button
        type="submit"
        disabled={!agreed || pending}
        style={{ backgroundImage: "var(--gold-gradient)" }}
        className="group flex w-full items-center justify-center gap-2 rounded-sm py-4 text-sm font-medium text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-12"
      >
        {pending ? "送信中... / Sending..." : "送信する / Send"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
