import axios from "axios";

const BASE_URL = `https://openexchangerates.org/api/`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });
};
