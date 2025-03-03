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
      dateRange: 'May 2024 - September 2024',
      description: 'Analyzed thousands of product reviews.',
      expanded: false,
    },
    {
      title: 'Data Science Extern - Beats',
      image: Beats,
      dateRange: 'May 2023 - September 2023',
      description:
        'This is the description for experience two. Click to read more about what was accomplished here.',
      expanded: false,
    },
    {
      title: 'Blockhain Extern - Webacy',
      image: Webacy,
      dateRange: 'May 2022 - September 2022',
      description:
        'This is the description for experience three. More information will be visible once the box is clicked.',
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
