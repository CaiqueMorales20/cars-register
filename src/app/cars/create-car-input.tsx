import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formatLabel } from '@/utils/format-label'

function CreateCarInput({ name }: { name: string }) {
  return (
    <div className="mx-1 space-y-2">
      <Label htmlFor={name}>{formatLabel(name)}</Label>
      <Input id={name} name={name} placeholder={`${formatLabel(name)}...`} />
    </div>
  )
}

export { CreateCarInput }
