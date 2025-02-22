import { CiSearch } from 'react-icons/ci'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Search() {
  return (
    <div className='flex items-center justify-between gap-2'>
        <Input type="text" placeholder='Search' />
        <Button variant={'secondary'}><CiSearch /></Button>
    </div>
  )
}
