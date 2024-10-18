import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { queryClient } from '@/lib/query'
import { ICarRegister } from '@/types/car-register'
import { deleteCarRegister } from '@/utils/delete-car-register'

function useDeleteCarRegister() {
  const { mutateAsync: deleteCarRegisterFn } = useMutation({
    mutationKey: ['delete-car-register'],
    mutationFn: ({ id }: { id: number }) => deleteCarRegister({ id }),
    onSuccess(_, { id }) {
      const cached = queryClient.getQueryData<ICarRegister[]>([
        'cars-registers',
      ])

      console.log(cached)

      if (cached) {
        queryClient.setQueryData<ICarRegister[]>(
          ['cars-registers'],
          cached.filter((carRegister) => carRegister.id !== id),
        )
      }

      toast.success('Car register deleted')
    },
    onError() {
      toast.error('Error deleting car register')
    },
  })

  return { deleteCarRegisterFn }
}

export { useDeleteCarRegister }
