import React from 'react'
import './index.scss'
import DevLeveling from '../../../assets/images/dev-leveling.png'
import RealEstatePredictor from '../../../assets/images/housepredicter.png'
import SmartDiary from '../../../assets/images/smartdiarylogo.png'

const Projects = ({ visibleCount }) => {
  const portfolioItems = [
    {
      image: DevLeveling,
      title: 'Dev Leveling – Spring Boot',
      description:
        'Architected a “Solo Leveling”–themed microservices platform in Spring Boot (MVC) with Hibernate and PostgreSQL, enabling CS students to gamify and track job-prep progress.',
      url: 'https://github.com/xzacklin/Dev-Leveling.git',
    },
    {
      image: SmartDiary,
      title: 'Smart Diary – Python | HTML | CSS',
      description:
        'Led a team of 4 in the development of a wellness diary app with sentiment analysis and tailored advice using TextBlob and Flask.',
      url: 'https://github.com/xzacklin/aidiary.git',
    },
    {
      image: RealEstatePredictor,
      title: 'Real Estate Predictor – Python',
      description:
        'Built a time series prediction model using Zillow + Federal Reserve data to forecast home prices with Scikit-Learn and Keras.',
      url: 'https://github.com/xzacklin/House-Price-Predictor.git',
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
