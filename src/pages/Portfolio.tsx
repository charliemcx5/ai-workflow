import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'wildlife' | 'landscape';
};

const projects: Project[] = [
  {
    id: 1,
    title: "Lions of the Serengeti",
    description: "A stunning series capturing the daily life of lion prides in Tanzania's Serengeti National Park.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    category: "wildlife"
  },
  {
    id: 2,
    title: "Arctic Wilderness",
    description: "Documenting the harsh beauty of the Arctic and its remarkable wildlife.",
    image: "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2",
    category: "landscape"
  },
  {
    id: 3,
    title: "Amazonian Birds",
    description: "Vibrant portraits of rare bird species in the Amazon rainforest.",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890",
    category: "wildlife"
  },
  {
    id: 4,
    title: "Mountain Landscapes",
    description: "Dramatic vistas from the world's most remote mountain ranges.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "landscape"
  },
  {
    id: 5,
    title: "African Elephants",
    description: "An intimate look at elephant families in their natural habitat.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    category: "wildlife"
  },
  {
    id: 6,
    title: "Desert Life",
    description: "Capturing the surprising biodiversity of desert ecosystems.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    category: "wildlife"
  },
  {
    id: 7,
    title: "Icelandic Fjords",
    description: "The raw beauty of Iceland's dramatic coastline and pristine fjords.",
    image: "https://images.unsplash.com/photo-1598691396645-77b871147e3d",
    category: "landscape"
  },
  {
    id: 8,
    title: "Himalayan Peaks",
    description: "Majestic mountain ranges and valleys of the Himalayas.",
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
    category: "landscape"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12">Discover my journey through nature's most spectacular moments.</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['all', 'wildlife', 'landscape'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-emerald-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;