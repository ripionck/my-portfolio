import { ChevronFirst, ChevronLast } from 'lucide-react';

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-8 px-4">
        <div className="md:w-1/2">
          <div
            className="text-left"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="flex justify-start items-center text-lg text-gray-600 md:pt-0 pt-6">
              <ChevronFirst />
              Hello, World
              <ChevronLast />
            </p>
            <p className="text-lg text-gray-500 mt-4 mb-6">
              <strong className="text-xl">Backend Developer</strong> passionate
              about clean code and scalable solutions. I craft robust systems
              that bridge server-side logic with seamless user experiences,
              solving complex challenges with efficiency. Focused on building
              intuitive, high-performance architectures that empower
              applications from core infrastructure to the user interface.
            </p>
            <a
              href="https://drive.google.com/file/d/1Ongt5X4NlSCAaQldiiRr-jV4q1ygwLHR/view?usp=sharing"
              target="_blank"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-2 px-6 rounded-sm focus:outline-hidden focus:shadow-outline "
            >
              Resume
            </a>
          </div>
        </div>

        <div
          className="md:w-1/2 md:pl-8"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img
            src="https://i.ibb.co/VJKPFq8/017083928.png"
            alt="Profile"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
