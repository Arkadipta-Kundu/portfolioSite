import React from 'react';
import { Terminal, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <a href="#" className="text-2xl font-bold flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          <span>Arkadipta</span>
        </a>
        <div className="flex items-center justify-between sm:ml-auto gap-4">
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}