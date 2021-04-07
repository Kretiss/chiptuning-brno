import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";

import Image1 from "../images/chip-auta-2.svg";
import Image2 from "../images/chip-kamiony-2.svg";
import Image3 from "../images/chip-traktory-2.svg";

const ChiptuningTypes = () =>{

  const [isVisible, setVisibility] = useState(false);
  const onChange = (visibility) => {
    setVisibility(visibility);
  };

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translate3d(0,${isVisible ? 0 : 20}px,0)`,
    config: config.gentle,
  });


  return(
    <VisibilitySensor onChange={onChange} active={!isVisible} partialVisibility>
    <animated.div className="chiptuningTypes" style={spring}>
        <h1 className="indexHeader1">Provádíme chiptuning všeho druhu</h1>
        <div className="cardsContainer">
          <div className="card">
            <div className="cardHeader">
              <img src={ Image1 } alt="chiptuning osobních aut" />
              <h2>Osobní auta</h2>
            </div>
            <div className="cardText">
              <p>Quantum Tuning nabízí osvědčenou a&nbsp;důkladně testovanou úpravu motorových map pro&nbsp;osobní vozy a&nbsp;dodávky. Testováno na&nbsp;válcové zkušebně, garance kvality.</p>
              <a href="https://www.quantumchiptuning.cz/autorizovany/chiptuning/osobni-auta/" target="_blank" rel="noreferrer">Najděte svůj vůz</a>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <img src={ Image2 } alt="chiptuning nákladních aut" />
              <h2>Nákladní auta</h2>
            </div>
            <div className="cardText">
              <p>Snížení spotřeby a&nbsp;provozních nákladů, vyšší výkon a&nbsp;kroutící moment jsou důvody, proč je&nbsp;Quantum Tuning předním úpravcem kamionů, autobusů a&nbsp;spedičních vozidel.</p>
              <a href="https://www.quantumchiptuning.cz/autorizovany/chiptuning/nakladni-auta/" target="_blank" rel="noreferrer">Najděte svůj kamion</a>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <img src={ Image3 } alt="chiptuning zemědělské techniky" />
              <h2>Zemědělská technika</h2>
            </div>
            <div className="cardText">
              <p>Traktory, kombajny, zemědělské stroje, i&nbsp;u&nbsp;nich lze docílit efektivní optimalizace výkonu a&nbsp;snížení provozních nákladů. Možnost bezplatného vyzkoušení!</p>
              <a href="https://www.quantumchiptuning.cz/autorizovany/chiptuning/zemedelske-stroje/" target="_blank" rel="noreferrer">Najděte svůj AGRO&nbsp;stroj</a>
            </div>
          </div>

        </div>

    </animated.div>
    </VisibilitySensor>
  );

}

export default ChiptuningTypes;
