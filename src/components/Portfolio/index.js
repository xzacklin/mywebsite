import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Projects from './Projects'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'P',
    'o',
    'r',
    't',
    'f',
    'o',
    'l',
    'i',
    'o',
    '',
    'P',
    'r',
    'o',
    'j',
    'e',
    'c',
    't',
    's',
  ]
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <Projects />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
