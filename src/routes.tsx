import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './pages/Layout';
import NotFound from './pages/not-found';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';

export const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
            {
                path:'*',
                element: <NotFound />
            },
        ]
    }
])