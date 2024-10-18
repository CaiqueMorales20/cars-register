/* eslint-disable camelcase */
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { ICarRegister } from '@/types/car-register'
import { updateCarRegisterFirstName } from '@/utils/update-car-register-first-name'

function useUpdateCarRegisterFirstName() {
  const { mutateAsync: updateCarRegisterFirstNameFn } = useMutation({
    mutationKey: ['update-car-register'],
    mutationFn: ({ id, first_name }: Pick<ICarRegister, 'id' | 'first_name'>) =>
      updateCarRegisterFirstName({
        id,
        first_name,
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

  return { updateCarRegisterFirstNameFn }
}

export { useUpdateCarRegisterFirstName }
