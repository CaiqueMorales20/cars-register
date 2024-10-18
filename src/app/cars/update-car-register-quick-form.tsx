/* eslint-disable camelcase */
import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUpdateCarRegisterFirstNameForm } from '@/hooks/use-update-car-register-first-name-form'
import { ICarRegister } from '@/types/car-register'

function UpdateCarRegisterQuickForm({
  register: { id, first_name },
}: {
  register: ICarRegister
}) {
  const { register, handleSubmit, handleUpdateCarRegisterFirstName, errors } =
    useUpdateCarRegisterFirstNameForm({
      id,
      first_name,
    })

  return (
    <form
      onSubmit={handleSubmit(handleUpdateCarRegisterFirstName)}
      className="flex flex-col gap-4 overflow-y-auto"
    >
      <div className="px-1">
        <Label htmlFor={'first_name'}>First Name</Label>
        <Input
          {...register('first_name')}
          id={'first_name'}
          placeholder="First Name..."
        />
        <FormError error={errors.first_name} />
      </div>

      <Button type="submit" className="mx-1 w-max">
        Update
      </Button>
    </form>
  )
}

export { UpdateCarRegisterQuickForm }
