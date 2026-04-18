"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  problem: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  problem: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setStatus("success");
      setFeedback("Thank you. Your appointment request has been sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please call the clinic directly."
      );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6 md:p-8"
    >
      <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
          Priority Appointment Form
        </p>
        <p className="mt-2 text-sm leading-7 text-muted">
          Share your details and the clinic team will get in touch promptly to guide the next
          step.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Your full name"
            className="h-12 w-full rounded-2xl border border-line bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">Phone</span>
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder="+91 98765 43210"
            className="h-12 w-full rounded-2xl border border-line bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-ink">Problem</span>
        <input
          required
          value={form.problem}
          onChange={(event) => setForm((current) => ({ ...current, problem: event.target.value }))}
          placeholder="Knee pain, fracture, sports injury..."
          className="h-12 w-full rounded-2xl border border-line bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
        />
      </label>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-ink">Message</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Share your symptoms, how long you have had the issue, or preferred appointment time."
          className="w-full rounded-2xl border border-line bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[220px]"
        >
          {status === "loading" ? "Sending..." : "Book Appointment"}
        </button>
        <p className="text-xs leading-6 text-muted sm:max-w-[18rem]">
          By submitting this form, you agree to be contacted regarding your enquiry.
        </p>
      </div>

      {feedback ? (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
