import React from 'react';
import { Github, Linkedin, Twitter, Mail, BookOpen, Code } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arkadipta-kundu-087569321/',
    icon: <Linkedin />,
    username: 'arkadipta-kundu'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Arkadipta-Kundu',
    icon: <Github />,
    username: 'Arkadipta-Kundu'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kunduarka49',
    icon: <Twitter />,
    username: '@kunduarka49'
  },
  {
    name: 'Email',
    url: 'mailto:arkadipta.kundu@gmail.com',
    icon: <Mail />,
    username: 'arkadipta.kundu@gmail.com'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/arkadiptak47/',
    icon: <Code />,
    username: 'arkadiptak47'
  },
  {
    name: 'Blog',
    url: 'https://arkadiptakundu.hashnode.dev/',
    icon: <BookOpen />,
    username: 'arkadiptakundu.hashnode.dev'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                {link.icon}
              </div>
              <h3 className="font-semibold">{link.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{link.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}