import { api } from '@/lib/axios'

async function getCarRegisterById({ id }: { id: number }) {
  const { data } = await api.get(`/cars/${id}`)

  return data
}

export { getCarRegisterById }
