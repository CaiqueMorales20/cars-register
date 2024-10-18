/* eslint-disable camelcase */
import { api } from '@/lib/axios'
import { ICarRegister } from '@/types/car-register'

async function createCarRegister({
  first_name,
  last_name,
  email,
  car_plate,
  car_vin,
  car_make,
  car_model,
  car_model_year,
}: Omit<ICarRegister, 'id'>) {
  const { data } = await api.post(`/cars/`, {
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

export { createCarRegister }
