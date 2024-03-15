import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardContent from './Dashboard';
import MyHealthContent from './MyHealth';
import MarketplaceContent from './Marketplace';
import ProfileContent from './Profile';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/App/Home" element={<DashboardContent/>} />
        <Route path="/App/MyHealth" element={<MyHealthContent />} />
        <Route path="/App/Marketplace" element={<MarketplaceContent />} />
        <Route path="/App/Profile" element={<ProfileContent />} />
      </Routes>
    </Router>
  );
}

export default App;
