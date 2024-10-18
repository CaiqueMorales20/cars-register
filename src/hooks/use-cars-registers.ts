import { useQuery } from '@tanstack/react-query'

import { ICarRegister } from '@/types/car-register'
import { getAllCarsRegisters } from '@/utils/get-all-cars-registers'

function useCarsRegisters() {
  const { data: carsRegisters } = useQuery({
    queryKey: ['cars-registers'],
    queryFn: () => getAllCarsRegisters(),
  })

  return { carsRegisters } as { carsRegisters: ICarRegister[] }
}

export { useCarsRegisters }
