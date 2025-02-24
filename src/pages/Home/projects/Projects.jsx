import { BiLogoPostgresql } from 'react-icons/bi';
import { FaAngleLeft, FaAngleRight, FaHtml5, FaReact } from 'react-icons/fa6';
import { SiDjango, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  return (
    <>
      <p
        id="projects"
        className="flex items-center justify-center text-xl text-gray-600 md:pt-16 mt-8 mb-6"
      >
        <FaAngleLeft />
        Projects
        <FaAngleRight />
      </p>
      <div className="flex flex-wrap justify-center gap-8 border-t border-b border-gray-400 py-12">
        <div
          className="w-full md:w-1/3 max-w-sm bg-white border border-gray-200 rounded-md shadow-sm pb-4"
          style={{ height: 'auto' }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="https://metro-express.onrender.com/">
            <img
              className="rounded-t-lg h-72 w-full object-cover"
              src="https://i.ibb.co/bNFf8y4/Metro-Express-Home.png"
              alt="Metro Express"
            />
          </a>
          <div className="flex justify-between items-center p-4">
            <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Metro Express
            </h5>
            <p className="flex space-x-2 text-2xl">
              <FaHtml5 className="bg-orange-700 rounded-full p-1 text-white" />
              <SiTailwindcss className="bg-gray-100 rounded-full p-1 text-sky-500" />
              <SiDjango className="bg-green-900 rounded-full p-1 text-white" />
              <BiLogoPostgresql className="bg-gray-100 rounded-full p-1 text-sky-900" />
            </p>
          </div>
          <div className="flex justify-between px-4">
            <a
              href="https://metro-express.onrender.com/"
              target="_blank"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-1 px-4 rounded-sm focus:outline-hidden focus:shadow-outline"
            >
              Live Link
            </a>
            <a
              href="/metro-express"
              className="border bg-linear-to-r from-purple-400 via-pink-500 to-red-500 hover:text-gray-100 py-1 px-4 rounded-sm focus:outline-hidden focus:shadow-outline"
            >
              Details
            </a>
          </div>
        </div>
        <div
          className="w-full md:w-1/3 max-w-sm bg-white border border-gray-200 rounded-md shadow-sm pb-4"
          style={{ height: 'auto' }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a href="https://e-lit-emporium.netlify.app/">
            <img
              className="rounded-t-lg h-72 w-full object-cover"
              src="https://i.ibb.co/6Hg3Qx2/E-Lit-Emporium.png"
              alt="E-Lit Emporium"
            />
          </a>
          <div className="flex justify-between items-center p-4">
            <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              E-Lit Emporium
            </h5>
            <p className="flex space-x-2 text-2xl">
              <FaReact className="bg-gray-100 rounded-full p-1 text-sky-400" />
              <SiTailwindcss className="bg-gray-100 rounded-full p-1 text-sky-500" />
              <img
                src="https://i.ibb.co/2Sqms5q/Django-REST.png"
                alt="REST Framework"
                className="w-12 h-6 bg-gray-100"
              />
              <BiLogoPostgresql className="bg-gray-100 rounded-full p-1 text-sky-900" />
            </p>
          </div>
          <div className="flex justify-between px-4">
            <a
              href="https://e-lit-emporium.netlify.app/"
              target="_blank"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-1 px-4 rounded-sm focus:outline-hidden focus:shadow-outline"
            >
              Live Link
            </a>
            <a
              href="/e-Lit_emporium"
              className="border bg-linear-to-r from-purple-400 via-pink-500 to-red-500 hover:text-gray-100 py-1 px-4 rounded-sm focus:outline-hidden focus:shadow-outline"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
