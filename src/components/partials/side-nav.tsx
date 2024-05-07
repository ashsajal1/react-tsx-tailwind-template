import { motion } from 'framer-motion';
import Button from '../ui/button'
import ModeToggle from '../ui/mode-toggle'
import Search from '../ui/search'
import Text from './../ui/text'
import { HiOutlineXMark } from "react-icons/hi2";

export default function SideNav({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 select-none bg-black opacity-50 z-10"
                onClick={handleClose}
            ></div>
            <motion.nav
                initial={{ width: '0', opacity: 0 }}
                // exit={{ width: '0', opacity: 0 }}
                transition={{
                    type: 'tween',
                    ease: "easeInOut", 
                    duration: 0.3,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                }}
                animate={isOpen ? { width: '50%', opacity: 1 } : { width: '0', opacity: 0 }}
                className='fixed inset-0 left-0 z-20 top-0 max-h-full h-full bg-white border dark:border-gray-800 p-3 dark:bg-black overflow-y-auto'

            >
                <div className='flex items-center justify-between'>
                    <Text className='text-xl font-bold' label='Logo' />
                    <HiOutlineXMark onClick={handleClose} className='h-6 w-6 dark:text-white text-black cursor-pointer' />
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                    <Search />
                    <Button className='w-full'>Login</Button>
                    <Button className='w-full'>Sign up</Button>
                </div>

                <div className='bottom-0 absolute left-0'>
                    <ModeToggle />
                </div>
            </motion.nav>
        </>
    )
}
