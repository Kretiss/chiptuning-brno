import React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  })

  const spring = useSpring({
    from: { opacity: 0, transform: 'translate3d(-20px,0,0)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: `translate3d(${inView ? 0 : -20}px,0,0)`,
    },
    config: { ...config.gentle },
  })

  return (
    <animated.div ref={ref} style={spring}>
      <h2 className="indexHeader2">Zajímavosti o&nbsp;nás</h2>

      <div className="about">
        <p>
          Válcová zkušebna - odladěné výkony, doživotní záruka na&nbsp;software,
          garance a&nbsp;jistota nadnárodní korporace
        </p>
        <p>
          Pobočky v&nbsp;53 zemích na&nbsp;celém světě, více než 1500
          autorizovaných center po&nbsp;celém světě
        </p>
        <p>
          8000 upravených vozidel měsíčně, 30 denní záruka spokojenosti,
          individuální chiptuning
        </p>
      </div>
    </animated.div>
  )
}

export default About
