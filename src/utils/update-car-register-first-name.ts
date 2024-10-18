/* eslint-disable camelcase */
import { api } from '@/lib/axios'
import { ICarRegister } from '@/types/car-register'

async function updateCarRegisterFirstName({
  id,
  first_name,
}: Pick<ICarRegister, 'id' | 'first_name'>) {
  const { data } = await api.patch(`/cars/${id}`, {
    first_name,
  })

  return data
}

export { updateCarRegisterFirstName }
