import { z } from "zod";

export const checkoutSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),

    fullName: z
        .string()
        .trim()
        .min(1, "Full name is required")
        .min(2, "Full name must be at least 2 characters")
        .max(50, "Full name can't be more than 50 characters"),

    phone: z
        .string()
        .trim()
        .min(1, "Phone number is required")
        .regex(/^01[0125]\d{8}$/, "Please enter a valid Egyptian phone number"),

    shippingAddress: z
        .string()
        .trim()
        .min(1, "Address is required")
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address can't be more than 100 characters"),

    city: z
        .string()
        .trim()
        .min(1, "City is required")
        .min(2, "City must be at least 2 characters")
        .max(25, "City can't be more than 25 characters"),

    governorate: z
        .string()
        .trim()
        .min(1, "Governorate is required")
        .min(2, "Governorate must be at least 2 characters")
        .max(25, "Governorate can't be more than 25 characters"),

    paymentMethod: z.enum(["CASH_ON_DELIVERY", "CREDIT_CARD"], {
        required_error: "Please choose a payment method",
    }),

    saveInfo: z.boolean(),
});