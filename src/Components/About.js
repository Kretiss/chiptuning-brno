import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";


const About = () =>{

  const [isVisible, setVisibility] = useState(false);
  const onChange = (visibility) => {
    setVisibility(visibility);
  };

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translate3d(${isVisible ? 0 : -20}px,0,0)`,
    config: config.gentle,
  });

  return(
    <VisibilitySensor onChange={onChange} active={!isVisible} partialVisibility>
      <>
        <animated.h2 className="indexHeader2" style={spring}>Zajímavosti o&nbsp;nás</animated.h2>
        <animated.div className="about" style={spring}>
          <p>Válcová zkušebna - odladěné výkony, doživotní záruka na&nbsp;software, garance a&nbsp;jistota nadnárodní korporace</p>
          <p>Pobočky v&nbsp;53 zemích na&nbsp;celém světě, více než 1500 autorizovaných center po&nbsp;celém světě</p>
          <p>3000 upravených vozidel měsíčně, 30 denní záruka spokojenosti, individuální chiptuning</p>
        </animated.div>
      </>
    </VisibilitySensor>
  );

}

export default About;
