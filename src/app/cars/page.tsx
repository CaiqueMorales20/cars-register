import { CarsHeader } from './cars-header'
import { CarsTable } from './cars-table'

export default function Cars() {
  return (
    <main className="container-c pb-20">
      <CarsHeader />

      <CarsTable />
    </main>
  )
}
