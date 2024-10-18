import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'X-API-Key': process.env.NEXT_PUBLIC_SK,
  },
})

export { api }
