import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Contact = () =>{

  const map1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.31980467519077!2d16.875192393972405!3d49.150859838416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed0c82fc450afd78!2sAutoslavkov!5e0!3m2!1scs!2scz!4v1619280820971!5m2!1scs!2scz";
  const map2 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2194.7753565609282!2d16.87918378857249!3d49.14281805683453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x753fb91edeaff950!2sQUANTUM%20-%20Autorizovan%C3%BD%20chiptuning%20Brno%20%E2%80%93%20kamiony%2Fautobusy%2Fagro!5e0!3m2!1scs!2scz!4v1619280422227!5m2!1scs!2scz";

  const { ref, inView } = useInView({
    rootMargin: "-180px 0px",
    triggerOnce: true,
  });

  const spring = useSpring({
    from: {opacity: 0, transform: "translate3d(20px,0,0)"},
    to: {
      opacity: inView ? 1 : 0,
      transform: `translate3d(${inView ? 0 : 20}px,0,0)`,
    },
    config: {...config.gentle},
  });

  return(
    <animated.div
      className="contact"
      style={spring}
      ref={ref}
    >

      <h2 className="indexHeader2">V Brně Jsou Vám k dispozici dvě autorizovaná centra</h2>

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
          {
            inView
            ? <iframe
                src={map1}
                title="Mapa pobočky pro&nbsp;osobní vozy a&nbsp;dodávky"
                loading="lazy"
              />
            : null
          }

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
          {
            inView
            ? <iframe
                src={map2}
                title="Mapa pobočky pro&nbsp;kamiony, autobusy a&nbsp;agro stroje"
                loading="lazy"
              />
          : null
          }
        </div>

      </div>

    </animated.div>
  );

}

export default Contact;
