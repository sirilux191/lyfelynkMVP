import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NotFoundContent from './NotFoundPage';
import FirstPageContent from './onboarding/FirstPage';
import RegisterPageContent from './onboarding/RegisterPage';
import RegisteredContent from './onboarding/RegisteredPage';
import MarketplaceContent from './App/Marketplace';
import DashboardContent from './App/Dashboard';
import MyHealthContent from './App/MyHealth';
import ProfileContent from './App/Profile';
import UploadContent from './App/sub/UploadPage';
import ShareContent from './App/sub/SharePage';

const router = createBrowserRouter([
  {
  path: '/',
  element: <FirstPageContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/Health-User',
  element: <RegisterPageContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/Health-User/Register',
  element: <RegisteredContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/Home',
  element: <DashboardContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/MyHealth',
  element: <MyHealthContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/Marketplace',
  element: <MarketplaceContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/Profile',
  element: <ProfileContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/MyHealth/Upload',
  element: <UploadContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/App/MyHealth/Share',
  element: <ShareContent/>,
  errorElement:<NotFoundContent/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
