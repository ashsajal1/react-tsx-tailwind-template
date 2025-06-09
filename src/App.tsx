import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import ToastNotification from './components/ui/toast';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastNotification />
    </>
  )
}
