import React from 'react';
import { Code, Brain, Users, Trophy } from 'lucide-react';

const Introduction = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Hands-on Workshops',
      description: 'Learn from industry experts through interactive sessions',
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Focus',
      description: 'Deep dive into cutting-edge AI technologies',
    },
    {
      icon: <Users size={24} />,
      title: 'Networking',
      description: 'Connect with like-minded tech enthusiasts',
    },
    {
      icon: <Trophy size={24} />,
      title: 'Hackathon',
      description: 'Compete and showcase your innovation',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Future of Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience an immersive three-day event combining workshops, expert talks,
            and a challenging hackathon focused on artificial intelligence and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Introduction;