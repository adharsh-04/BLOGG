
import axios from 'axios';
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddArticle() {
  let {register,handleSubmit}=useForm();
  let [err,setErr]=useState("")
  let navigate=useNavigate();
  let{currentUser}=useSelector(state=>state.userAuthorLoginReducer)

  //adding token to the axios
  let token=localStorage.getItem('token');
  const axiosWithToken=axios.create({headers:{Authorization:`Bearer ${token}`}})
  const handleFormSubmit=async(article)=>{
    article.dateOfCreation=new Date();
    article.dateOfModification=new Date();
    article.articleId=Date.now();
    article.username=currentUser.username;
    article.comments=[];
    article.status=true;
    
    //make http post request
    let res=await axiosWithToken.post('http://localhost:4000/authorapi/article',article)
    console.log(res);
    if(res.data.message==='New article created'){
      navigate(`/authorprofile/articles-by-author/${currentUser.username}`)
      
    }
    else{
      setErr(res.data.message);
      
    }
  }
 
  return (
    <div>
      <form className='w-50 card d-block mx-auto mt-2 bg-light' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='m-3'>
          <label className='form-label' htmlFor='title'>Title:</label>
          <input className='form-control' type='text' id='title' placeholder='Enter title' {...register('title',{required:true})}/>
        </div>
        <div className='m-3'>
          <label className='form-label' htmlFor='category'>
            Category:
            <select className='form-control mt-1'id='category' {...register('category',{required:true})}>
              <option value=''>Select a Category</option>
              <option value='programming'>programming</option>
              <option value='science'>science</option>
              <option value='Fashion'>Fashion</option>
              <option value='lifeStyle'>lifeStyle</option>
            </select>
          </label>
        </div>
        <div className='m-2'>
          <label className='form-label' >Content:</label>
          <textarea className='form-control'  cols='40' rows='10' placeholder='Enter content'{...register('content',{required:true})}/>

        </div>
        <button className='btn btn-primary d-block mx-auto'type='submit' >POST</button>
      </form>
    </div>
  )
}

export default AddArticle