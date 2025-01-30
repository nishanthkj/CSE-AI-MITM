import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const schedule = {
    1: {
      date: 'Febraury 10, 2025',
      events: [
        {
          time: '10:00 AM - 11:00 AM',
          topic: 'Presidential Address',
          speaker: 'Dr. S. Muruli'
        },
        {
          time: '11:15 AM - 11:45 AM',
          topic: 'Inauguration of the Department Website and AI Club',
          speaker: 'Dr. Vasudev T.'
        },
        {
          time: '11:50 AM - 12:50 PM',
          topic: 'AI Odyssey: Exploring Its Timeless Journey',
          speaker: 'Dr. Vasudev T.'
        },
        {
          time: '2:00 PM - 3:50 PM',
          topic: 'Endless Worlds: How AI Powers Procedural Game Design (Virtual Presentation)',
          speaker: 'Dr. Laurissa T.'
        }
      ]
    },
    2: {
      date: 'Febraury 11, 2025',
      events: [
        {
          time: '09:30 AM - 10:00 AM',
          topic: 'Recap of day 1',
          speaker: 'Dr. Agughasi Victor Ikechukwu'
        },
        {
          time: '10:00 AM - 11:30 AM',
          topic: 'Profit with Precision: AI in Finance',
          speaker: 'Prof shashank H. P'
        },
        {
          time: '11:30 AM - 01:00 PM',
          topic: 'From Raw to Refined: The Art of Data Engineering',
          speaker: 'Beeresh M. P.'
        },
        {
          time: '02:00 PM - 04:00 PM',
          topic: 'Beyond Chalk and Talk: AI in the Modern Classroom',
          speaker: 'Prof. Navya S. and Prof. Vinayshree A. S.'
        }
      ]
    },
    3: {
      date: 'Febraury 12, 2025',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          topic: 'Recap of day 2 sessions',
          speaker: 'Dr. Agughasi Victor Ikechukwu'
        },
        {
          time: '10:00 AM - 11:30 AM',
          topic: 'Data for a Greener Tomorrow: AI in Climate & Environmental Intelligence',
          speaker: 'Mr. Nithin S.'
        },
        {
          time: '11:30 AM - 01:00 PM',
          topic: 'From Pixels to Prognosis: AI in Medical Imaging',
          speaker: 'Dr. Agughasi Victor Ikechukwu'
        },
        {
          time: '02:00 PM - 03:30 PM',
          topic: 'From Prompts to Possibilities: Exploring Generative AI',
          speaker: 'Dr. Hemanth S. R.'
        },
        {
          time: '3:30 PM - 04:00 PM',
          topic: 'Conclusion and Introduction to Hackathon',
          speaker: 'Dr. Hemanth S. R'
        }
      ]
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-600">
            Three days of learning, innovation, and excitement
          </p>
        </div>

        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 mx-2 rounded-lg transition-all duration-200 ${
                activeDay === day
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>Day {day}</span>
              </div>
              <div className={`text-sm ${activeDay === day ? 'text-blue-100' : 'text-gray-500'}`}>
                {schedule[day].date}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {schedule[activeDay].events.map((event, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <div className="flex items-center text-blue-600">
                      <Clock size={20} className="mr-2" />
                      <span className="font-semibold">{event.time}</span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.topic}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center text-gray-600">
                      <User size={20} className="mr-2" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;