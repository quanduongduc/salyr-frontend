import { Price } from "src/types";
export const getURL = () => {
    let url =
        process.env.API_URL ? process.env.API_URL : "localhost:3000";
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
};

export const postData = async ({
    url,
    data
}: {
    url: string;
    data?: { price: Price };
}) => {
    console.log('posting,', url, data);

    const res: Response = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log('Error in postData', { url, data, res });

        throw Error(res.statusText);
    }

    return res.json();
};

export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
    t.setSeconds(secs);
    return t;
};