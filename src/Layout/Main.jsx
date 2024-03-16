import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
