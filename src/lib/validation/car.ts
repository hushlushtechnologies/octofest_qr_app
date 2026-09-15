import { z } from "zod";
import { enquiryTypeOptions } from "@/data/carEnquiry";

export const carEnquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  whatsapp: z
    .string()
    .min(7, "Please enter a valid WhatsApp number")
    .regex(/^[+\d\s()-]+$/, "Numbers, spaces, +, - and ( ) only"),
  email: z.string().email("Please enter a valid email address"),
  enquiryType: z.enum(enquiryTypeOptions, {
    message: "Please select an enquiry type",
  }),
  message: z.string().optional(),
});

export type CarEnquiryFormData = z.infer<typeof carEnquirySchema>;
