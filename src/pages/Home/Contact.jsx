import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';

const Contact = () => {
  return (
    <>
      <p className="flex items-center text-lg text-gray-600">
        <FaAngleLeft />
        Contact
        <FaAngleRight />
      </p>
      <div className="max-w-6xl mx-auto md:flex md:flex-row flex-col items-center justify-between">
        {/* Left side: Email and Phone */}
        <div
          className="w-full md:w-1/2 px-8 mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-lg text-gray-600">
            Just give me a message whenever and however you want and we will
            start our cooperation.
          </p>
          <div className="flex items-center mb-4">
            <MdAttachEmail className="text-xl text-gray-600" />
            <span className="text-gray-600">example@example.com</span>
          </div>
          <div className="flex items-center">
            <HiDevicePhoneMobile className="text-xl text-gray-600" />
            <span className="text-gray-600">+1234567890</span>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div
          className="w-full md:w-1/2 px-8"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form className="space-y-4">
            <div className="relative z-0">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
            <div className="relative z-0">
              <textarea
                id="message"
                rows="4"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Your message
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-1 px-8 rounded focus:outline-none focus:shadow-outline"
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
