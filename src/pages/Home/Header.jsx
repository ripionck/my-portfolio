import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Header = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center py-8 px-4">
        {/* Left side */}
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <p className="flex items-center">
              <FaAngleLeft />
              Hello, World
              <FaAngleRight />
            </p>
            <p className="text-lg text-gray-600 mb-4">
              My name is Ripion Chakma. I&apos;m a Backend Developer from
              Bangladesh. My passion for clean code and problem-solving drives
              me to create seamless experiences for users, from the server to
              the screen.
            </p>
            <a className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Resume
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 md:pl-8">
          <img
            src="https://i.ibb.co/VJKPFq8/017083928.png"
            alt="Profile"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
