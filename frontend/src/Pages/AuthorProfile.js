import React from 'react'
import { useSelector } from 'react-redux';
import './AuthorProfile.css'
import { NavLink,Outlet } from 'react-router-dom'

function AuthorProfile() {
  let {currentUser}=useSelector((state)=>state.userAuthorLoginReducer);
  console.log(currentUser.username);

  return (
    <div className='container'>
      <div className='d-flex justify-content-evenly mt-2'>
        
        <button className='btn btn-warning flex-item'><NavLink id='navlink'to={`/authorProfile/articles-by-author/${currentUser.username}`}>View Articles</NavLink></button>
        <button className='btn btn-success flex-item'><NavLink to='new-article' id='navlink'>Add Article</NavLink></button>
      </div>
     <Outlet/>
    </div>
  )
}

export default AuthorProfile