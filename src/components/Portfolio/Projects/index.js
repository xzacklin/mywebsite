import React, { useState } from 'react'
import './index.scss'
import Quilly from '../../../assets/images/smartdiarylogo.png'
import Beats from '../../../assets/images/housepredict.png'
import Webacy from '../../../assets/images/tetris.jpeg'

const Projects = () => {
  const [boxes, setBoxes] = useState([
    {
      title: 'Smart Diary - Python | HTML | CSS',
      image: Quilly,
      dateRange: 'October 2024 - January 2025',
      description:
        'Led a team of 4 in the development of a full-stack wellness diary web application using Flask, featuring a child-friendly diagnostic quiz and diary interface. Implemented sentiment analysis and keyword mapping with TextBlob to generate personalized wellness scores and tailored advice.',
      expanded: false,
    },
    {
      title: ' Real Estate Predictor - Python',
      image: Beats,
      dateRange: 'June 2024 - Augst 2024',
      description:
        'Developed a housing price prediction model utilizing economic indicators to forecast real estate prices by merging, cleaning, and analyzing datasets, using Pandas, Numpy, Scikit Learn, Keras,  from the Federal Reserve and Zillow, with a focus on time series analysis.',
      expanded: false,
    },
    {
      title: 'Terminal Tetris - C',
      image: Webacy,
      dateRange: 'Aoril 2024 - May 2024',
      description: 'Analyzed smart contracts',
      expanded: false,
    },
  ])

  const toggleBox = (index) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box, idx) =>
        idx === index
          ? { ...box, expanded: !box.expanded }
          : { ...box, expanded: false }
      )
    )
  }

  return (
    <div className="expandable-project-container">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`expandable-project ${box.expanded ? 'expanded' : ''}`}
          onClick={() => toggleBox(index)}
        >
          <div className="header">
            <img src={box.image} alt={box.title} className="box-image" />
            <div className="header-text">
              <h2>{box.title}</h2>
              <span className="date-range">{box.dateRange}</span>
            </div>
          </div>
          {box.expanded && (
            <div className="content">
              <p>{box.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Projects
