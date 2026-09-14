import { z } from "zod";
import {
  investorTypeOptions,
  investmentRangeOptions,
  interestTypeOptions,
} from "@/data/property";

export const propertyInterestSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  whatsapp: z
    .string()
    .min(7, "Please enter a valid WhatsApp number")
    .regex(/^[+\d\s()-]+$/, "Numbers, spaces, +, - and ( ) only"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  investorType: z.enum(investorTypeOptions, {
    message: "Please select an investor type",
  }),
  investmentRange: z.enum(investmentRangeOptions, {
    message: "Please select an investment range",
  }),
  interestType: z.enum(interestTypeOptions, {
    message: "Please select what you're interested in",
  }),
  message: z.string().optional(),
});

export type PropertyInterestFormData = z.infer<typeof propertyInterestSchema>;

// Maps Step 7's investor-persona selection (Private Investors, HNW, etc.)
// to the closest matching form dropdown option — the two lists use
// different wording because they serve different purposes (broad
// audience categories vs. a formal form field), so they need an
// explicit mapping rather than assuming they line up 1:1.
export const investorTypeIdToFormOption: Record<
  string,
  (typeof investorTypeOptions)[number]
> = {
  individual: "Individual Investor",
  hnw: "Individual Investor",
  institutional: "Institutional Investor",
  strategic: "Strategic Investor",
  business: "Business Group",
};
