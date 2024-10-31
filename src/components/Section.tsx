import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <div className="text-blue-400">
            {icon}
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;