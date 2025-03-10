import { ChevronFirst, ChevronLast } from 'lucide-react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaGitAlt, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa6';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { MdCss, MdPrivacyTip } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiCplusplus,
  SiDjango,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const SkillsSection = () => {
  return (
    <>
      <p className="flex justify-start items-center text-lg text-gray-500 mt-6">
        <ChevronFirst />
        <span className="mx-2"> Skills</span>
        <ChevronLast />
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center pt-8 px-4">
        <div
          className="md:w-1/2 md:ml-2 border-l-2 border-gray-400"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="md:text-left pl-4 md:pr-16">
            <p className="text-lg text-gray-500 mb-6">
              <b>Technical Skills :</b> Proficient in Python, JavaScript, and
              SQL, with expertise in backend frameworks (Django, Django REST
              Framework) and frontend tools (React, Bootstrap, Tailwind CSS).
              Experienced in version control (Git/GitHub) and API testing
              (Postman). Skilled in building scalable web solutions, ensuring
              robust server-side logic and seamless integration across
              full-stack environments.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Web Application Development</li>
              <li>API Design & Development</li>
              <li>Database Architecture & Management</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 pt-8 md:pt-0 px-4">
          <div
            className="flex gap-8 text-5xl "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <FaHtml5 className="bg-orange-700 rounded-full p-2 text-white" />
            <MdCss className="bg-blue-500 rounded-full p-2 text-white" />
            <SiTailwindcss className="bg-gray-100 rounded-full p-2 text-sky-500" />
            <RiJavascriptFill className="bg-gray-100 rounded-full p-2 text-yellow-600" />
            <FaReact className="bg-gray-100 rounded-full p-2 text-sky-400" />
          </div>
          <div
            className="flex gap-8 text-5xl my-6"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <SiCplusplus className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <FaPython className="bg-green-400 rounded-full p-2" />
            <SiDjango className="bg-green-900 rounded-full p-2 text-white" />
            <img
              src="https://i.ibb.co/2Sqms5q/Django-REST.png"
              alt="REST Framework"
              className="w-12 bg-gray-100 rounded-full p-2"
            />
            <TbSql className="bg-sky-700 rounded-full p-2 text-white" />
          </div>
          <div
            className="flex gap-8 text-5xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <SiMysql className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <BiLogoPostgresql className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <FaGitAlt className="bg-gray-100 rounded-full p-2 text-orange-700" />
            <SiPostman className="bg-gray-100 rounded-full p-2 text-orange-700" />
          </div>
        </div>
      </div>
      <p className="flex justify-start items-center text-lg text-gray-500 md:mt-16 mt-10 mb-4">
        <ChevronFirst />
        <span className="mx-2">Advantages</span>
        <ChevronLast />
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 my-6 px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-1/3 p-6  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
        >
          <p className="flex justify-center text-2xl">
            <GiSatelliteCommunication />
          </p>
          <h5 className="mb-2 text-xl text-center tracking-tight text-gray-500">
            Communication
          </h5>
          <p className="font-normal text-center text-gray-500">
            I micely reply to your messages during our work, since I am online
            most of the time, so cooperation is productive.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full md:w-1/3 p-6  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
        >
          <p className="flex justify-center text-2xl">
            <FaBusinessTime />
          </p>
          <h5 className="mb-2 text-xl text-center tracking-tight text-gray-500">
            Business Awareness
          </h5>
          <p className="font-normal text-center text-gray-500">
            Immersing in your business model. I can realize a project the way a
            client wants to see it, not just a developer.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/3 p-6  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
        >
          <p className="flex justify-center text-2xl">
            <MdPrivacyTip />
          </p>
          <h5 className="mb-2 text-xl text-center tracking-tight text-gray-500">
            Privacy
          </h5>
          <p className="font-normal text-center text-gray-500 ">
            Some projects have unique properties that shouldn&apos;t be public
            until the end of Implementation or even after.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
