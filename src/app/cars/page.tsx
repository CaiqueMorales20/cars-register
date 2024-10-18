'use client'

import { useCarsRegisters } from '@/hooks/use-cars-registers'

import { CarsHeader } from './cars-header'
import { CarsTable } from './cars-table'

export default function Cars() {
  const { carsRegisters } = useCarsRegisters()

  return (
    <main className="container-c pb-20">
      <CarsHeader />

      <CarsTable carsRegisters={carsRegisters} />
    </main>
  )
}
