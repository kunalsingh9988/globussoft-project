import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../HeroSection/Hero'
import Main from '../Main/Main'
import CardSection from '../Cards/CardSection'
import Client from '../Clients/Client'
import Facts from '../Facts/Facts'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Main/>
        <CardSection/>
        <Client/>
        <Facts/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home