import React from 'react';

const Technologies = () => {
  /*
  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Next.js', category: 'Frontend', color: 'bg-gray-100 text-gray-800' },
    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'Express', category: 'Backend', color: 'bg-gray-100 text-gray-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
    { name: 'React Native', category: 'Mobile', color: 'bg-blue-100 text-blue-800' },
    { name: 'Figma', category: 'Design', color: 'bg-purple-100 text-purple-800' },
    { name: 'AWS', category: 'DevOps', color: 'bg-orange-100 text-orange-800' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-800' }
  ];
  */

  return (
    <section id="technologies" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/*
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Технологии
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Используем современный стек технологий для создания качественных продуктов
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {technologies.map((tech, index) => (
            <div key={index} className={`${tech.color} rounded-lg p-3 text-center hover:scale-105 transition-transform`}>
              <div className="font-bold text-md mb-1">{tech.name}</div>
              <div className="text-xs opacity-75">{tech.category}</div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Technologies;