import { ApiEndpoints } from "./DataTypes";

export const CheckApiEndpoints = (): ApiEndpoints => {
    const apiGet = process.env.NEXT_PUBLIC_API_ENDPOINT_GET;
    const apiPost = process.env.NEXT_PUBLIC_API_ENDPOINT_POST;

    if (!apiGet || !apiPost) {
        throw new Error(
            "Environment variables NEXT_PUBLIC_API_ENDPOINT_GET and NEXT_PUBLIC_API_ENDPOINT_POST must be defined."
        );
    }

    return {apiGet, apiPost}

}