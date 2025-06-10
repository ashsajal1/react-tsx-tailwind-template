import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import ToastNotification from './components/ui/toast';
import { FeatureFlagsProvider } from './contexts/FeatureFlagsContext';

export default function App() {
  return (
    <FeatureFlagsProvider>
      <RouterProvider router={router} />
      <ToastNotification />
    </FeatureFlagsProvider>
  )
}
