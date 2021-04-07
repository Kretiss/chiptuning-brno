import React from 'react';

import Slider from "./Slider"
import About from "./About"
import ChiptuningTypes from "./ChiptuningTypes"
import WhyWe from "./WhyWe"
import Contact from "./Contact"


const Home = () =>{

  return(
    <>
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
