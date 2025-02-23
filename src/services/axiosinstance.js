import axios from "axios";

export const a = axios.create({
  baseURL: 'https://notes228.pythonanywhere.com/api/v1/'
})
