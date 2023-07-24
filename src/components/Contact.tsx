import React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const map1 =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1304.8051330439973!2d16.8751005!3d49.1510237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712e9be1edda5b5%3A0x2abfb1928c2aec2d!2sQUANTUM%20-%20Autorizovan%C3%BD%20chiptuning%20-%20osobn%C3%AD%20vozidla%20%2F%20dod%C3%A1vky!5e0!3m2!1scs!2scz!4v1690215012086!5m2!1scs!2scz'
  const map2 =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2194.7753565609282!2d16.87918378857249!3d49.14281805683453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x753fb91edeaff950!2sQUANTUM%20-%20Autorizovan%C3%BD%20chiptuning%20Brno%20%E2%80%93%20kamiony%2Fautobusy%2Fagro!5e0!3m2!1scs!2scz!4v1619280422227!5m2!1scs!2scz'

  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  })

  const spring = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: `translate3d(${inView ? 0 : 20}px,0,0)`,
    },
    config: { ...config.gentle },
  })

  return (
    <animated.div className="contact" style={spring} ref={ref}>
      <h2 className="indexHeader2">
        V Brně jsou Vám k dispozici dvě autorizovaná centra
      </h2>

      <div className="cardsContainer">
        <div className="card">
          <h3>osobní vozy / dodávky</h3>
          <ul>
            <li className="bold">Adresa</li>
            <li>Quantum cars Brno</li>
            <li>Československé armády 2969</li>
            <li>684 01 Slavkov u&nbsp;Brna</li>
            <li className="bold">Mobil</li>
            <li>+420 777 227 767</li>
            <li className="bold">Otevírací doba</li>
            <li>Po - Ne: dle telefonní dohody</li>
          </ul>
          {inView ? (
            <iframe
              src={map1}
              title="Mapa pobočky pro&nbsp;osobní vozy a&nbsp;dodávky"
              loading="lazy"
            />
          ) : null}
        </div>

        <div className="card">
          <h3>kamiony / autobusy / agro</h3>
          <ul>
            <li className="bold">Adresa</li>
            <li>Quantum trucks Brno</li>
            <li>Československé armády 2969</li>
            <li>684 01 Slavkov u&nbsp;Brna</li>
            <li className="bold">Mobil</li>
            <li>+420 777 227 767</li>
            <li className="bold">Otevírací doba</li>
            <li>Po - Ne: dle telefonní dohody</li>
          </ul>
          {inView ? (
            <iframe
              src={map2}
              title="Mapa pobočky pro&nbsp;kamiony, autobusy a&nbsp;agro stroje"
              loading="lazy"
            />
          ) : null}
        </div>
      </div>
    </animated.div>
  )
}

export default Contact
