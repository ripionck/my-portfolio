import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';

const Contact = () => {
  return (
    <>
      <p
        id="contact"
        className="flex items-center text-xl text-gray-600 md:mt-12 mt-8"
      >
        <FaAngleLeft />
        Contact
        <FaAngleRight />
      </p>
      <div className="max-w-6xl mx-auto md:flex md:flex-row flex-col items-center justify-between md:py-12 py-6">
        {/* ---------------Email and Phone----------------- */}
        <div
          className="w-full md:w-1/2 px-8 mb-8 md:mb-0 border-l-2 border-gray-400"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-lg text-gray-500 mb-8">
            Just give me a message whenever and however you want and we will
            start our cooperation.
          </p>
          <h2 className="text-lg text-gray-500">EMAIL: </h2>
          <div className="flex items-center space-x-2 mb-4">
            <MdAttachEmail className="text-md text-gray-500" />
            <span className="text-gray-500">ripion.chakmar@gmail.com</span>
          </div>
          <h2 className="text-lg text-gray-500">MY PHONE:</h2>
          <div className="flex items-center space-x-2">
            <HiDevicePhoneMobile className="text-md text-gray-500" />
            <span className="text-gray-500">(+880) 1707-884203</span>
          </div>
        </div>

        {/* ------------Contact Form---------------- */}
        <div
          className="w-full md:w-1/2 px-8"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form
            className="space-y-4 md:pt-6"
            action="https://formspree.io/f/mwkgnvwk"
            method="POST"
          >
            <div className="relative z-0">
              <input
                type="text"
                id="name"
                name="name"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-hidden focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto"
              >
                Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                name="email"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-hidden focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto"
              >
                Email
              </label>
            </div>
            <div className="relative z-0">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-hidden focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto"
              >
                Your message
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-1 px-8 rounded-sm focus:outline-hidden focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
