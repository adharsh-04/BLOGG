import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='container-fluid bg-light  d-flex justify-content-between' >
       <div className=''>
        <img src='https://www.logodesignlove.com/images/literal/blue-circle-logo.jpg' id='img' alt=''/>
       </div>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div className='p-3 ' id='link'>
                <NavLink to=''>Home</NavLink>
            </div>
            <div className='p-3 ' id='link'>
                <NavLink to='sign-up'>Signup</NavLink>
            </div>
            <div className='p-3' id='link'>
                <NavLink to='sign-in'>Signin</NavLink>
            </div>
           
        </div>

    </div>
  )
}

export default Header