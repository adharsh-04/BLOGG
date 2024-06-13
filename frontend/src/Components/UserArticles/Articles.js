import { useState,useEffect } from 'react';
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { axiosWithToken } from '../AxiosWithToken';

function Articles() {
  const [articlesList,setArticlesList]=useState([]);
  let navigate=useNavigate();

 
  
  const getArticlesOfCurrentAuthor=async()=>{
    let res=await axiosWithToken.get(`http://localhost:4000/userapi/articles`)
   
    setArticlesList(res.data.payload);
  }
  useEffect(()=>{
    getArticlesOfCurrentAuthor();

  },[])

  const readArticleByArticleId=(articleObj)=>{
    navigate(`../article/${articleObj.articleId}`,{ state: articleObj })
    

  }
  return (
    <div>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-3'>
      {articlesList.map((article)=>(
      <div className='col' key={article.articleId}>
        <div className='card h-100'>
          <div className='card-body'>
            <h5 className='card-title'>{article.title}</h5>
            <p className='card-text'>
              {article.content.substring(0,80)+"...."}
            </p>
            <button className='btn btn-danger' onClick={() => { readArticleByArticleId(article) }}>
              Read More
              
            </button>
          </div>
          <div className='card-footer'>
            <small className='text-body-secondary'>
              Last updated on {article.dateOfModification}
            </small>
          </div>
        </div>
      
      </div>
      ))}
    </div>
  </div>
  )
}

export default Articles