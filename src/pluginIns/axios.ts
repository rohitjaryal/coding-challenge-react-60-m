import axios from "axios";

const BASE_URL = "https://api.openai.com";
const API_KEY = "insert key here";

export const fetchRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${API_KEY}` },
});
