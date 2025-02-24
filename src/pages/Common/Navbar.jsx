import { useContext, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { HiOutlineX } from 'react-icons/hi';
import { ThemeContext } from '../../Layout/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-(--breakpoint-xl) flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/SyQZbFF/R.png"
            className="h-12 w-12"
            alt="R Logo"
          />
        </div>

        <div className="flex items-center justify-center grow">
          <div
            className="items-center hidden md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-row space-x-8">
              <li>
                <a
                  href="/"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  BLOGS
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute text-center top-0 left-0 w-full bg-linear-to-b from-gray-600 to-gray-900 p-10 z-50">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-hidden"
            >
              <HiOutlineX className="text-2xl" />
            </button>
            {/* Dropdown Menu items */}
            <ul data-aos="fade-up-left" className="mx-auto">
              <li>
                <a
                  href="/"
                  onClick={closeDropdown}
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={closeDropdown}
                  href="#projects"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={closeDropdown}
                  href="#"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  onClick={closeDropdown}
                  href="#contact"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-center space-x-3">
          <div className="flex md:hidden">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:text-gray-100  focus:outline-hidden focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <IoMenu className="text-2xl" />
            </button>
          </div>
          <button onClick={toggleTheme}>
            {isDarkMode ? (
              <MdLightMode className="text-white text-xl" />
            ) : (
              <MdDarkMode />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
