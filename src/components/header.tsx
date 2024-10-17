import { Car } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
import { ThemeToggle } from './ui/theme-toggle'

function Header() {
  return (
    <header className="container-c flex h-20 items-center justify-between border-b border-b-muted">
      <div className="flex h-20 items-center gap-4">
        <Car />

        <Separator orientation="vertical" className="h-[60%]" />

        <nav className="flex gap-6">
          <NavLink to="/cars">Cars</NavLink>
        </nav>
      </div>

      <ThemeToggle />
    </header>
  )
}

export { Header }
