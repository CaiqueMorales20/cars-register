/* eslint-disable camelcase */
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ICarRegister } from '@/types/car-register'

function CarsTable({ carsRegisters }: { carsRegisters: ICarRegister[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">First Name</TableHead>
          <TableHead className="">Last Name</TableHead>
          <TableHead className="">Email</TableHead>
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
        {carsRegisters?.map(
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
              <TableCell className="text-foreground/90">{first_name}</TableCell>
              <TableCell className="text-foreground/90">{last_name}</TableCell>
              <TableCell className="text-foreground/90">{email}</TableCell>
              <TableCell className="text-foreground/90">{car_plate}</TableCell>
              <TableCell className="text-foreground/90">{car_vin}</TableCell>
              <TableCell className="text-foreground/90">{car_make}</TableCell>
              <TableCell className="text-foreground/90">{car_model}</TableCell>
              <TableCell className="text-foreground/90">
                {car_model_year}
              </TableCell>
              <TableCell>
                <Button variant={'secondary'}>Update</Button>
              </TableCell>
              <TableCell>
                <Button variant={'destructive'}>Delete</Button>
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  )
}

export { CarsTable }
