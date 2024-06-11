import React from 'react'
import {useForm} from 'react-hook-form'

function Signin() {
    let {register,handleSubmit}=useForm();

    function handleFormSubmit(userObj){
        console.log(userObj);
    }
  return (
    <div>
        <form className='d-block mx-auto w-50 ' onSubmit={handleSubmit(handleFormSubmit)}>
            <h3 className='text-center '>Login form</h3>
            <label htmlFor='userType'>Login as</label>
            <br></br>
            <div className='m-3 d-flex'>
                <div className='me-3'>
            <input type='radio' value='user' id='user' name='userType' {...register('userType',{required:true})}/>
            <label htmlFor='user'>User</label>
            </div>
            <div className='me-3'>
            <input type='radio' value='author' id='author' name='userType'{...register('userType',{required:true})}/>
            <label htmlFor='author'>Author</label>
            </div>
            </div>
            <div className='m-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input className='form-control' id='username' placeholder='Enter Username' {...register('username',{required:true})}/>
            </div>
            <div className='m-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input className='form-control' id='password' placeholder='Enter Password' {...register('password',{required:true})}/>
            </div>
            <button type='submit' className='btn btn-warning d-block mx-auto'>Login</button>
        </form>
    </div>
  )
}

export default Signin