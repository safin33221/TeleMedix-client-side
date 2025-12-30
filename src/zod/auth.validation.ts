import z from "zod";

export const registerPatientZodValidation = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(2, "Address is required"),
    password: z.string().min(4, "Password must be at least 4 characters")
});


export const loginZodValidation = z.object({
    email: z
        .email("Invalid email address"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters")
        .max(50, "Password must be less than 50 characters"),
});