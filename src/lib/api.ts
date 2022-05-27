import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://widget-feedback-production-0b56.up.railway.app',
})