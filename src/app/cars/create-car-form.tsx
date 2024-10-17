import { Button } from '@/components/ui/button'

import { CreateCarInput } from './create-car-input'

const carFields = [
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
  return (
    <form className="flex flex-col gap-4 overflow-y-auto">
      {carFields.map((field) => (
        <CreateCarInput key={field} name={field} />
      ))}

      <Button className="w-max">Register</Button>
    </form>
  )
}

export { CreateCarForm }
