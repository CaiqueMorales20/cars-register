'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCarRegisterById } from '@/hooks/use-car-register-by-id'
import { ICarRegister } from '@/types/car-register'

import { UpdateCarRegisterForm } from './update-car-register-form'
import { UpdateCarRegisterQuickForm } from './update-car-register-quick-form'

function UpdateCarRegisterModal({ id }: Pick<ICarRegister, 'id'>) {
  const [updateChoice, setUpdateChoide] = useState<'quick' | 'full' | ''>('')
  const { carRegister } = useCarRegisterById({ id })

  return (
    <DialogContent className="max-h-[90vh] overflow-auto">
      <DialogTitle>Update a car</DialogTitle>
      <DialogDescription className="sr-only">
        Modal for creating a car
      </DialogDescription>

      <div className="flex gap-4">
        <Button onClick={() => setUpdateChoide('quick')} size={'sm'}>
          Quick
        </Button>
        <Button onClick={() => setUpdateChoide('full')} size={'sm'}>
          Full
        </Button>
      </div>

      {updateChoice === 'full' ? (
        <UpdateCarRegisterForm register={carRegister} />
      ) : (
        <></>
      )}

      {updateChoice === 'quick' ? (
        <UpdateCarRegisterQuickForm register={carRegister} />
      ) : (
        <></>
      )}
    </DialogContent>
  )
}

export { UpdateCarRegisterModal }
