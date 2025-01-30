import React from 'react';
import { Calendar, Users, Target, Clock, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Objectives from './components/Objectives';
import Organizers from './components/Organizers';
import SpecialGuest from './components/SpecialGuest';
import Timeline from './components/Timeline';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Objectives />
        <Organizers />
        <SpecialGuest />
        <Timeline />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;