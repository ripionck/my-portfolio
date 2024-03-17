import { FaGithub } from 'react-icons/fa6';

const ELit = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Description, Functionalities, Source Code */}
          <div>
            <h2 className="text-gray-500 text-2xl font-semibold mb-4">
              Project Description
            </h2>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod pulvinar lorem, vitae lobortis eros interdum at.
            </p>
            <h2 className="text-gray-500 text-2xl font-semibold mb-4">
              Functionalities
            </h2>
            <ul className="list-disc list-inside text-gray-500 mb-4">
              <li>
                Developed a secure user registration system with email
                verification for account activation.
              </li>
              <li>
                Implemented admin functionalities for train management and
                dynamic scheduling.
              </li>
              <li>
                Created a user-friendly passenger profile system with NID
                validation.
              </li>
              <li>
                Enabled features for filtering trains, secure money deposits,
                seat booking, and train reviews with user restrictions.
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ripionck/e-Lit-client"
                className="flex items-center gap-2 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end Code <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://github.com/ripionck/e-Lit-api"
                className="flex items-center gap-2 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end Code <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/image1.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/image2.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/image3.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/image4.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ELit;
