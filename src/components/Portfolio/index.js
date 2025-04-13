import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Projects from './Projects'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true)
  const [visibleCards, setVisibleCards] = useState(0)

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
    const letterTimer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(letterTimer)
      clearTimeout(loadingTimer)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < 3) return prev + 1
          clearInterval(interval)
          return prev
        })
      }, 400)
    }
  }, [loading])

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
        </div>

        {loading ? (
          <div className="loader-wrapper">
            <Loader type="pacman" />
          </div>
        ) : (
          <Projects visibleCount={visibleCards} />
        )}
      </div>
    </>
  )
}

export default Portfolio
