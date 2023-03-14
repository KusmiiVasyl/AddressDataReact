import axios from "axios";

export const api = axios.create({
    baseURL: "https://64048a123bdc59fa8f3b247f.mockapi.io/api"
})