/* eslint-disable camelcase */
import { Button } from '@/components/ui/button'
import {
  CarRegisterUpdateFormType,
  useUpdateCarRegisterForm,
} from '@/hooks/use-update-car-register-form'
import { ICarRegister } from '@/types/car-register'

import { CreateCarInput } from './create-car-input'

const carFields: (keyof CarRegisterUpdateFormType)[] = [
  'first_name',
  'last_name',
  'email',
  'car_plate',
  'car_vin',
  'car_make',
  'car_model',
  'car_model_year',
]

function UpdateCarRegisterForm({
  register: {
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
}: {
  register: ICarRegister
}) {
  const { register, handleSubmit, handleCreateNewCarRegister, errors } =
    useUpdateCarRegisterForm({
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

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewCarRegister)}
      className="flex flex-col gap-4 overflow-y-auto"
    >
      {carFields.map((field) => (
        <CreateCarInput
          key={field}
          name={field}
          register={register}
          error={errors[field]}
        />
      ))}

      <Button type="submit" className="mx-1 w-max">
        Update
      </Button>
    </form>
  )
}

export { UpdateCarRegisterForm }
