import React, { useState } from 'react'
import './index.scss'
import Quilly from '../../../assets/images/quilly.png'
import Beats from '../../../assets/images/beats.png'
import Webacy from '../../../assets/images/webacy.webp'

const Boxes = () => {
  const [boxes, setBoxes] = useState([
    {
      title: 'Software Engineer - Quilly',
      image: Quilly,
      dateRange: 'October 2024 - January 2025',
      description: 'Pioneered server side apis for a moble app.',
      expanded: false,
    },
    {
      title: 'Data Science Extern - Beats',
      image: Beats,
      dateRange: 'June 2024 - Augst 2024',
      description: 'Analyzed thousands of Product reviews.',
      expanded: false,
    },
    {
      title: 'Blockhain Extern - Webacy',
      image: Webacy,
      dateRange: 'Aoril 2024 - May 2024',
      description: 'Analyzed smart contracts',
      expanded: false,
    },
  ])

  const toggleBox = (index) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box, idx) =>
        idx === index ? { ...box, expanded: !box.expanded } : box
      )
    )
  }

  return (
    <div className="expandable-box-container">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`expandable-box ${box.expanded ? 'expanded' : ''}`}
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

export default Boxes
