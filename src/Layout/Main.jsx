import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from './ThemeContext';

AOS.init();

const Main = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`px-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
