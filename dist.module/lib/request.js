import "cross-fetch/polyfill";
import { Auth } from "./Auth";
const baseUrl = "https://api.bartop.xyz";
export async function request(endpoint, data = {}, method = "GET") {
    let url = `${baseUrl}/${endpoint}`;
    const requestOptions = {
        headers: {
            Authorization: Auth.current.asHeader,
        },
        method,
    };
    if (Object.keys(data).length) {
        if (method.toUpperCase() === "GET") {
            url += "?" + Object.keys(data)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join("&");
        }
        else {
            requestOptions.body = JSON.stringify(data);
        }
    }
    const response = await fetch(url, requestOptions);
    return response.json();
}
