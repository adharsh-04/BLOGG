import React from 'react'
import './Footer.css'

import {NavLink} from 'react-router-dom'
function Footer() {
  return (
    <div id='footer'>
      <footer>
      <div className='d-flex justify-content-evenly align-items-center p-2'>
        <div>
          <ul className='px-4'>
            <li><h5>Quick links</h5></li>
            <li><NavLink id='navlink' to=''>Home</NavLink></li>
            <li><NavLink id='navlink' to='sign-in'>Login</NavLink></li>
            <li><NavLink id='navlink' to='sign-up'>Register</NavLink></li>
            <li>Explore more</li>
          </ul>
        </div>
        <div>
          <ul className='px-2'>
            <li><h5>Contact us</h5></li>
            <li>KPHB COLONY</li>
            <li>XXXXXXXX</li>
            <li>HYDERABAD</li>
          </ul>
        </div>
        </div>
        </footer>

    </div>
  )
}

export default Footer