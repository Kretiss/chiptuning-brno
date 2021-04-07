import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";


const Contact = () =>{

  const map1 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d652.4037961642953!2d16.87525201812269!3d49.15093032378249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712e88670a9a481%3A0x58e5c6e64145c801!2sSlov%C3%A1kova%201428%2C%20684%2001%20Slavkov%20u%20Brna%2C%20%C4%8Cesko!5e0!3m2!1scs!2sus!4v1617752657465!5m2!1scs!2sus";
  const map2 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4389.555524690489!2d16.87893238199763!3d49.14276373613659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712e87f078b0145%3A0xeb78618f0cba6a2a!2s%C4%8Ceskoslovensk%C3%A9%20arm%C3%A1dy%201213%2C%20684%2001%20Slavkov%20u%20Brna%2C%20%C4%8Cesko!5e0!3m2!1scs!2sus!4v1617778771025!5m2!1scs!2sus";


  const [isVisible, setVisibility] = useState(false);
  const onChange = (visibility) => {
    setVisibility(visibility);
  };

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translate3d(${isVisible ? 0 : 20}px,0,0)`,
    config: config.gentle,
  });

  return(
    <VisibilitySensor onChange={onChange} active={!isVisible} partialVisibility>
    <>
      <animated.div className="contact" style={spring}>
        <h2 className="indexHeader2">V Brně máme dvě garáže</h2>
        <div className="cardsContainer">
          <div className="card">
            <h3>osobní vozy / dodávky</h3>
            <ul>
              <li className="bold">Adresa</li>
              <li>Quantum cars Brno</li>
              <li>Slovákova 1428</li>
              <li>684 01 Slavkov u&nbsp;Brna</li>
              <li className="bold">Mobil</li>
              <li>+420 776 555 250</li>
            </ul>
            <iframe src={map1} title="Mapa pobočky pro&nbsp;osobní vozy a&nbsp;dodávky" loading="lazy"></iframe>
          </div>
          <div className="card">
            <h3>kamiony / autobusy / agro</h3>
            <ul>
              <li className="bold">Adresa</li>
              <li>Quantum trucks Brno</li>
              <li>Československé armády 1213</li>
              <li>684 01 Slavkov u&nbsp;Brna</li>
              <li className="bold">Mobil</li>
              <li>+420 776 555 212</li>
            </ul>
            <iframe src={map2} title="Mapa pobočky pro&nbsp;kamiony, autobusy a&nbsp;agro stroje" loading="lazy"></iframe>
          </div>
        </div>
      </animated.div>
      </>
    </VisibilitySensor>
  );

}

export default Contact;
