import React from 'react';
import { Building2, Target, Lightbulb, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About MITM
          </h2>
          <p className="text-lg text-gray-600">
            Excellence in Technical Education Since 2007
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building2 className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Our Institution</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Maharaja Institute of Technology Mysore (MITM) was established in 2007 by MET® in a
              peaceful, sprawling location away from urban disruption. Founded by a group of esteemed
              individuals in Science and Technology, the institute began with 300 seats across five
              engineering disciplines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the years, it has grown to accommodate over 900 students across undergraduate,
              postgraduate, and research programs. MITM is known for its quality education,
              "Teaching Centric" approach, and dedicated faculty.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The institute focuses on innovation, transparency, and high standards of education,
              with modern infrastructure and over 50 buses providing transportation within a 60 km
              radius. Its alumni are well recognized in society and industry.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "To be recognized as a premier technical and management institution promoting
                extensive education fostering research, innovation and entrepreneurial attitude"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To empower students with indispensable knowledge through dedicated teaching and collaborative learning.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To advance extensive research in science, engineering and management disciplines.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To facilitate entrepreneurial skills through effective institute-industry collaboration and interaction with alumni.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To instill the need to uphold ethics in every aspect.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To mould holistic individuals capable of contributing to the advancement of the society.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Department of Computer Science and Engineering (Artificial Intelligence)
            </h3>
          </div>

          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="leading-relaxed">
              The Department strives for academic excellence, cutting-edge research, and meaningful societal contributions. With a mission to equip students with strong AI fundamentals, the department emphasizes practical applications and real-world projects. It fosters a collaborative learning environment that encourages innovation, critical thinking, and ethical practices. By promoting inclusivity and lifelong learning, the department prepares students for successful careers in AI-driven industries, ensuring they are well-equipped to tackle global challenges in technology and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Vision</h4>
              </div>
              <p className="text-gray-600">
                "To be recognized as the best center for technical education and research in the field of information science and engineering."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Mission</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To facilitate adequate transformation in students through a proficient teaching learning process with the guidance of mentors and all-inclusive professional activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To infuse students with professional, ethical and leadership attributes through industry collaboration and alumni affiliation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To enhance research and entrepreneurship in associated domains and to facilitate real time problem solving.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;