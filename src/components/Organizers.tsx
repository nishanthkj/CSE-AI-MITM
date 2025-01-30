import React from 'react';

const Organizers = () => {
  const organizers = [
    {
      name: 'Dr. B G Naresh Kumar',
      role: 'Organizing Chair',
      image: 'src/components/img/mit-principal.png',
    },
    {
      name: 'Dr. Murali S',
      role: 'Organizing Chair',
      image: 'https://miamsh.com/assets/images/trustee/Dr.MurliS.jpeg',
    },
    {
      name: 'Dr. T Vasudev',
      role: 'Organizing Chair',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmmv4qCqoKV_1bMj0F7byZ5XAAqR4W7kiQQ&s',
    },
    {
      name: 'Dr. Hemanth S R',
      role: 'Convener',
      image: 'src/components/img/DrHemanth.png',
    },
    {
      name: 'Dr. Victor A I',
      role: 'Program Coordinator',
      image: 'src/components/img/Drvictor.jpeg',
    },
    {
      name: 'Prof. Navya S',
      role: 'Program Coordinator',
      image: 'src/components/img/profNavya.png',
    },
     {
      name: 'Prof. Vinayashree A S',
      role: 'Program Coordinator',
      image: 'src/components/img/profVinayashree.png',
    },
     {
      name: 'Prof. Shashank H P',
      role: 'Program Coordinator',
      image: 'src/components/img/ProfShashank.png',
    },
    
  ];

  return (
    <section id="organizers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Organizers
          </h2>
          <p className="text-lg text-gray-600">
            The team behind Workshop and Hackathon 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {organizer.name}
              </h3>
              <p className="text-blue-600">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;