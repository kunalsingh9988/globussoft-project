import React from 'react';
import './Home.css';

// Importing components
import Navbar from '../Navbar/Navbar';
import Hero from '../HeroSection/Hero'
import Main from '../Main/Main';
import Client from '../Clients/Client';
import Cards from '../Cards/CardSection'
import Facts from '../Facts/Facts';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer';
import Progress from '../progress/Progress'

// The home page will contain all of our components
const Home = () => {
  return (
    <div className='home'>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* Main Content Component */}
      <Main />

      {/* Progress Component */}
      <Progress />

      {/* Card Section Component */}
      <Cards />

      {/* Client Component */}
      <Client />

      {/* Facts Component */}
      <Facts />

      {/* Partners Component */}
      <Partners />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
