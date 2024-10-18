import { useQuery } from '@tanstack/react-query'

import { getCarRegisterById } from '@/utils/get-car-register-by-id'

function useCarRegisterById({ id }: { id: number }) {
  const { data: carRegister } = useQuery({
    queryKey: ['car-register', id],
    queryFn: () => getCarRegisterById({ id }),
  })

  return { carRegister }
}

export { useCarRegisterById }
