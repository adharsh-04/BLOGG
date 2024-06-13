
import { axiosWithToken } from '../AxiosWithToken';
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ArticlesByAuthor() {
  const [articlesList,setArticlesList]=useState([]);
  let navigate=useNavigate();
  let {currentUser}=useSelector((state)=>state.userAuthorLoginReducer);
  function ISOtoUTC(iso) {
    let date = new Date(iso).getUTCDate();
    let month = new Date(iso).getUTCMonth()+1;
    let year = new Date(iso).getUTCFullYear();
    return `${date}/${month}/${year}`;
  }
  
  const getArticlesOfCurrentAuthor=async()=>{
    let res=await axiosWithToken.get(`http://localhost:4000/authorapi/articles/${currentUser.username}`)
   
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
                Last updated on {ISOtoUTC(article.dateOfModification)}
              </small>
            </div>
          </div>
        
        </div>
        ))}
      </div>
    </div>
  )
}

export default ArticlesByAuthor