import React from 'react';
import { Helmet } from "react-helmet";

import Slider from "./Slider"
import About from "./About"
import ChiptuningTypes from "./ChiptuningTypes"
import WhyWe from "./WhyWe"
import Contact from "./Contact"


const Home = () =>{

  return(
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
  );

}

export default Home;
