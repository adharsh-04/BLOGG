import React from 'react'
import { Outlet } from 'react-router-dom'

function UserProfile() {
  return (
    <div className='container'>
       {/* <NavLink to='/userprofile/articles' className='text-primary' style={{textDecoration:"none"}}>Articles</NavLink> */}
       <Outlet/>
    </div>
  )
}

export default UserProfile