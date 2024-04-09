import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardContent from './Pages/Dashboard';
import MyHealthContent from './Pages/MyHealth';
import MarketplaceContent from './Pages/Marketplace';
import ProfileContent from './Pages/Profile';
import ShareContent from './sub/SharePage';
import UploadContent from './sub/UploadPage';
import NotFoundPage from './NotFoundPage';

export default function AppRoute3() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<DashboardContent/>} />
        <Route path="/MyHealth" element={<MyHealthContent/>} />
        <Route path="/MyHealth">
          <Route path="/MyHealth/Share" element={<ShareContent/>} />
          <Route path="/MyHealth/Upload" element={<UploadContent/>} />
        </Route>
        <Route path="/Marketplace" element={<MarketplaceContent/>} />
        <Route path="/Profile" element={<ProfileContent/>} />

        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}