import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'P',
    'e',
    'r',
    's',
    'o',
    'n',
    'a',
    'l',
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
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
