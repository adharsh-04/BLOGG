import React from 'react'

import './AuthorProfile.css'
import { NavLink,Outlet } from 'react-router-dom'

function AuthorProfile() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-evenly mt-2'>
        <button className='btn btn-warning flex-item'><NavLink id='navlink'to='articles-by-author/:author'>View Articles</NavLink></button>
        <button className='btn btn-success flex-item'><NavLink to='new-article' id='navlink'>Add Article</NavLink></button>
      </div>
     <Outlet/>
    </div>
  )
}

export default AuthorProfile