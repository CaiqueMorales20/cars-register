import { useQuery } from '@tanstack/react-query'

import { ICarRegister } from '@/types/car-register'
import { getCarRegisterById } from '@/utils/get-car-register-by-id'

function useCarRegisterById({ id }: { id: number }) {
  const { data: carRegister } = useQuery({
    queryKey: ['car-register', id],
    queryFn: () => getCarRegisterById({ id }),
  })

  return { carRegister } as { carRegister: ICarRegister }
}

export { useCarRegisterById }
