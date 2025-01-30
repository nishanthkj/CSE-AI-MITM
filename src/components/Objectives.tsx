import React from 'react';
import { Target, Lightbulb, Users, Brain, Shield, Briefcase } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: 'Explore Real-Time AI Applications',
      description: 'Provide participants with hands-on experience in solving real-world problems using AI tools and techniques across various industries.',
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: 'Foster AI Skill Development',
      description: 'Equip students and faculty with practical knowledge in developing, fine-tuning, and deploying AI/ML/DL models for diverse use cases such as medical imaging, diagnosis, and explainability.',
    },
    {
      icon: <Lightbulb className="text-blue-600" size={24} />,
      title: 'Encourage Innovation and Creativity',
      description: 'Simulate real-world problem-solving scenarios to inspire innovative solutions and creative thinking through hackathon challenges.',
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: 'Promote Collaboration and Networking',
      description: 'Facilitate teamwork among students, faculty, and mentors to foster collaboration and build professional networks in the AI community.',
    },
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: 'Enhance Explainability and Ethics in AI',
      description: 'Teach participants the importance of AI transparency and fairness by integrating tools like Grad-CAM, SHAP, and bias detection mechanisms.',
    },
    {
      icon: <Briefcase className="text-blue-600" size={24} />,
      title: 'Prepare Participants for Industry Challenges',
      description: 'Develop participants problem-solving, technical, and presentation skills to tackle industry-relevant challenges and prepare them for future roles in AI-related fields.',
    },
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive goals for advancing AI education and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {objective.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Objectives;