import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

const getURL = () => {
    let url =
        process.env.API_URL ? process.env.API_URL : "http://localhost:8000";
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
};

export const postData = async ({
    url,
    data,
    contentType
}: {
    url: string;
    data?: any;
    contentType?: string;
}) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': contentType ? contentType : 'application/json'
            }
        });

        return response.data;
    } catch (error: any) {
        console.log('Error in postData', { url, data, error });

        throw error
    }
};

export const getData = async (url: string) => {
    console.log('fetching:', url);

    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error: any) {
        console.log('Error in getData', { url, error });

        throw error
    }
};

export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
    t.setSeconds(secs);
    return t;
};

type ErrorResponse = {
    detail: string
}

export const resolveResponseError = (error: any) => {
    if (axios.isAxiosError(error)) {
        // Handle Axios specific errors
        const axiosError: AxiosError<ErrorResponse> = error
        if (axiosError.response) {
            if (Array.isArray(axiosError.response.data.detail)) {
                toast.error(axiosError.response.data.detail[0].msg);
            } else {
                toast.error(axiosError.response.data.detail);
            }
        }
    } else {
        toast.error(error.message)
    }

}

export const API_URL = getURL()