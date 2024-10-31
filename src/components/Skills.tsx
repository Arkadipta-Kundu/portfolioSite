import React from 'react';
import { Code } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Currently I am learning Java development and Spring Boot. While practicing DSA problem solving on LeetCode. You can find my both LeetCode and GitHub profiles below and can check out how I am doing. Besides this, I already know some stuff and those are:
        </p>
        <ul className="text-lg text-gray-600 dark:text-gray-400 list-disc list-inside space-y-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>DSA</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>C</li>
        </ul>
      </div>
    </section>
  );
}