import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Map, Award } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Camera className="h-8 w-8 text-emerald-600" />,
      title: "Wildlife Photography",
      description: "Specialized in capturing animals in their natural habitat using non-invasive techniques."
    },
    {
      icon: <Palette className="h-8 w-8 text-emerald-600" />,
      title: "Traditional Art",
      description: "Expert in watercolor and oil paintings, focusing on wildlife subjects."
    },
    {
      icon: <Map className="h-8 w-8 text-emerald-600" />,
      title: "Expedition Planning",
      description: "Experienced in organizing photography expeditions in remote locations."
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "Conservation Work",
      description: "Active participant in wildlife conservation projects worldwide."
    }
  ];

  return (
    <div className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16"
        >
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Me</h1>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                For over 15 years, I've dedicated my life to capturing the raw beauty of nature through my lens. Born in Vancouver, Canada, my journey began with a simple fascination with local wildlife, but quickly evolved into a lifelong passion for documenting the world's most remarkable creatures and landscapes.
              </p>
              <p className="mb-4">
                My work has taken me to six continents, from the depths of the Amazon rainforest to the peaks of the Himalayas. Each expedition has not only yielded stunning photographs but has also deepened my understanding of our planet's delicate ecosystems and the urgent need for their preservation.
              </p>
              <p>
                Beyond photography, I'm an accomplished painter, using traditional mediums to bring another dimension to my wildlife art. This dual approach allows me to capture not just the physical appearance of my subjects, but their spirit and character as well.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1552168324-d612d77725e3"
              alt="Bower at work"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Career Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• National Geographic Contributing Photographer (2018-Present)</li>
                <li>• Wildlife Photographer of the Year Finalist (2020)</li>
                <li>• Published in leading nature magazines worldwide</li>
                <li>• Featured exhibitions in New York, London, and Tokyo</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Expertise & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;