import React from 'react'
import './index.scss'
import Quilly from '../../../assets/images/smartdiarylogo.png'
import Beats from '../../../assets/images/housepredicter.png'
import Webacy from '../../../assets/images/terminaltetris.png'

const Projects = ({ visibleCount }) => {
  const portfolioItems = [
    {
      image: Quilly,
      title: 'Smart Diary – Python | HTML | CSS',
      description:
        'Led a team of 4 in the development of a wellness diary app with sentiment analysis and tailored advice using TextBlob and Flask.',
      url: 'https://github.com/xzacklin/aidiary.git',
    },
    {
      image: Beats,
      title: 'Real Estate Predictor – Python',
      description:
        'Built a time series prediction model using Zillow + Federal Reserve data to forecast home prices with Scikit-Learn and Keras.',
      url: 'https://github.com/xzacklin/House-Price-Predictor.git',
    },
    {
      image: Webacy,
      title: 'Terminal Tetris – C',
      description:
        'Rebuilt Tetris in C for the terminal, focusing on game loop architecture, memory management, and grid rendering logic.',
      url: 'https://github.com/xzacklin/Terminal-Tetris.git',
    },
  ]

  return (
    <div className="images-container">
      {portfolioItems.map((project, idx) => (
        <div
          key={idx}
          className={`image-box ${idx < visibleCount ? 'slide-up' : 'hidden'}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-image"
          />
          <div className="content">
            <p className="title">{project.title}</p>
            <h4 className="description">{project.description}</h4>
            <button className="btn" onClick={() => window.open(project.url)}>
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
