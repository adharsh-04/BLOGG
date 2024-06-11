import React from 'react'
import { useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

function Signup() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    let navigate=useNavigate();
    let [err,setErr]=useState('');

   async function handleFormSubmit(userObj){
    try{
        let res=await axios.post('http://localhost:4000/userapi/user',userObj);
        console.log(res);
        if(res.data.message==='user created'){
            navigate('/sign-in');
        }
        else{
            setErr(res.data.message);
        }
    }catch (error) {
        setErr(error.response.data.message);
    }
       
    }
  
  return (
    <div className=''>
      
        {err.length!==0&&<p className='text-danger text-center fs-3'>{err}</p>}
        <form className='w-50 d-block mx-auto mt-3' onSubmit={handleSubmit(handleFormSubmit)}>
            <h3 className='text-center '>Registration form</h3>
            <div className='m-3 '>
            <label htmlFor='userType form-label'>UserType</label>
            <br></br>
            <div className='d-flex '>
            <div className='me-3'>
            <input type='radio' id='user' value='user' name='userType' {...register('userType',{required:true})} />
            <label htmlFor='user' className='form-label'>User</label>
            </div>
            <div className='me-3'>
            <input type='radio' id='author' value='author' name='userType' {...register('userType',{required:true})}/>
            <label htmlFor='author' className='form-label'>Author</label>
            </div>
            </div>
            </div>
            <div className='m-3'>
                <label className='form-label' htmlFor='username' >Username</label>
                <input className='form-control' id='username' placeholder='Enter username' type='text'{...register('username',{required:true})}/>
            </div>
            <div className='m-3'>
                <label className='form-label' htmlFor='email' >Email</label>
                <input className='form-control' id='email' placeholder='Enter Email' type='email' {...register('email',{required:true})}/>
            </div>
            <div className='m-3'>
                <label className='form-label' htmlFor='password' >Password</label>
                <input className='form-control' id='password' placeholder='Enter Password' type='password' {...register('password',{required:true})}/>
            </div>
            <button type='submit' className='btn btn-success d-block mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default Signup