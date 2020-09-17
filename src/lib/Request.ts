import "cross-fetch/polyfill";
import { Auth } from "./Auth";

const baseUrl = "https://api.bartop.xyz";

export async function request(
  endpoint: string, data: object = {}, method: "POST" | "GET" | "PUT"| "DELETE" = "GET",
) {
  let url: string = `${baseUrl}/${endpoint}`;
  const requestOptions: RequestInit = {
    headers: {
      Authorization: Auth.current.asHeader,
    },
    method,
  };

  if (Object.keys(data).length) {
    if (method.toUpperCase() === "GET") {
      url += "?" + Object.keys(data)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    } else {
      requestOptions.body = JSON.stringify(data);
    }
  }

  const response: Response = await fetch(url, requestOptions);
  return response.json();
}
