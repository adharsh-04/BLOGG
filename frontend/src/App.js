
import './App.css';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
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
