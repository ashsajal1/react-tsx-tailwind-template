import { Outlet } from 'react-router-dom'
import Navbar from '../components/partials/navbar'
import Footer from '../components/partials/footer'
export default function RootLayout() {
    return (
        <>
            <Navbar />
            <main>
            <Outlet />
            </main>
            <Footer />
        </>
    )
}
