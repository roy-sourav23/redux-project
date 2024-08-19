import axios from "axios";

import BASE_URL from "../api/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
