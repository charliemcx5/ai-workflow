import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bower Tristram</h3>
            <p className="text-gray-600">Wildlife Photographer & Artist</p>
            <p className="text-gray-600 mt-2">Based in Vancouver, Canada</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:contact@bowertristram.com" className="text-gray-600 hover:text-emerald-500">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to receive updates about new work and exhibitions.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-r-md hover:bg-emerald-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bower Tristram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer