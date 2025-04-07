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
      description:
        'Built and maintained backend REST APIs using Node.js, Express.js, and MongoDB, designing schemas with Mongoose to manage user profiles and media data.Implemented secure user authentication and authorization with Express middleware, JWT tokens, and OTP codes for session management, leveraging Mongoose validations to protect user data and ensure integrity. Integrated Firebase push notifications for real-time user engagement, utilizing Swagger for API documentation and Postman for endpoint testing to ensure reliable performance and seamless collaboration with front-end development.',
      expanded: false,
    },
    {
      title: 'Data Science Extern - Beats',
      image: Beats,
      dateRange: 'June 2024 - Augst 2024',
      description:
        'Conducted sentiment analysis on 2000+ headphone reviews using Python, NLP (TextBlob), and Pandas, identifying key consumer preferences to guide product feature decisions. Performed exploratory data analysis with NumPy, Matplotlib, and Seaborn, comparing Beats and Bose feedback over six months, visualizing sentiment trends for market insights. Leveraged the Gemini API to analyze customer feedback on Beats products, uncovering strengths and concerns to inform product development strategies.',
      expanded: false,
    },
    {
      title: 'Blockhain Extern - Webacy',
      image: Webacy,
      dateRange: 'Aoril 2024 - May 2024',
      description:
        'Demonstrated expertise in SQL, Excel, and Tableau by analyzing thousands of data points, creating dashboards that reduced potential security risks. Validated data labels, improving the reliability of cybersecurity datasets and enhancing risk assessment models. Analyzed 500+ smart contract vulnerabilities and presented insights to stakeholders, improving decision-making in cybersecurity.',
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
