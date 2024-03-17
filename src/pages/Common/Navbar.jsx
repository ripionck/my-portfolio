import { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../../Layout/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/SyQZbFF/R.png"
            className="h-12 w-12"
            alt="R Logo"
          />
          <div className="flex md:hidden">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <IoMenu className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow">
          <div
            className="items-center hidden md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-row space-x-8">
              <li>
                <a
                  href="#"
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
                  href="#"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
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
                  href="#"
                  className={`block ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } transition-colors duration-200 hover:text-blue-500`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-3">
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
