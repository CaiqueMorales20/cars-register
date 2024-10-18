import { api } from '@/lib/axios'

async function getAllCarsRegisters() {
  const { data } = await api.get('/cars')

  return data
}

export { getAllCarsRegisters }
