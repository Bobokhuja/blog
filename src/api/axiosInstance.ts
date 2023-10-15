import axios from 'axios'
import.meta.env

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
})