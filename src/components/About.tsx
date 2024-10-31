import React from 'react';
import { GraduationCap, MapPin, Coffee, Book, Film, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Undergrad Student of Information Technology at B. P. Poddar Institute of Management and Technology
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Kolkata, India</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Interests</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Exploring tech domain</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Reading psychological thrillers</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Watching sitcoms</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Does not like coffee much</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Currently I am learning Java development and Spring Boot. While practicing DSA problem solving on LeetCode. You can find my both LeetCode and GitHub profiles below and can check out how I am doing. Besides this, I already know some stuff and those are:
          </p>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'Java', 'DSA', 'Python', 'MySQL', 'C'].map(skill => (
              <span key={skill} className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}