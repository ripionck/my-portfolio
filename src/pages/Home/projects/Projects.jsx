import { FaAngleLeft, FaAngleRight, FaArrowRightLong } from 'react-icons/fa6';

const projects = [
  {
    id: 1,
    thumbnail: 'https://i.ibb.co/bNFf8y4/Metro-Express-Home.png',
    name: 'Metro Express',
    technologies: ['Django', 'HTML', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 2,
    thumbnail: 'https://i.ibb.co/6Hg3Qx2/E-Lit-Emporium.png',
    name: 'E-Lit Emporium',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'PostgreSQL',
      'Django REST Framework',
    ],
  },
];

const Projects = () => {
  return (
    <>
      <p className="flex items-center">
        <FaAngleLeft />
        Projects
        <FaAngleRight />
      </p>
      <div className="flex flex-wrap justify-center gap-8 my-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ height: 'auto' }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-56 w-full object-cover"
                src={project.thumbnail}
                alt={project.name}
              />
            </a>
            <div className="p-2">
              <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h5>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="rounded-lg bg-gray-200 text-sky-900 px-2 py-1"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
