import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './index.scss'

import Quilly from '../../../assets/images/quilly.png'
import Beats from '../../../assets/images/beats.png'
import Webacy from '../../../assets/images/webacy.webp'

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const cards = [
  {
    title: 'Software Engineer – Quilly',
    image: Quilly,
    dateRange: 'October 2024 – January 2025',
    description:
      'Built backend REST APIs, secured auth with JWT, and integrated Firebase push notifications.',
  },
  {
    title: 'Data Science Extern – Beats',
    image: Beats,
    dateRange: 'June 2024 – August 2024',
    description:
      'Analyzed 2000+ reviews using NLP, visualized trends with Seaborn, and used Gemini API for feedback.',
  },
  {
    title: 'Blockchain Extern – Webacy',
    image: Webacy,
    dateRange: 'April 2024 – May 2024',
    description:
      'Audited smart contracts, used Tableau for dashboards, and enhanced cybersecurity datasets.',
  },
]

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                */
/* ------------------------------------------------------------------ */

const containerV = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // You can add delayChildren if you want to push the start of children animations further out
      staggerChildren: 0.45,
      staggerDirection: -1,
    },
  },
}

// Row: Remove vertical offset and use a spring with tuned damping
const rowV = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
}

/* Arrow animation variant */
const arrowV = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1.6,
    transition: { duration: 0.3, delay: 0.25 },
  },
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const Boxes = () => {
  const [expanded, setExpanded] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [highlightIndex, setHighlightIndex] = useState(null)

  /* ---------- click handler --------------------------------------- */
  const toggle = (i) => setExpanded(expanded === i ? null : i)

  /* ---------- after mount: run one‑time traversal ----------------- */
  // Use useEffect for side effects to ensure the animation doesn't restart unexpectedly.
  useEffect(() => {
    const totalDelay = cards.length * 450 + 2000 // 0.45 s per card
    const startAt = setTimeout(() => {
      const traverse = (i) => {
        if (i < 0) return
        setCurrentIndex(i)
        setExpanded(i)
        // Show arrow 700 ms later then wait 3 s before moving to the next card
        const id1 = setTimeout(() => {
          setHighlightIndex(i)
          const id2 = setTimeout(() => traverse(i - 1), 3000)
          // Cleanup id2 in the inner function if needed
          return () => clearTimeout(id2)
        }, 700)
        // Return cleanup for id1 if needed
        return () => clearTimeout(id1)
      }
      traverse(cards.length - 1)
    }, totalDelay)
    return () => clearTimeout(startAt)
  }, [])

  /* ---------- render ---------------------------------------------- */
  return (
    <motion.div
      className="expandable-box-wrapper"
      variants={containerV}
      initial="hidden"
      animate="visible"
    >
      <div className="expandable-box-container">
        {cards.map((card, i) => (
          <motion.div key={i} className="linked-list-row" variants={rowV}>
            {i > 0 && (
              <motion.div
                className={`arrow ${highlightIndex === i ? 'arrow-active' : ''}`}
                variants={arrowV}
              >
                ←
              </motion.div>
            )}

            <div
              className={`expandable-box ${
                expanded === i ? 'expanded' : ''
              } ${currentIndex === i ? 'box-active' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="header">
                <img src={card.image} alt={card.title} className="box-image" />
                <div className="header-text">
                  <h2>{card.title}</h2>
                  <span className="date-range">{card.dateRange}</span>
                </div>
              </div>

              {expanded === i && (
                <div className="content">
                  <p>{card.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Boxes
