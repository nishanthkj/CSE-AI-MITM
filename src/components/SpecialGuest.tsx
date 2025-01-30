import React from 'react';
import { Award, BookOpen, Globe } from 'lucide-react';

const SpecialGuest = () => {
  return (
    <section id="special-guest" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Guest
          </h2>
          <p className="text-lg text-gray-600">
            Distinguished International Speaker
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img
                  className="h-full w-full object-cover md:w-full"
                  src="https://www.qmul.ac.uk/eecs/media/eecs/staff-profile-images/3143.jpg"
                  alt="Dr Laurissa Tokarchuk"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dr Laurissa Tokarchuk</h3>
                    <p className="text-blue-600 font-medium">Senior Lecturer</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <Globe className="text-blue-600 mr-3" size={20} />
                  <p className="text-gray-600">Queen Mary University of London, UK</p>
                </div>

                <div className="flex items-start mb-6">
                  <BookOpen className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600 leading-relaxed">
                    Dr Tokarchuk is a member of the Game AI and Cognitive Science research groups, as well as the Centre for Intelligent Sensing (CIS). She researches mobile and location-based gaming, data-driven methods for human-computer interaction design, mobile sensing, social computing, social sensing, recommendation and game AI.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Session</h4>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-900 font-medium">Endless Worlds: How AI Powers Procedural Game Design</p>
                    <p className="text-gray-600 text-sm mt-2">Day 1 | 2:00 PM - 3:50 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialGuest;