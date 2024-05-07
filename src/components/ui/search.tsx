import { CiSearch } from 'react-icons/ci'
import Button from './button'
import InputField from './input-field'


export default function Search() {
  return (
    <div className='flex items-center border rounded focus-within:ring-1 focus-within:ring-primary px-2 dark:border-gray-800 bg-white dark:bg-black'>
        <InputField type="text" className='focus:ring-0 border-none focus:placeholder:text-primary dark:bg-black' placeholder='Search' />
        <Button className='h-full min-w-0'><CiSearch /></Button>
    </div>
  )
}
