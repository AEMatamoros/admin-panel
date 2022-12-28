import axios from "axios";

const API = axios.create({
  baseURL:
    // "http://10.128.254.137:8080/modulo-administrador-voucher-BASA/api/txn/pagenumber/1/pagesize/1",
    "http://localhost:5175",
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
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user") || "{}").token
    }`;
  }
  return req;
});

export default API;
