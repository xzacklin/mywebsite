import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPython,
  faCss3,
  faJava,
  faHtml5,
  faAmazon,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(true)
  const nameArray = ['A', 'b', 'o', 'u', 't', '', 'M', 'e']

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(loaderTimer)
    }
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loader type="pacman" />
      ) : (
        <div className="container abt-page fade-in">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={8}
              />
            </h1>
            <p>
              I am an ambitious full-stack developer with a a strong sense of
              teamwork and effective communication. I approach challenges with
              an analytical mindset and a robust technical foundation. I am
              always eager to learn, adapt, and explore new technologies with an
              open mind. Im passionate about user experience, machine learning,
              protecting data, and applied cryptography.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color="5ED4F4" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faAmazon} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJava} color="#EC4D28" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faPython} color="#ffd700" />
              </div>
            </div>
          </div>
        </div>
      )}
      {}
      <Loader type="pacman" style={{ display: isLoading ? 'block' : 'none' }} />
    </div>
  )
}

export default About
