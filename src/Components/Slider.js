import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import Video from "../images/bgVideo1.mp4";

const Slider = () =>{

  const texts = [
    {id: 0, text: "Chiptuning osobních aut"},
    {id: 1, text: "Chiptuning nákladních aut"},
    {id: 2, text: "Chiptuning zemědělské techniky"},
  ];

  const [index, setIndex] = useState(0);

  const textTransitions = useTransition(texts[index], (item) => item.id, {
    from: { opacity: 0, transform: "translate3d(0,-15%,0) scale3d(1,1.1,1)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0) scale3d(1,1,1)" },
    leave: { opacity: 0, transform: "translate3d(0,15%,0) scale3d(1,0.95,1)" },
    config: config.gentle,
  });


  useEffect(() => void setInterval(() => setIndex((state) => (state + 1) % 3), 4000), []);

  return(
    <div className="sliderContainer">

      {textTransitions.map(({ item, props, key }) => (
        <animated.div className="sliderText" style={props} key={key} >
          <h1><span>A</span>utorizovaný chiptuning QUANTUM</h1>
          <p>{item.text}</p>
        </animated.div>
      ))}

      <div className="sliderVideo">

        <video
          src={Video}
          muted
          playsInline={true}
          autoPlay={true}
          loop
          disablePictureInPicture
        />

      </div>

    </div>
  );

}

export default Slider;