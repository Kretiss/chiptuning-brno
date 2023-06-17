import React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyWe = () => {
  const { ref, inView } = useInView({
    rootMargin: '-180px 0px',
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
    <animated.div style={spring} ref={ref}>
      <h1 className="indexHeader1">Proč si vybrat právě nás?</h1>

      <div className="about whyWe">
        <p>
          Motorové mapy v&nbsp;řídící jednotce motoru upravujeme
          ve&nbsp;spolupráci s&nbsp;automobilkami.
        </p>
        <p>
          Nabízíme softwarovou úpravu řídící jednotky motoru ve&nbsp;třech
          variantách pro&nbsp;zvýšení výkonu vozidla.
        </p>
        <p>
          Upravujeme řídící jednotky motoru s&nbsp;důrazem na&nbsp;snížení
          spotřeby paliva ve&nbsp;dvou variantách.
        </p>
        <p>
          Spolupracujeme s&nbsp;autorizovanými servisy, prodejci vozidel
          i&nbsp;odborníky v&nbsp;auto moto sportu.
        </p>
      </div>

      <p className="moreInfo">
        Pro&nbsp;více informací navštivte naše mateřské stránky{' '}
        <a
          href="https://www.quantumchiptuning.cz/"
          target="_blank"
          rel="noreferrer"
        >
          quantumchiptuning.cz
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </p>
    </animated.div>
  )
}

export default WhyWe
