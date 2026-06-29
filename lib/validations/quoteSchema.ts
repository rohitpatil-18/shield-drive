import { z } from "zod";

export const quoteSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(
      /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
      "Enter a valid US phone number"
    ),

  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "ZIP code must be exactly 5 digits"),

  carYear: z
    .string()
    .min(1, "Please select a vehicle year"),

  carMake: z
    .string()
    .min(1, "Please select a vehicle make"),

  carModel: z
    .string()
    .min(1, "Please select a vehicle model"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;