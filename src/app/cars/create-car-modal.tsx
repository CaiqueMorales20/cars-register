import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateCarForm } from './create-car-form'

function CreateCarModal() {
  return (
    <DialogContent className="max-h-[90vh] overflow-auto">
      <DialogTitle>Register a car</DialogTitle>
      <DialogDescription className="sr-only">
        Modal for creating a car
      </DialogDescription>

      <CreateCarForm />
    </DialogContent>
  )
}

export { CreateCarModal }
