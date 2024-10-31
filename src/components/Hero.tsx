import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <img
            src="imgs/dplt.jpg"
            alt="Arkadipta Kundu"
            className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-blue-500/30"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          Arkadipta Kundu
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Web Developer
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://www.linkedin.com/in/arkadipta-kundu-087569321/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </a>
          <a href="https://github.com/Arkadipta-Kundu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </a>
          <a href="https://twitter.com/kunduarka49" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </a>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-gray-400" />
      </div>
    </header>
  );
}