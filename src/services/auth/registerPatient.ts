/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";
import { loginUser } from "./loginUser";

const registerZodValidation = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(2, "Address is required"),
    password: z.string().min(4, "Password must be at least 4 characters")
});

export const registerPatient = async (_currentData: any, formData: any): Promise<any> => {
    try {
        const registerData = {
            password: formData.get("password"),
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
        };

        // Validate
        const validatedFields = registerZodValidation.safeParse(registerData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues.map(issue => ({
                    field: issue.path[0],
                    message: issue.message
                }))
            };
        }

        // Convert body to expected backend structure
        const apiBody = {
            password: registerData.password,
            patient: {
                name: registerData.name,
                email: registerData.email,
                address: registerData.address,
            }
        };

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(apiBody));

        const res = await fetch("http://localhost:5000/api/v1/user/create-patient", {
            method: "POST",
            body: newFormData
        })
        const result = await res.json()

        if (result.success) {
            await loginUser(_currentData, formData)
        }


        return result;
    } catch (error: any) {
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.log(error);
        return {
            success: false,
            errors: [{ field: "form", message: "Registration failed" }]
        };
    }
};
