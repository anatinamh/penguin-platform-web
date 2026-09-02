"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getRequestDemo } from "@/content";
import type { Locale } from "@/lib/i18n";

export function RequestDemoForm({ locale }: { locale: Locale }) {
  const { requestDemoForm } = getRequestDemo(locale);
  const [submitted, setSubmitted] = useState(false);
  const { fields } = requestDemoForm;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card p-8 text-center sm:p-10">
        <CheckCircle2 className="size-10 text-primary" />
        <p className="font-heading text-xl font-medium">{requestDemoForm.successTitle}</p>
        <p className="max-w-sm text-sm text-muted-foreground">{requestDemoForm.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
    >
      <p className="font-heading text-xl font-medium">{requestDemoForm.title}</p>

      <div className="mt-6 grid gap-4">
        <Field label={fields.name} htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>

        <Field label={fields.workEmail} htmlFor="workEmail">
          <Input id="workEmail" name="workEmail" type="email" required autoComplete="email" />
        </Field>

        {/* Only two of the four are required, so marking what's optional says
            more than starring what isn't. */}
        <Field label={fields.phone} htmlFor="phone" hint={requestDemoForm.optionalHint}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>

        <Field label={fields.message} htmlFor="message" hint={requestDemoForm.optionalHint}>
          <Textarea id="message" name="message" rows={4} />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs text-muted-foreground">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-3.5 shrink-0 rounded border-input accent-primary"
        />
        {requestDemoForm.consent}
      </label>

      <Button type="submit" className="mt-6 w-full sm:w-auto">
        {requestDemoForm.submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="gap-1.5">
        {label}
        {hint ? <span className="font-normal text-muted-foreground">· {hint}</span> : null}
      </Label>
      {children}
    </div>
  );
}
