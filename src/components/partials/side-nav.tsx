import Button from '../ui/button'
import Search from '../ui/search'
import Text from './../ui/text'
export default function SideNav() {
    return (
        <nav className='fixed left-0 w-1/2 z-20 top-0 max-h-screen bg-white border p-3'>
            <Text className='text-xl font-bold' label='Logo' />

            <div className='flex flex-col gap-2 mt-4'>
                <Search />
                <Button className='w-full'>Login</Button>
                <Button className='w-full'>Sign up</Button>
            </div>
        </nav>
    )
}
