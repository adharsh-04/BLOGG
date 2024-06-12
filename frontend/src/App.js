
import './App.css';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import AuthorProfile from './Pages/AuthorProfile';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
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
          element:<UserProfile/>
        },
        {
          path:'authorprofile',
          element:<AuthorProfile/>
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
