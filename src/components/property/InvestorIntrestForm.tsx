"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { usePropertyInterest } from "@/components/providers/PropertyInterestProvider";
import { useQRContext } from "@/components/providers/QRContentProvider";
import {
  propertyInterestSchema,
  investorTypeIdToFormOption,
  type PropertyInterestFormData,
} from "@/lib/property";
import {
  investorTypeOptions,
  investmentRangeOptions,
  interestTypeOptions,
} from "@/data/property";

export function InvestorInterestForm() {
  const { selectedInvestorType } = usePropertyInterest();
  const qrContext = useQRContext(); // available for Sprint 6 — see submit handler note below
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PropertyInterestFormData>({
    resolver: zodResolver(propertyInterestSchema),
  });

  // Pre-fill from Step 7's card selection when it changes.
  useEffect(() => {
    if (
      selectedInvestorType &&
      investorTypeIdToFormOption[selectedInvestorType]
    ) {
      setValue(
        "investorType",
        investorTypeIdToFormOption[selectedInvestorType],
      );
    }
  }, [selectedInvestorType, setValue]);

  async function onSubmit(data: PropertyInterestFormData) {
    setStatus("submitting");

    // TEMPORARY — Sprint 3 local mock only. No email is sent.
    // Sprint 6 replaces this block with a real emailjs.send(...) call,
    // attaching qrContext (event/type/source) as hidden metadata
    // alongside `data`, per the original EmailJS architecture plan.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Property interest (mock submission):", { ...data, qrContext });

    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-success/30 bg-success/10 px-6 py-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-success" />
        <p className="text-section text-foreground">Interest Received</p>
        <p className="max-w-xs text-body text-text-secondary">
          Thank you — our investment team will be in touch to arrange a private
          discussion.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          Submit another enquiry
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
      <Input
        id="fullName"
        label="Full Name"
        placeholder="Jane Investor"
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
        placeholder="jane@company.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="company"
        label="Company (optional)"
        placeholder="Company name"
        error={errors.company?.message}
        {...register("company")}
      />
      <Select
        id="investorType"
        label="Investor Type"
        options={investorTypeOptions}
        error={errors.investorType?.message}
        {...register("investorType")}
      />
      <Select
        id="investmentRange"
        label="Investment Range"
        options={investmentRangeOptions}
        error={errors.investmentRange?.message}
        {...register("investmentRange")}
      />
      <Select
        id="interestType"
        label="Interest Type"
        options={interestTypeOptions}
        error={errors.interestType?.message}
        {...register("interestType")}
      />
      <Textarea
        id="message"
        label="Message (optional)"
        placeholder="Anything you'd like us to know"
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" disabled={status === "submitting"} className="mt-2">
        {status === "submitting"
          ? "Submitting..."
          : "Express Investment Interest"}
      </Button>
    </form>
  );
}
