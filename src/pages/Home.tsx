import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f"
            alt="Wildlife photograph"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Capturing Nature's Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              I have travelled across the world capturing nature's stories along the way and this is my life's work compiled in one place. Specialising in wildlife photography and hand-painted art, the key to my success has been a keen eye for beauty.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "African Savanna",
                image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
                description: "A lion pride at sunset"
              },
              {
                title: "Arctic Wonder",
                image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
                description: "Polar bears in their natural habitat"
              },
              {
                title: "Rainforest Life",
                image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14",
                description: "Vibrant macaws in the Amazon"
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to="/portfolio"
                      className="text-white text-lg font-medium hover:underline"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{work.title}</h3>
                <p className="mt-2 text-gray-600">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
                alt="Bower Tristram"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in wildlife photography, I've dedicated my life to capturing the raw beauty of nature. My work has taken me from the savannas of Africa to the Arctic circle, always in pursuit of those perfect moments that tell nature's most compelling stories.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                Learn more about my journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;