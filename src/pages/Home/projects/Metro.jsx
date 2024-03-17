import { FaGithub } from 'react-icons/fa6';
const Metro = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Description, Functionalities, Source Code */}
        <div>
          <h2 className="text-gray-500 text-2xl font-semibold mb-4">
            Project Description
          </h2>
          <p className="text-gray-500 mb-4">
            The train ticket booking system is being developed using Django,
            Tailwind CSS, HTML, and PostgreSQL. These technologies collectively
            facilitate the construction of a robust and dynamic platform for
            managing train reservations and bookings.
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
              Implemented admin functionalities for train management and dynamic
              scheduling.
            </li>
            <li>
              Created a user-friendly passenger profile system with NID
              validation.
            </li>
            <li>
              Enabled features for filtering trains, secure money deposits, seat
              booking, and train reviews with user restrictions.
            </li>
          </ul>
          <a
            href="https://github.com/ripionck/metro-express"
            className="flex items-center gap-2 text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <FaGithub className="text-2xl" />
          </a>
        </div>

        {/* Right Side: Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://i.ibb.co/bNFf8y4/Metro-Express-Home.png"
            alt="Metro-Express-Home"
            className="image w-full h-auto rounded-md"
          />
          <img
            src="https://i.ibb.co/RN0RLdq/Metro-Express-Train-Information.png"
            alt="Train-Information"
            className="image w-full h-auto rounded-md"
          />
          <img
            src="https://i.ibb.co/7vCKNs9/Metro-Express-Train-Search-Result.png"
            alt="Train-Search-Result"
            className="image w-full h-auto rounded-md"
          />
          <img
            src="https://i.ibb.co/dpFWbVW/Metro-Express-Search-Result.png"
            alt="Search-Result"
            className="image w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Metro;
