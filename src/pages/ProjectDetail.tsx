import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects, Project } from '../data/projects';
import ErrorBoundary from '../components/ErrorBoundary';
import Lightbox from '../components/Lightbox';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  window.scrollTo(0, 0);

  useEffect(() => {
    // Find the project by ID
    const projectId = parseInt(id || '0');
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [id]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <p className="text-gray-600 mb-4">The project you're looking for doesn't exist.</p>
          <Link
            to="/portfolio"
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="py-16 bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
              <div className="relative h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">{project.title}</h1>
                    <span className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-6">{project.description}</p>
                
                <div className="prose max-w-none">
                  <p>
                    This project represents months of dedicated work in the field, capturing the essence of 
                    {project.category === 'wildlife' ? ' these magnificent creatures' : ' this breathtaking landscape'}.
                    Each image tells a story of patience, timing, and a deep appreciation for the natural world.
                  </p>
                  <p>
                    The conditions were challenging, but the results were worth every moment spent waiting for 
                    the perfect light and composition.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {project.projectImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] group">
                    <img
                      src={img + "?w=500"}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">View larger</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox component */}
      <Lightbox 
        images={project.projectImages} 
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </ErrorBoundary>
  );
};

export default ProjectDetail;
