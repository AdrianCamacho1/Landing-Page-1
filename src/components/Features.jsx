import React from 'react';

const features = [
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency to ensure your application runs smoothly.',
    icon: '⚡', // Replace with an actual icon or SVG if needed
  },
  {
    title: 'Scalable Architecture',
    description: 'Designed to handle growing amounts of work or its potential to accommodate growth.',
    icon: '📈', // Replace with an actual icon or SVG if needed
  },
  {
    title: 'Easy Integration',
    description: 'Seamlessly integrates with your existing tools and services.',
    icon: '🔗', // Replace with an actual icon or SVG if needed
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive and easy-to-use interface designed with user experience in mind.',
    icon: '🖥️', // Replace with an actual icon or SVG if needed
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-400 mb-8 font-poppins">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4 text-5xl text-yellow-600 dark:text-yellow-400">
                <span>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-lora">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
