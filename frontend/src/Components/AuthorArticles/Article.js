import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Article() {
  let { state } = useLocation();
  let { currentUser } = useSelector((state) => state.userAuthorLoginReducer);

  let {register}=useForm();

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
        {currentUser.userType==='user'&&(<>
        <form >
          <input type='text' {...register('comment')} className='form-control mb-2' placeholder='Write comment here...'/>
          <button className='btn btn-primary d-block mx-auto'>POST</button>
        </form>
        </>)}

      </div>
    </div>
    </div >
  )
}

export default Article