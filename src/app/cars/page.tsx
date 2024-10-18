import { getAllCarsRegisters } from '@/utils/get-all-cars-registers'

import { CarsHeader } from './cars-header'
import { CarsTable } from './cars-table'

export default async function Cars() {
  const cars = await getAllCarsRegisters()

  console.log(cars)

  return (
    <main className="container-c pb-20">
      <CarsHeader />

      <CarsTable />
    </main>
  )
}
