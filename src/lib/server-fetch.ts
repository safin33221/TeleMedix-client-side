import { getCookies } from "@/services/auth/tokenHandler";

const BackendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/v1";



const serverFetchHelper = async (endpoint: string, options: RequestInit): Promise<Response> => {

    const { headers, ...restOptions } = options
    const accessToken = await getCookies("accessToken")
    const response = await fetch(`${BackendBaseUrl}${endpoint}`, {
        headers: {
            Cookie: accessToken ? `accessToken=${accessToken}` : "",
            ...headers,

        },
        ...restOptions

    })
    return response
}


export const serverFetch = {

    get: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "GET" }),

    put: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "PUT" }),
    patch: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "PATCH" }),

    post: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "POST" }),

    delete: async (endpoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "DELETE" }),



}
