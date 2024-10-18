/* eslint-disable camelcase */
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { ICarRegister } from '@/types/car-register'
import { createCarRegister } from '@/utils/create-car-register'

function useCreateCarRegister() {
  const { mutateAsync: createCarRegistetrFn } = useMutation({
    mutationKey: ['create-car-register'],
    mutationFn: ({
      first_name,
      last_name,
      email,
      car_plate,
      car_vin,
      car_make,
      car_model,
      car_model_year,
    }: Omit<ICarRegister, 'id'>) =>
      createCarRegister({
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
      const cached = queryClient.getQueryData<ICarRegister[]>(['car-registers'])

      if (cached) {
        queryClient.setQueryData<ICarRegister[]>(
          ['car-registers'],
          [
            ...cached,
            {
              id,
              first_name,
              last_name,
              email,
              car_plate,
              car_vin,
              car_make,
              car_model,
              car_model_year,
            },
          ],
        )
      }
    },
  })

  return { createCarRegistetrFn }
}

export { useCreateCarRegister }
