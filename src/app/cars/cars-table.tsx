import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function CarsTable() {
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
        {Array.from({ length: 8 }).map((product, i) => (
          <TableRow key={i}>
            <TableCell className="text-foreground/90">Fulano</TableCell>
            <TableCell className="text-foreground/90">de Tal</TableCell>
            <TableCell className="text-foreground/90">
              fulano@email.com.br
            </TableCell>
            <TableCell className="text-foreground/90">FAG9B88</TableCell>
            <TableCell className="text-foreground/90">
              5UXWX9C52D0246778
            </TableCell>
            <TableCell className="text-foreground/90">Chevrolet</TableCell>
            <TableCell className="text-foreground/90">Onix 1.4 LTZ</TableCell>
            <TableCell className="text-foreground/90">2019</TableCell>
            <TableCell>
              <Button variant={'secondary'}>Update</Button>
            </TableCell>
            <TableCell>
              <Button variant={'destructive'}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { CarsTable }
