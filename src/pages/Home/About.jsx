import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-4">
        <div className="md:w-1/2">
          <div
            className="text-left"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="flex items-center text-lg text-gray-600">
              <FaAngleLeft />
              Hello, World
              <FaAngleRight />
            </p>
            <p className="text-lg text-gray-600 my-4">
              My name is Ripion Chakma. I&apos;m a Backend Developer from
              Bangladesh. My passion for clean code and problem-solving drives
              me to create seamless experiences for users, from the server to
              the screen.
            </p>
            <a
              href="https://drive.google.com/file/d/1Ongt5X4NlSCAaQldiiRr-jV4q1ygwLHR/view?usp=sharing"
              target="_blank"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default About;
