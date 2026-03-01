import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const ServerApiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default ServerApiClient;
