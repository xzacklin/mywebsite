import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Boxes from './Boxes'

import './index.scss' // retain your local styles

const Experience = () => {
  const [phase, setPhase] = useState('loading')
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

  /* ---------------- timers ---------------------------------------- */
  useEffect(() => {
    const id1 = setTimeout(() => setPhase('content'), 2000) // switch from loader → content
    const id2 = setTimeout(() => setLetterClass('text-animate-hover'), 6000)
    return () => {
      clearTimeout(id1)
      clearTimeout(id2)
    }
  }, [])

  /* ---------------- variants -------------------------------------- */
  const loaderV = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  // Remove y-offset to prevent vertical slide-down when content mounts
  const contentV = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
  }

  /* ---------------- render ---------------------------------------- */
  return (
    <AnimatePresence mode="wait">
      {phase === 'loading' ? (
        <motion.div
          key="loader"
          {...loaderV}
          transition={{ duration: 0.6 }}
          className="loader-wrapper"
        >
          <Loader type="pacman" />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          {...contentV}
          transition={{ duration: 0.6 }}
          className="container work-page"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Experience
