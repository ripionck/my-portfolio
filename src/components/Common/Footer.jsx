import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="p-4">
        <div className="w-full flex flex-col items-center justify-around border-t py-8  md:flex-row">
          <p className="mb-4 text-center text-gray-500 font-normal md:mb-0">
            &copy; {currentYear} Ripion Chakma. All Rights Reserved.
          </p>
          <div>
            <h2 className="text-gray-600 text-center text-xl">Find Me</h2>
            <hr />
            <div className="flex lg:space-x-4 md:space-x-4 space-x-2 mt-2">
              <a className="text-4xl " href="https://twitter.com/RipionC">
                <Twitter className="bg-gray-100 rounded-full p-1.5 text-sky-500" />
              </a>
              <a
                className="text-4xl"
                href="https://www.linkedin.com/in/ripionck/"
              >
                <Linkedin className="bg-gray-100 rounded-full p-1.5 text-sky-900" />
              </a>
              <a className="text-4xl" href="https://github.com/ripionck">
                <Github className="bg-gray-100 rounded-full p-1.5 text-black" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
