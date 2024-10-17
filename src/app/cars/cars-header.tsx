import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

function CarsHeader() {
  return (
    <header className="mb-12 mt-20 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Cars and Owners</h1>
      <Button>
        Add car <Plus className="ml-1" size={16} />
      </Button>
    </header>
  )
}

export { CarsHeader }
