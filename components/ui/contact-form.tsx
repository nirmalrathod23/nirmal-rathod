"use client";

import { useActionState } from "react";
import { contactData } from "@/lib/data/contact";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-muted/30 p-8 md:p-12 rounded-2xl border border-border shadow-soft flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          {state.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2.5 rounded-full border border-border hover:bg-muted transition-colors font-medium text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 p-8 md:p-10 rounded-2xl border border-border shadow-soft">
      <form action={formAction} className="space-y-6">
        {state.message && !state.success && (
          <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3 text-destructive">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{state.message}</p>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-ring transition-colors outline-none"
            placeholder="John Doe"
            disabled={isPending}
          />
          {state.errors?.name && (
            <p className="text-xs text-destructive font-medium">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-ring transition-colors outline-none"
              placeholder="john@example.com"
              disabled={isPending}
            />
            {state.errors?.email && (
              <p className="text-xs text-destructive font-medium">{state.errors.email[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-bold text-foreground">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-ring transition-colors outline-none"
              placeholder="Acme Corp"
              disabled={isPending}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-bold text-foreground">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-ring transition-colors outline-none appearance-none"
            disabled={isPending}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {contactData.serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {state.errors?.service && (
            <p className="text-xs text-destructive font-medium">{state.errors.service[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-foreground">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-ring transition-colors outline-none resize-none"
            placeholder="Tell me a bit about your goals, timeline, and budget..."
            disabled={isPending}
          />
          {state.errors?.message && (
            <p className="text-xs text-destructive font-medium">{state.errors.message[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-soft hover:shadow-lift disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
