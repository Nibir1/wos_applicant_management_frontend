import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SessionRootRedirect } from '@/session';
import ErrorPage from './ErrorPage';
import RootLayout from './RootLayout';

import applicationRoutes from './routes';

/**
 * The master router object defining all the routes available.
 */
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: applicationRoutes,
      },
      {
        index: true,
        element: <SessionRootRedirect />,
      }
    ],
  }
]);

/**
 * Implements the `RouterProvider` to display the correct routes
 * 
 * @returns Router provider
 */
export default function Router() {
  return <RouterProvider router={browserRouter} />;
}