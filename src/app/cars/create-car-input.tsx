import { FieldError, UseFormRegister } from 'react-hook-form'

import { FormError } from '@/components/form-error'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CarRegisterFormType } from '@/hooks/use-create-car-register-form'
import { formatLabel } from '@/utils/format-label'

function CreateCarInput({
  name,
  register,
  error,
}: {
  name: keyof CarRegisterFormType
  register: UseFormRegister<CarRegisterFormType>
  error: FieldError | undefined
}) {
  return (
    <div className="mx-1 space-y-2">
      <Label htmlFor={name}>{formatLabel(name)}</Label>
      <Input
        {...register(name)}
        id={name}
        name={name}
        placeholder={`${formatLabel(name)}...`}
      />
      <FormError error={error} />
    </div>
  )
}

export { CreateCarInput }
