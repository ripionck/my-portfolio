import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/theme-context';
import Footer from './Footer';
import Navbar from './Navbar';

AOS.init();

const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`md:px-24 px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
