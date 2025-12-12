import { Outlet } from 'react-router-dom';
import Navbar from './component/์Navbar';
const Layout = () => {
  return (
    <div className="min-h-screen bg-green-200">

      <Navbar />


      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;