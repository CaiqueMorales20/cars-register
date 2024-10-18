/* eslint-disable camelcase */
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useDeleteCarRegister } from '@/hooks/use-delete-car-register'
import { ICarRegister } from '@/types/car-register'

import { CarsTableBodySkeleton } from './cars-table-body-skeleton'
import { UpdateCarRegisterModal } from './update-car-register-modal'

function CarsTable({ carsRegisters }: { carsRegisters: ICarRegister[] }) {
  const { deleteCarRegisterFn } = useDeleteCarRegister()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">First Name</TableHead>
          <TableHead className="">Last Name</TableHead>
          <TableHead className="w-16">Email</TableHead>
          <TableHead className="">Car Plate</TableHead>
          <TableHead className="">Car Vin</TableHead>
          <TableHead className="">Car Make</TableHead>
          <TableHead className="">Car Model</TableHead>
          <TableHead className="">Car Model Year</TableHead>
          <TableHead className="w-20"></TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {carsRegisters ? (
          carsRegisters.map(
            ({
              id,
              first_name,
              last_name,
              email,
              car_plate,
              car_vin,
              car_make,
              car_model,
              car_model_year,
            }) => (
              <TableRow key={id}>
                <TableCell className="text-foreground/90">
                  {first_name}
                </TableCell>
                <TableCell className="text-foreground/90">
                  {last_name}
                </TableCell>
                <TableCell className="text-foreground/90">{email}</TableCell>
                <TableCell className="text-foreground/90">
                  {car_plate}
                </TableCell>
                <TableCell className="text-foreground/90">{car_vin}</TableCell>
                <TableCell className="text-foreground/90">{car_make}</TableCell>
                <TableCell className="text-foreground/90">
                  {car_model}
                </TableCell>
                <TableCell className="text-foreground/90">
                  {car_model_year === 0 ? '' : car_model_year}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={'secondary'}>Update</Button>
                    </DialogTrigger>

                    <UpdateCarRegisterModal id={id} />
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => deleteCarRegisterFn({ id })}
                    variant={'destructive'}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ),
          )
        ) : (
          <CarsTableBodySkeleton />
        )}
      </TableBody>
    </Table>
  )
}

export { CarsTable }
