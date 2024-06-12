
import './App.css';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import AuthorProfile from './Pages/AuthorProfile';
import Article from './Components/AuthorArticles/Article';
import AddArticle from './Components/AuthorArticles/AddArticle';
import ArticlesByAuthor from './Components/AuthorArticles/ArticlesByAuthor';
import Articles from './Components/UserArticles/Articles';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
function App() {

  const router=createBrowserRouter([
    {
      path:'',
      element:<Root/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'sign-in',
          element:<Signin/>
        },{
          path:'sign-up',
          element:<Signup/>
        },{
          path:'userprofile',
          element:<UserProfile/>,
          children:[
            {
              path:'articles',
              element:<Articles/>

            },
            {
              path:"article/:articleId",
              element:<Article/>
            },
            {
              path:'',
              element:<Navigate to='articles'/>
            }
          ]
        },
        {
          path:'authorprofile',
          element:<AuthorProfile/>,
          children:[{
            path:'new-article',
            element:<AddArticle/>
          },{
            path:'articles-by-author/:author',
            element:<ArticlesByAuthor/>
          },
        {
          path:'article/"articleId',
          element:<Article/>
        },
      {
        path:'',
        element:<Navigate to='articles-by-author/:author'/>
      }]
        }

      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
