import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import Video from "../images/bgVideo1.mp4";
import Image from "../images/slide1.jpg";

const Slider = () =>{

  const videoRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768);
  };

  const texts = [
    {id: 0, text: "Chiptuning osobních aut"},
    {id: 1, text: "Chiptuning nákladních aut"},
    {id: 2, text: "Chiptuning zemědělské techniky"},
  ];

  const textTransitions = useTransition(showHeader ? texts[index] : [], {
    from: { opacity: 0, transform: "translate3d(0,-15%,0) scale3d(1,1.1,1)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0) scale3d(1,1,1)" },
    leave: { opacity: 0, transform: "translate3d(0,15%,0) scale3d(1,0.95,1)" },
    config: config.gentle,
    key: texts[index].id,
  });

  useEffect(() => {
    const headerInterval = setInterval(() => setShowHeader(true), 250);
    return () => clearInterval(headerInterval);

  }, []);

  useEffect(() => {
    if(isDesktop){
      const { current: videoElement } = videoRef
      videoElement.setAttribute('muted', '')
    }
  }, [isDesktop]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((state) => (state + 1) % 3);
    }, 4000);

    return () => clearInterval(slideInterval);

  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return(
    <div className="sliderContainer">

      {textTransitions((props, item) => (
        <animated.div className="sliderText" style={props}>
          <h1>
            <span>A</span>utorizovaný chiptuning QUANTUM
          </h1>
          <p>{item.text}</p>
        </animated.div>
      ))}

      <div className="sliderVideo">

      {
        isDesktop
        ?  <video src={Video} ref={videoRef} playsInline autoPlay loop disablePictureInPicture muted />
        :  <img src={Image} alt="Chiptuning Brno Banner" />
      }

      </div>

    </div>
  );

}

export default Slider;
