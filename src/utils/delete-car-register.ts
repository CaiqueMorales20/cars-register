import { api } from '@/lib/axios'
import { ICarRegister } from '@/types/car-register'

async function deleteCarRegister({ id }: Pick<ICarRegister, 'id'>) {
  const { data } = await api.delete(`/cars/${id}`)

  return data
}

export { deleteCarRegister }
