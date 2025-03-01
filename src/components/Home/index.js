import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-x.png'
import LogoBig from '../../assets/images/profile.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'v', 'i', 'e', 'r']
  const jobArray = [
    'a',
    'n',
    ' ',
    'a',
    's',
    'p',
    'i',
    'r',
    'i',
    'n',
    'g',
    ' ',
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'e',
    'r',
  ]
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Full Stack Developer / Computer Science Student </h2>
        <Link to="/contact" className="flat-button">
          Contact Me{' '}
        </Link>
      </div>
      <div className="image-container">
        <img src={LogoBig} alt="Big Logo" className="big-logo" />
      </div>
    </div>
  )
}

export default Home
