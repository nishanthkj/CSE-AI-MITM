import React from 'react';
import { Calendar } from 'lucide-react';

const Timeline = () => {
  const dates = [
    {
      date: 'Febraury 7th, 2025',
      event: 'Deadline for Registration',
    },
    {
      date: 'February 10th to 12th , 2025',
      event: 'Workshop',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Important Dates
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {dates.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={20} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.date}
                </h3>
                <p className="text-gray-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;