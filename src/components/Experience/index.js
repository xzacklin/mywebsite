import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Boxes from './Boxes'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'W',
    'o',
    'r',
    'k',
    '',
    'E',
    'x',
    'p',
    'e',
    'r',
    'i',
    'e',
    'n',
    'c',
    'e',
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
          <Boxes />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
