import axios from "axios";

const BaseURL= 'https://jsonplaceholder.typicode.com'

export const placeholderApi = axios.create({baseURL:BaseURL})


