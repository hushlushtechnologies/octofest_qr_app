"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useQRContext } from "@/components/providers/QRContentProvider";
import {
  carEnquirySchema,
  type CarEnquiryFormData,
} from "@/lib/validation/car";
import { enquiryTypeOptions } from "@/data/carEnquiry";
import { getCarWhatsAppLink } from "@/lib/whatsapp";
import type { Car } from "@/types/car";

export function CarInterestForm({ car }: { car: Car }) {
  const qrContext = useQRContext(); // carried for Sprint 6's real EmailJS submission
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const carName = `${car.brand} ${car.model}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CarEnquiryFormData>({
    resolver: zodResolver(carEnquirySchema),
  });

  async function onSubmit(data: CarEnquiryFormData) {
    setStatus("submitting");

    // TEMPORARY — Sprint 4 local mock only. No email is sent.
    // Sprint 6 replaces this with a real emailjs.send(...) call,
    // attaching `car.slug`/`carName` and `qrContext` as hidden metadata.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Car enquiry (mock submission):", {
      ...data,
      car: carName,
      carSlug: car.slug,
      qrContext,
    });

    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="h-8 w-8 text-success" />
        <p className="text-section text-foreground">Enquiry Sent</p>
        <p className="max-w-xs text-body text-text-secondary">
          Thank you — our sales team will be in touch shortly.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      {/* Selected car — fixed, not editable, per the brief's requirement
          that visitors never re-select the vehicle they already opened. */}
      <div className="flex flex-col gap-1.5">
        <p className="text-label text-text-secondary">Selected Car</p>
        <div className="flex h-12 items-center rounded-xl border border-border bg-surface-soft px-4 text-body text-foreground">
          {carName}
          {car.variant ? ` · ${car.variant}` : ""}
        </div>
      </div>

      <Input
        id="fullName"
        label="Full Name"
        placeholder="Jane Driver"
        error={errors.fullName?.message}
        {...register("fullName")}
      />
      <Input
        id="whatsapp"
        label="WhatsApp Number"
        type="tel"
        placeholder="+971 5X XXX XXXX"
        error={errors.whatsapp?.message}
        {...register("whatsapp")}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="jane@email.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Select
        id="enquiryType"
        label="Enquiry Type"
        options={enquiryTypeOptions}
        error={errors.enquiryType?.message}
        {...register("enquiryType")}
      />
      <Textarea
        id="message"
        label="Message (optional)"
        placeholder="Anything you'd like us to know"
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </Button>

      <a
        href={getCarWhatsAppLink(carName)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 text-button text-success underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="h-4 w-4" />
        Or message us on WhatsApp
      </a>
    </form>
  );
}
