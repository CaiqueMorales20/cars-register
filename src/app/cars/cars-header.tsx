import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CreateCarModal } from './create-car-modal'

function CarsHeader() {
  return (
    <header className="mb-12 mt-20 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Cars and Owners</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Add car <Plus className="ml-1" size={16} />
          </Button>
        </DialogTrigger>

        <CreateCarModal />
      </Dialog>
    </header>
  )
}

export { CarsHeader }
// <Dialog open={createProductModalOpened} onOpenChange={handleProductModal}>
//   <DialogTrigger asChild>
//     <Button onClick={() => handleProductModal()}>
//       Add Product <Plus className="ml-1" size={16} />
//     </Button>
//   </DialogTrigger>

//   <CreateProductModal handleModal={() => handleProductModal()} />
// </Dialog>
