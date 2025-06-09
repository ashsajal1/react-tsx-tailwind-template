import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
    return (
        <>
            <Seo title="404 | Page Not Found" description="The page you are looking for does not exist." />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-xl font-bold text-primary">404 : Page not found</h1>

                <div className="mt-4 flex items-center gap-2">
                    <Button onClick={() => window.history.back()}>Back</Button>
                    <Link to='/'>
                        <Button>Go to Home</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
