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
    <div className='container-fluid text-white  d-flex justify-content-between ' id='header'  >
       <div className=''>
        <img src='https://www.logodesignlove.com/images/literal/blue-circle-logo.jpg' id='img' alt=''/>
       </div>
        <div className='d-flex justify-content-evenly align-items-center'>
            
           {loginUserStatus===false?(<>
            <div className='p-3 ' id='link'>
                <NavLink className='text-white' id='navlink' to=''>Home</NavLink>
            </div>
            <div className='p-3 ' id='link'>
                <NavLink className='text-white' id='navlink' to='sign-up'>Signup</NavLink>
            </div>
            <div className='p-3' id='link'>
                <NavLink className='text-white' id='navlink' to='sign-in'>Signin</NavLink>
            </div></>):(<>
             <div className=' d-flex' id='link'>
                <p className='fs-4 flex-item'>Welcome {currentUser.username}(<span className='fs-5 text-danger'>{currentUser.userType}</span>)</p>
             <NavLink to='' className='text-white fs-4 flex-item text-warning'id='navlink' onClick={SignOut}>SignOut</NavLink>
         </div></>)}
           
        </div>

    </div>
  )
}

export default Header