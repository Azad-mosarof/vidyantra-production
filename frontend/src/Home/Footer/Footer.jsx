//command for creating component: rcc
import React from 'react'
import './Footer.scss'

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

/**
 * Footer component
 * @returns Footer component
 * */
function Footer() {

  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer--content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Sint asperiores possimus voluptatum? Neque, nihil delectus ullam maiores quibusdam nostrum error ad omnis, cumque quidem 
            aspernatur tenetur repellat.
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>

          <div className="c-item">
            <FaLocationArrow/>
            <div className="text">Saltlake, TCS Gitobitan, Kolkata, WestBengal, 700001</div>
          </div>

          <div className="c-item">
            <FaMobileAlt/>
            <div className="text">
              Phone: 7908-589-9984
            </div>
          </div>

          <div className="c-item">
            <FaEnvelope/>
            <div className="text">
              Email: misarofazad@gmail.com
            </div>
          </div>
        </div>

        <div className="col">
          <div className="title">Social Media</div>
          <span className="text">Instagram</span>
          <span className="text">X</span>
          <span className="text">Facebook</span>
          <span className="text">Telegram</span>
          <span className="text">Youtube</span>
          <span className="text">Whatsapp</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text" >Courses</span>
          <span className="text">Search</span>
          <span className="text">Blog</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
        
      </div>
      
      <div className="bottom--bar">
        <dib className="bottombar--content">
          <div className="text">
            VIDYANTRA 2023 CREATED BY Vidyantra. Online career development platform.
          </div>
        </dib>
      </div>
    </footer>
  )
}

export default Footer
