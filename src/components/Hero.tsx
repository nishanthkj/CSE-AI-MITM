import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media-hosting.imagekit.io//aaed051e4b364cde/20250129_144706.jpg?Expires=1832750716&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XV95RFoCsbbh9395KHytTAMbMMo48zKo75tEOaVv4hKV6ri7VzyzVSZyfBoy8dsuhyBpF~sotlBQl7PB2yY4D3ujZe586BpiZTRZy0MFqRVzgB3Nv7mn31vxZ1tWBz-5Pl6Rxa2~Osc135jbbo~PlYVRph6bzikHRyeLmXn36ZnlnOyz6T8edVxzh4c7EeKxJvGG~vCja1F7CCbn~dOTXdY4m2m9SFAcuZENDCzIeKQS4kmTHmMO~A6UM6Oh32US3FCIrHkPUrFfG-h81U2MMWUj8G7Rf3eaj5YOhHQdHivy93LILSA3LMvMUpIEAtkdu0pkqXpF4hGfp5ZTe2Kl8g__")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          A three days Workshop on "AI Applications in Real-Time" 
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          <b><i>...Advancing AI, Empowering Generations</i></b>
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
         <b>When?:</b> Febraury 10th–12th, 2025<br />
         <b>Where?:</b> Department of CSE (Param Lap)<br />
         <b>Target Audience?:</b> 2nd Year Students (CSE-AI)<br />
        </p>
        <a 
          href="https://forms.gle/1wTDayUwrjcXYbHY9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Register Now!
        </a>
      </div>
    </div>
  );
}

export default Hero;