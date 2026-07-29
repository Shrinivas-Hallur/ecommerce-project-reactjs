import axios from "axios";

const API_URL = import.meta.env.PROD
  ? "https://ecommerce-backend-reactjs.onrender.com"
  : "";

const api = axios.create({
  baseURL: API_URL,
});

export default api;