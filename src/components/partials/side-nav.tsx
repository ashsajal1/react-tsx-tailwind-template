import Button from '../ui/button'
import ModeToggle from '../ui/mode-toggle'
import Search from '../ui/search'
import Text from './../ui/text'
import { HiOutlineXMark } from "react-icons/hi2";
export default function SideNav({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) {

    if (!isOpen) return <></>

    return (
        <nav className='fixed inset-0 left-0 w-1/2 z-20 top-0 max-h-screen h-full bg-white border dark:border-gray-800 p-3 dark:bg-black'>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='flex items-center justify-between'>
                <Text className='text-xl font-bold' label='Logo' />
                <HiOutlineXMark onClick={handleClose} className='h-6 w-6' />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <Search />
                <Button className='w-full'>Login</Button>
                <Button className='w-full'>Sign up</Button>
            </div>

            <div className='bottom-0 absolute left-0'>
                <ModeToggle />
            </div>
        </nav>
    )
}
