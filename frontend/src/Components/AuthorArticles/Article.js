import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { FaEdit } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { axiosWithToken } from '../AxiosWithToken';
function Article() {
  let { state } = useLocation();
  let { currentUser } = useSelector((state) => state.userAuthorLoginReducer);

  let {register,handleSubmit}=useForm();
 let [comment,setComment]=useState("")
  const writeComment=async(commentObj)=>{
        commentObj.username=currentUser.username;
       let res= await axiosWithToken.post(`http://localhost:4000/userapi/comment/${state.articleId}`,commentObj)
       if(res.data.message==='comment posted'){
        setComment(res.data.message);
         
       }
  }

  return (
    <div>
      <div className='card m-2 px-4 bg-light'>
        <div className='card-body'>
          {currentUser.userType === 'author' && (<>
            <div class='d-flex justify-content-end'>

              <button class='btn btn-warning me-2'><FaEdit /></button>
              <button class='btn btn-danger'><MdDelete /></button>
            </div>
          </>)}
            < h3 style={{ whiteSpace: "pre-line" }} className='text-center'><span className='text-danger'>Title</span>:{state.title}</h3>
        <h4 style={{ whiteSpace: "pre-line" }} ><span className='text-danger'>Category</span>:{state.category}</h4>
        <div className='d-inline g-3'>
          <h5 style={{ whiteSpace: "pre-line" }} className='text-dark'><span className='text-primary'>DateOfCreation</span>:{state.dateOfCreation}</h5>
          <h5 style={{ whiteSpace: "pre-line" }} className='text-dark'><span className='text-primary'>DateOfModification</span>:{state.dateOfModification}</h5>
        </div>


        <p className='fs-5 lead' style={{ whiteSpace: "pre-line" }}><span className='text-danger'>Content</span>:{state.content}</p>
        <div>
          <div className='comments my-4'>
            {state.comments.length===0?(
              <p className='display-4'>No Comments Yet..</p>
            ):(
              state.comments.map((commentObj,ind)=>{
                return(
                  <div key={ind} className='bg-light p-3 card g-2'>
                    <p className='fs-4' style={{color:"dodgerblue",textTransform:"capitalize"}}><FaUserAlt className='fs-2 me-2 btn btn-red'/><span className='text-warning'>Username</span>:{commentObj.username}</p>
                    <p className='fs-4'  style={{fontFamily:"sans-serif"}}><span className='text-warning'>Comment</span>:{commentObj.comment}</p>
                  </div>
                )
              })
            )}

          </div>
        </div>
        <h2>{comment}</h2>
        {currentUser.userType==='user'&&(<>
        <form onSubmit={handleSubmit(writeComment)}>
          <input type='text' {...register('comment')} className='form-control mb-2' placeholder='Write comment here...'/>
          <button className='btn btn-primary d-block mx-auto' type='submit'>POST</button>
        </form>
        </>)}

      </div>
    </div>
    </div >
  )
}

export default Article