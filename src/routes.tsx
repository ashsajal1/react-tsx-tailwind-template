import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './pages/Layout';
import NotFound from './pages/not-found';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import PrivateRoute from './pages/private-route';
import Dashboard from './pages/dashboard';
import Pricing from './pages/pricing';
import Features from './pages/features';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Docs from './pages/docs';
import ErrorPage from './pages/error';

export const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
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
                path:'/pricing',
                element: <Pricing />
            },
            {
                path:'/features',
                element: <Features />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/blog',
                element: <Blog />
            },
            {
                path:'/docs',
                element: <Docs />
            },
            {
                path:'*',
                element: <NotFound />
            },
            {
                path:'',
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    }
                ]
            },
        ]
    }
])