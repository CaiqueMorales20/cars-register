/* eslint-disable camelcase */
import { api } from '@/lib/axios'
import { ICarRegister } from '@/types/car-register'

async function updateCarRegister({
  id,
  first_name,
  last_name,
  email,
  car_plate,
  car_vin,
  car_make,
  car_model,
  car_model_year,
}: ICarRegister) {
  const { data } = await api.put(`/cars/${id}`, {
    first_name,
    last_name,
    email,
    car_plate,
    car_vin,
    car_make,
    car_model,
    car_model_year,
  })

  return data
}

export { updateCarRegister }
