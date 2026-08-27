"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { requestDemoForm } from "@/content/pages/request-demo";

export function RequestDemoForm() {
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
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={fields.firstName} htmlFor="firstName">
            <Input id="firstName" name="firstName" required autoComplete="given-name" />
          </Field>
          <Field label={fields.lastName} htmlFor="lastName">
            <Input id="lastName" name="lastName" required autoComplete="family-name" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={fields.company} htmlFor="company">
            <Input id="company" name="company" required autoComplete="organization" />
          </Field>
          <Field label={fields.title} htmlFor="title">
            <Input id="title" name="title" autoComplete="organization-title" />
          </Field>
        </div>

        <Field label={fields.phone} htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>

        <Field label={fields.workEmail} htmlFor="workEmail">
          <Input id="workEmail" name="workEmail" type="email" required autoComplete="email" />
        </Field>

        <Field label={fields.country} htmlFor="country">
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          >
            <option value="" disabled>
              Select a country
            </option>
            {requestDemoForm.countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Field>

        <Field label={fields.message} htmlFor="message">
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
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
