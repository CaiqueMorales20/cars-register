/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ICarRegister } from '@/types/car-register'

import { useUpdateCarRegister } from './use-update-car-register'

const carRegisterUpdateFormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email('Insert a valid email'),
  car_plate: z
    .string()
    .regex(/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/, 'Insert a valid car plate'),
  car_vin: z.string(),
  car_make: z.string(),
  car_model: z.string(),
  car_model_year: z.coerce.number(),
})

export type CarRegisterUpdateFormType = z.infer<
  typeof carRegisterUpdateFormSchema
>

function useUpdateCarRegisterForm({
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
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CarRegisterUpdateFormType>({
    resolver: zodResolver(carRegisterUpdateFormSchema),
    defaultValues: {
      first_name,
      last_name,
      email,
      car_plate,
      car_vin,
      car_make,
      car_model,
      car_model_year,
    },
  })

  const { updateCarRegisterFn } = useUpdateCarRegister()

  function handleCreateNewCarRegister({
    first_name,
    last_name,
    email,
    car_plate,
    car_vin,
    car_make,
    car_model,
    car_model_year,
  }: CarRegisterUpdateFormType) {
    updateCarRegisterFn({
      id,
      first_name,
      last_name,
      email,
      car_plate,
      car_vin,
      car_make,
      car_model,
      car_model_year,
    })
    reset()
  }

  return {
    register,
    watch,
    handleSubmit,
    reset,
    errors,
    control,
    handleCreateNewCarRegister,
  }
}

export { useUpdateCarRegisterForm }
