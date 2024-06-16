import { CiSearch } from 'react-icons/ci'
import InputField from './input-field'
import { Button } from '../ui/button'

export default function Search() {
  return (
    <div className='flex items-center justify-between border rounded focus-within:ring-1 focus-within:ring-primary px-2 dark:border-gray-800 bg-white dark:bg-black'>
        <InputField type="text" className='focus:ring-0 border-none focus:placeholder:text-primary dark:bg-black' placeholder='Search' />
        <Button className='h-full'><CiSearch /></Button>
    </div>
  )
}
