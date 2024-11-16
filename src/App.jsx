import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Service/Service';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SkillsPage from './components/skills/skills';



const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="work">
        <Work />
      </section>
      <SkillsPage/>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
