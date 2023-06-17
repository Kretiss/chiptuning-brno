import React from 'react'
import { Helmet } from 'react-helmet-async'

import Slider from '../components/Slider'
import About from '../components/About'
import ChiptuningTypes from '../components/ChiptuningTypes'
import WhyWe from '../components/WhyWe'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Autorizovaný chiptuning QUANTUM Brno</title>
      </Helmet>

      <Slider />

      <div className="index">
        <div className="container">
          <About />

          <ChiptuningTypes />

          <WhyWe />

          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
