/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ICarRegister } from '@/types/car-register'

import { useUpdateCarRegisterFirstName } from './use-update-car-register-first-name'

const carRegisterUpdateFirstNameFormSchema = z.object({
  first_name: z.string(),
})

export type CarRegisterUpdateFirstNameFormType = z.infer<
  typeof carRegisterUpdateFirstNameFormSchema
>

function useUpdateCarRegisterFirstNameForm({
  id,
  first_name,
}: Pick<ICarRegister, 'id' | 'first_name'>) {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CarRegisterUpdateFirstNameFormType>({
    resolver: zodResolver(carRegisterUpdateFirstNameFormSchema),
    defaultValues: {
      first_name,
    },
  })

  const { updateCarRegisterFirstNameFn } = useUpdateCarRegisterFirstName()

  function handleUpdateCarRegisterFirstName({
    first_name,
  }: CarRegisterUpdateFirstNameFormType) {
    updateCarRegisterFirstNameFn({
      id,
      first_name,
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
    handleUpdateCarRegisterFirstName,
  }
}

export { useUpdateCarRegisterFirstNameForm }
