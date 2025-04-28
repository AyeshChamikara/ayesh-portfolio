import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "A comprehensive inventory management system built with Laravel. Features include real-time stock tracking, automated reorder points, supplier management, and detailed reporting dashboard. The system helps businesses optimize their inventory levels and reduce carrying costs.",
    image: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Acme Company Website",
    description: "A modern, responsive corporate website built with WordPress. Custom theme development with advanced features including team management, project portfolio, blog integration, and contact form with email notifications. Optimized for speed and SEO.",
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    liveUrl: "https://acme.lk/demo/"
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "A feature-rich LMS platform supporting course creation, student enrollment, progress tracking, and assessment management. Includes video lectures, interactive quizzes, discussion forums, and certificate generation.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Canteen Management System",
    description: "A comprehensive canteen management solution built with pure PHP. Features include menu management, order processing, inventory tracking, and sales reporting. Implemented payment integration and real-time order notifications.",
    image: "https://images.pexels.com/photos/6941039/pexels-photo-6941039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/malakashashiranga/FoodFrenzy-Canteen-Food-Ordering-System.git",
    liveUrl: "https://example.com"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">My Work</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Recent Projects</h3>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here are some of the projects I've worked on that showcase my skills and expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 space-y-2">
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                          aria-label="View source code"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm animate-fadeIn"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;