import axios from "axios";
import {BASE_URL, REQUEST_TIMEOUT} from "../const";

export const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });
};
