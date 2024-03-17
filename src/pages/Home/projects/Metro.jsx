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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            euismod pulvinar lorem, vitae lobortis eros interdum at.
          </p>
          <h2 className="text-gray-500 text-2xl font-semibold mb-4">
            Functionalities
          </h2>
          <ul className="list-disc list-inside text-gray-500 mb-4">
            <li>
              Developed a book store website using React and Django REST
              framework for API creation.
            </li>
            <li>
              Implemented JWT Token authentication for user, admin, and
              publisher login and registration.
            </li>
            <li>
              Created a dynamic book catalog allowing users to browse, search,
              and filter books.
            </li>
            <li>
              Enabled users to place orders securely, with features like
              shopping cart functionality for convenient book purchasing.
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
  );
};

export default Metro;
