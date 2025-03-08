import { ChevronFirst, ChevronLast, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FinTrack',
    description:
      'FinTrack is a personal finance app enabling real-time transaction tracking, budget management, and advanced analytics through interactive charts. It offers secure authentication, dynamic transaction categorization, custom financial notifications, and profile customization. Users can monitor spending, set budgets, and visualize financial trends effectively, ensuring organized and informed money management.',
    image: '/FinanceTrack.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveLink: 'https://fin-track-azure.vercel.app/',
    githubLink: 'https://github.com/johndoe/dashboard',
  },
  {
    title: 'ShopEase',
    description:
      'ShopEase is a modern e-commerce platform enabling seamless product browsing, cart/wishlist management, and order tracking. Features include user authentication, category-based searches, reviews, and a user-friendly interface for efficient shopping. Users can manage orders, track statuses, and access purchase history, ensuring a streamlined and intuitive retail experience.',
    image: '/ShopEase.png',
    tech: ['React', 'Tailwind CSS', 'Django DRF', 'PostgreSQL', 'Redis'],
    liveLink: 'https://tasks-app-demo.com',
    githubLink: 'https://github.com/johndoe/tasks-app',
  },
  {
    title: 'Weather Forecast API',
    description:
      'A RESTful API service providing detailed weather forecasts with historical data analysis and location-based recommendations. Features caching and rate limiting.',
    image: 'https://via.placeholder.com/800x600',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    liveLink: 'https://weather-api-demo.com',
    githubLink: 'https://github.com/johndoe/weather-api',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with React and Tailwind CSS. Features dark mode, responsive design, and smooth animations. Includes blog functionality and contact form.',
    image: 'https://via.placeholder.com/800x600',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    liveLink: 'https://portfolio-demo.com',
    githubLink: 'https://github.com/johndoe/portfolio',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12" id="projects">
      {/* Header Section */}
      <p className="flex justify-start items-center text-xl text-gray-600 md:pt-16 mt-8 mb-6">
        <ChevronFirst />
        <span className="mx-2">Projects</span>
        <ChevronLast />
      </p>

      <div className="container mx-auto px-8 py-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } 
            items-center gap-8 mb-20 md:mb-32`}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {project.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 text-gray-600
                    rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
