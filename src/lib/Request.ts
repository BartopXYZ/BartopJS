import { fetch } from 'cross-fetch';
import { Auth } from "./Auth";

const baseUrl = "https://api.bartop.xyz";

function getCookie(name) {
  if (document && document.cookie) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) {
      return match[2];
    }
  }
}

export async function request(
  endpoint: string, data: object = {}, method: "POST" | "GET" | "PUT"| "DELETE" = "GET",
) {
  let url: string = `${baseUrl}/${endpoint}`;
  const requestOptions: RequestInit = {
    credentials: "include",
    headers: {
      Authorization: Auth.current.asHeader,
    },
    method,
  };

  const xfa = getCookie("xfa");
  if (xfa) {
    requestOptions.headers["X-frontend-application"] = xfa;
  }

  if (Object.keys(data).length) {
    if (method.toUpperCase() === "GET") {
      url += "?" + Object.keys(data)
        .map((key: string) => {
          let d = data[key];
          if (Array.isArray(d)) {
            d = d.join(",");
          }
          return `${encodeURIComponent(key)}=${encodeURIComponent(d)}`;
        })
        .join("&");
    } else {
      requestOptions.body = JSON.stringify(data);
    }
  }

  const response: Response = await fetch(url, requestOptions);
  const rjson = await response.json();
  if (rjson.error) {
    throw new Error(rjson.error);
  }
  return rjson;
}
