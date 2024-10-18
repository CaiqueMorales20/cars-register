/* eslint-disable camelcase */
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { ICarRegister } from '@/types/car-register'
import { updateCarRegister } from '@/utils/update-car-register'

function useUpdateCarRegister() {
  const { mutateAsync: updateCarRegisterFn } = useMutation({
    mutationKey: ['update-car-register'],
    mutationFn: ({
      id,
      first_name,
      last_name,
      email,
      car_plate,
      car_vin,
      car_make,
      car_model,
      car_model_year,
    }: ICarRegister) =>
      updateCarRegister({
        id,
        first_name,
        last_name,
        email,
        car_plate,
        car_vin,
        car_make,
        car_model,
        car_model_year,
      }),
    onSuccess({
      id,
      first_name,
      last_name,
      email,
      car_plate,
      car_vin,
      car_make,
      car_model,
      car_model_year,
    }) {
      const cached = queryClient.getQueryData<ICarRegister>([
        'car-register',
        id,
      ])

      if (cached) {
        queryClient.setQueryData<ICarRegister>(['car-register', id], {
          ...cached,
          first_name,
          last_name,
          email,
          car_plate,
          car_vin,
          car_make,
          car_model,
          car_model_year,
        })
      }
    },
  })

  return { updateCarRegisterFn }
}

export { useUpdateCarRegister }
