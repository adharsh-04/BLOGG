import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import {useSelector,useDispatch} from 'react-redux'
import { resetState } from '../../Redux/slices/userAuthorSlice'

function Header() {
    let dispatch=useDispatch();
    let{loginUserStatus,errorOccured,errMsg,currentUser}=useSelector(state=>state.userAuthorLoginReducer)
    function SignOut(){
        localStorage.removeItem('token')
        dispatch(resetState());

    }
  return (
    <div className='container-fluid bg-light  d-flex justify-content-between' >
       <div className=''>
        <img src='https://www.logodesignlove.com/images/literal/blue-circle-logo.jpg' id='img' alt=''/>
       </div>
        <div className='d-flex justify-content-evenly align-items-center'>
           {loginUserStatus===false?(<>
            <div className='p-3 ' id='link'>
                <NavLink to=''>Home</NavLink>
            </div>
            <div className='p-3 ' id='link'>
                <NavLink to='sign-up'>Signup</NavLink>
            </div>
            <div className='p-3' id='link'>
                <NavLink to='sign-in'>Signin</NavLink>
            </div></>):(<>
             <div className='p-3' id='link'>
                <p className='fs-3'>Welcome {currentUser.username}</p>
             <NavLink to='' onClick={SignOut}>SignOut</NavLink>
         </div></>)}
           
        </div>

    </div>
  )
}

export default Header