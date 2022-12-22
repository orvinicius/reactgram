import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const uploads = "https://mighty-badlands-34661.herokuapp.com/uploads";

export default api;

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      mode: "no-cors",
      method,
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      mode: "no-cors",
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
    };
  } else {
    config = {
      mode: "no-cors",
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
