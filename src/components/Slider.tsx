import React, { useRef, useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'

import Video from '../assets/images/bgVideo1.mp4'
import Image from '../assets/images/slide2.jpg'

const Slider = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [index, setIndex] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024)

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024)
  }

  const texts = [
    { id: 0, text: 'Chiptuning osobních aut' },
    { id: 1, text: 'Chiptuning nákladních aut' },
    { id: 2, text: 'Chiptuning zemědělské techniky' },
  ]

  const textTransitions = useTransition(showHeader ? texts[index] : [], {
    from: { opacity: 0, transform: 'translate3d(0,-15%,0) scale3d(1,1.1,1)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0) scale3d(1,1,1)' },
    leave: { opacity: 0, transform: 'translate3d(0,15%,0) scale3d(1,0.95,1)' },
    config: config.gentle,
    key: texts[index].id,
  })

  useEffect(() => {
    const headerInterval = setInterval(() => setShowHeader(true), 250)
    return () => clearInterval(headerInterval)
  }, [])

  useEffect(() => {
    if (isDesktop) {
      if (videoRef.current) {
        videoRef.current.setAttribute('muted', '')
      }
    }
  }, [isDesktop])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((state) => (state + 1) % 3)
    }, 4000)

    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return (
    <div className="sliderContainer">
      {textTransitions((props, item) => (
        <div className="sliderText">
          <h1>
            <span>A</span>utorizovaný chiptuning QUANTUM
          </h1>
          <animated.p style={props}>{item.text}</animated.p>
        </div>
      ))}

      <div className="sliderVideo">
        {isDesktop ? (
          <video
            src={Video}
            ref={videoRef}
            playsInline
            autoPlay
            loop
            disablePictureInPicture
            muted
          />
        ) : (
          <img src={Image} alt="Chiptuning Brno Banner" />
        )}
      </div>
    </div>
  )
}

export default Slider
