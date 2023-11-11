import React from 'react'
import './Body.scss'

import TrendingCourses from './TrendingCourses'

import hero_logo from '../../assets/hero_logo.jpg'

function Body() {
  return (
    <div className="body">

      <div className="body__hero">
        <img src={hero_logo} alt="hero_logo" className="hero_logo" />

        <div className="hero__content">
          <h1>Diwali Sale on now</h1>
          <p>Get big course savings for a prosperous future. Courses from ₹449 ends Nov 10.</p>
        </div> 
      </div>

      <div className="body__container">
        <TrendingCourses/>
      </div>

    </div>
  )
}

export default Body