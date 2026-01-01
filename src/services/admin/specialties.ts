
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/ZodValidator";
import { createSpecialtiesZodSchema } from "@/zod/specilites.validation";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function createSpecialties(_prevState: any, formDate: FormData) {
    try {
        const payload = {
            title: formDate.get("title") as string

        }

        if (zodValidator(payload, createSpecialtiesZodSchema).success === false) {
            zodValidator(payload, createSpecialtiesZodSchema)

        }
        const validatedPayload = zodValidator(payload, createSpecialtiesZodSchema).data

        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))
        if (formDate.get("file")) {
            newFormData.append("file", formDate.get("file") as Blob)
        }
        const response = await serverFetch.post('/specialties', {
            body: newFormData
        })

        const result = await response.json()
        return result;

    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "failed to create specialties"}` };
    }
}



export async function getSpecialties() {
    try {
        const response = await serverFetch.get("/specialties")
        const result = await response.json()
        return result

    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "failed to retrieve specialties"}` };
    }
}


export async function deleteSpecialties(id: string) {
    try {
        const response = await serverFetch.delete(`/specialties/${id}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "failed to delete specialties"}` };
    }
}