import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="p-4  bg-black">
        <div className="w-full flex flex-col items-center justify-around border-t py-8  md:flex-row">
          <p className="mb-4 text-center text-white font-normal md:mb-0">
            &copy; {currentYear} Ripion Chakma. All Rights Reserved.
          </p>
          <div>
            <h2 className="text-white text-center">Follow Me</h2>
            <hr />
            <div className="flex lg:space-x-4 md:space-x-4 space-x-2 mt-2">
              <a
                className="lg:text-2xl md:text-2xl text-xl text-gray-500"
                href="https://www.facebook.com"
              >
                <FaFacebookSquare />
              </a>
              <a
                className="lg:text-2xl md:text-2xl text-xl text-gray-500"
                href="https://www.instagram.com"
              >
                <FaInstagramSquare />
              </a>
              <a
                className="lg:text-2xl md:text-2xl text-xl text-gray-500"
                href="https://www.linkedin.com"
              >
                <FaLinkedin />
              </a>
              <a
                className="lg:text-2xl md:text-2xl text-xl text-gray-500"
                href="https://www.youtube.com"
              >
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
