/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateCarRegister } from './use-create-car-register'

const carRegisterFormSchema = z.object({
  first_name: z.string().min(1, 'Insert a first name'),
  last_name: z.string().min(1, 'Insert a last name'),
  email: z.string().email('Insert a valid email'),
  car_plate: z
    .string()
    .regex(/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/, 'Insert a valid car plate'),
  car_vin: z.string(),
  car_make: z.string(),
  car_model: z.string(),
  car_model_year: z.coerce.number(),
})

export type CarRegisterFormType = z.infer<typeof carRegisterFormSchema>

function useCreateCarRegisterForm() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CarRegisterFormType>({
    resolver: zodResolver(carRegisterFormSchema),
  })

  const { createCarRegistetrFn } = useCreateCarRegister()

  function handleCreateNewCarRegister({
    first_name,
    last_name,
    email,
    car_plate,
    car_vin,
    car_make,
    car_model,
    car_model_year,
  }: CarRegisterFormType) {
    createCarRegistetrFn({
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

export { useCreateCarRegisterForm }
