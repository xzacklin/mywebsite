import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(true)
  const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']
  const refForm = useRef()

  useEffect(() => {
    // Set letter animation class after 6 seconds
    const animationTimer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    // Simulate loader duration (e.g., 3 seconds)
    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(loaderTimer)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert(
            'Message successfully sent! I will get back to you within 1 to 2 business days.'
          )
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      {isLoading ? (
        // Display the loader during the simulated loading period
        <Loader type="pacman" />
      ) : (
        <div className="container contact-page fade-in">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={5}
              />
            </h1>
            <p>
              I'm always looking to learn something new and gain new
              experiences. If you're looking to collaborate in any way or have
              an inquiry, please don't hesitate to reach out!
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required />
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="send" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      )}
      <Loader type="pacman" style={{ display: isLoading ? 'block' : 'none' }} />

      {}
      <a
        href="https://www.linkedin.com/in/xavier-zacklin/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </>
  )
}

export default Contact
