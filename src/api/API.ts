import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    get: {
      Accept: "application/json",
      "Content-Type": " application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
});

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("user") === null) {
    req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("portfolioadminpaneluser") || "{}").accessToken
      }`;
  }
  return req;
});

export default API;
