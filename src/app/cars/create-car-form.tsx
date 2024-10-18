import { Button } from '@/components/ui/button'
import {
  CarRegisterFormType,
  useCreateCarRegisterForm,
} from '@/hooks/use-create-car-register-form'

import { CreateCarInput } from './create-car-input'

const carFields: (keyof CarRegisterFormType)[] = [
  'first_name',
  'last_name',
  'email',
  'car_plate',
  'car_vin',
  'car_make',
  'car_model',
  'car_model_year',
]

function CreateCarForm() {
  const { register, handleSubmit, handleCreateNewCarRegister, errors } =
    useCreateCarRegisterForm()

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
        Register
      </Button>
    </form>
  )
}

export { CreateCarForm }
