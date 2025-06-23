// AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './page/Landing';
import ErrorPage from './component/Error';
import IsiDataUser from './page/IsiDataUser';
import DashboardUser from './page/user/DashboardUsers';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Layout from './component/Layout';
import PageUser from './page/user/PageUser';
import PropertyDetail from './component/PropertyDetail';

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />, // layout with nav/header
    errorElement: <ErrorPage />, // fallback error UI
    children: [
      { path: '/', element: <PageUser /> },
      {
        path: '/isi-data',
        element: (
          <ProtectedRoute>
            <IsiDataUser />
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard-user',
        element: (
          <ProtectedRoute>
            <DashboardUser />
          </ProtectedRoute>
        ),
      },
      {
        path: '/detail-properti',
        element: (
          <ProtectedRoute>
            <PropertyDetail />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
