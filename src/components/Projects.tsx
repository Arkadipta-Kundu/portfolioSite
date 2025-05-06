import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Projo",
    description: "A fully scalable OpenSource project management tool for developers",
    image: "imgs/projo.png",
    liveUrl: "https://www.projo.great-site.net/?i=1",
    codeUrl: "https://github.com/Arkadipta-Kundu/projo",
    tags: ["HTML", "CSS", "Js","PHP", "MySql", "Tellwind"],
  },
  {
    title: "Library Management System",
    description: "Library Management System with real-time Data management",
    image: "imgs/lms.png",
    liveUrl: "https://library-management-system-alpha-pied.vercel.app/",
    codeUrl: "https://github.com/Arkadipta-Kundu/LibraryManagementSystem.git",
    tags: ["HTML", "CSS", "JS", "Localstorage", "Bootstrap"],
  },
  {
    title: "Voting System",
    description: "Online polling system with real-time vote tracking",
    image: "imgs/vs.png",
    liveUrl: "https://onlinepollingsystem-sigma.vercel.app/",
    codeUrl: "https://github.com/Arkadipta-Kundu/voteingsystem",
    tags: ["HTML", "JS", "Localstorage", "Bootstrap"],
  },
  {
    title: "Parmalist",
    description: "a to dolist app made using ",
    image: "imgs/pl.png",
    codeUrl: "https://github.com/Arkadipta-Kundu/voteingsystem",
    tags: ["Node.js", "Express", "PostgreSQL", "EJS templating"],
  },
  {
    title: "ClimeCast",
    description:
      "Weather forecasting application with detailed meteorological data",
    image: "imgs/cc.png",
    codeUrl: "https://github.com/Arkadipta-Kundu/ClimeCast",
    tags: ["REST API", "JS", "Express", "Bootstrap"],
  },
  {
    title: "SkyRunner",
    description: "An engaging web-based runner game with dynamic obstacles",
    image: "imgs/sr.png",
    liveUrl: "https://skyrunnerbyglitch.netlify.app/",
    codeUrl: "https://github.com/glitch7584/SkyRunner",
    tags: ["Game Development", "Python", "HTML5"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Latest Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          These are my latest projects. You can find more on my <a href="https://github.com/Arkadipta-Kundu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>.
        </p>
      </div>
    </section>
  );
}