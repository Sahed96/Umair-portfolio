import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
