import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/login/Login'
import Layout from './component/Layout';
import Register from "./component/Register/Register"
import Tutorials from "./component/Tutorials/Tutorials"
import Reactjs from './component/Tutorials/Reactjs';
import Angular from './component/Tutorials/Angular';
import Vue from './component/Tutorials/Vue';


function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path:"tutorials",
          element:<Tutorials />,
          children:[
            {
              path:"reactjs",
              element:<Reactjs />
            },
            {
              path:"angular",
              element:<Angular />
            },
            {
              path:"vue",
              element:<Vue />
            },
          ]
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;







