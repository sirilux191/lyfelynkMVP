import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NotFoundContent from './NotFoundPage';
import FirstPageContent from './onboarding/FirstPage';
import RegisteredContent from './onboarding/RegisteredPage';
import MarketplaceContent from './HealthUser/App/Marketplace';
import DashboardContent from './HealthUser/App/Dashboard';
import MyHealthContent from './HealthUser/App/MyHealth';
import ProfileContent from './HealthUser/App/Profile';
import UploadContent from './HealthUser/App/sub/UploadPage';
import ShareContent from './HealthUser/App/sub/SharePage';
import RegisterPage1Content from './onboarding/RegisterPage/RegisterPage1';
import RegisterPage2Content from './onboarding/RegisterPage/RegisterPage2';
import RegisterPage3Content from './onboarding/RegisterPage/RegisterPage3';
import { ThemeProvider } from "@/components/theme-provider"; // Importing the ThemeProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPageContent/>,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-User',
    element: <RegisterPage1Content />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-Professional',
    element: <RegisterPage2Content />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-Service',
    element: <RegisterPage3Content />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-User/Register',
    element: <RegisteredContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-Professional/Register',
    element: <RegisteredContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/Health-Service/Register',
    element: <RegisteredContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/Home',
    element: <DashboardContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/MyHealth',
    element: <MyHealthContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/Marketplace',
    element: <MarketplaceContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/Profile',
    element: <ProfileContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/MyHealth/Upload',
    element: <UploadContent />,
    errorElement: <NotFoundContent />
  },
  {
    path: '/App/MyHealth/Share',
    element: <ShareContent />,
    errorElement: <NotFoundContent />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
