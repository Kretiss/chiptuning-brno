import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";


const WhyWe = () =>{

  const [isVisible, setVisibility] = useState(false);
  const onChange = (visibility) => {
    setVisibility(visibility);
  };

  const spring = useSpring({
    from: {opacity: 0, transform: "translate3d(-20px,0,0)"},
    to: {
      opacity: isVisible ? 1 : 0,
      transform: `translate3d(${isVisible ? 0 : -20}px,0,0)`,
    },
    config: {...config.gentle},
  });

  return(
    <VisibilitySensor
      onChange={onChange}
      active={!isVisible}
      partialVisibility
      offset={{bottom: 180}}
    >

      <>
        <animated.h1 className="indexHeader1" style={spring}>Proč si vybrat právě nás?</animated.h1>

        <animated.div className="about whyWe" style={spring}>
          <p>Motorové mapy v&nbsp;řídící jednotce motoru upravujeme ve&nbsp;spolupráci s&nbsp;automobilkami.</p>
          <p>Nabízíme softwarovou úpravu řídící jednotky motoru ve&nbsp;třech variantách pro&nbsp;zvýšení výkonu vozidla.</p>
          <p>Upravujeme řídící jednotky motoru s&nbsp;důrazem na&nbsp;snížení spotřeby paliva ve&nbsp;dvou variantách.</p>
          <p>Spolupracujeme s&nbsp;autorizovanými servisy, prodejci vozidel i&nbsp;odborníky v&nbsp;auto moto sportu.</p>
        </animated.div>

        <animated.p className="moreInfo" style={spring}>Pro&nbsp;více informací navštivte naše mateřské stránky <a href="https://www.quantumchiptuning.cz/" target="_blank" rel="noreferrer">quantumchiptuning.cz</a></animated.p>
      </>

    </VisibilitySensor>
  );

}

export default WhyWe;
