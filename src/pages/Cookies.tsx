import React, { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Helmet } from 'react-helmet-async'

const Cookies = () => {
  const [show, setShow] = useState(false)
  const effect = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  })

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <animated.div className="container cookies" style={effect}>
      <Helmet>
        <title>Autorizovaný chiptuning QUANTUM Brno - Cookies</title>
      </Helmet>
      <h2>Soubory cookies</h2>
      <p>Náš web používá soubory cookies od Google Analytics (_ga).</p>
      <p>Tyto cookies slouží pro měření chování návštěvníků na webu.</p>
      <p>
        Cookies zůstane uložené po dobu dvou let, pokud nedojde k jeho smazání.
      </p>
    </animated.div>
  )
}

export default Cookies
