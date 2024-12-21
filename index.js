import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NextVideo from './NextVideo';



const App=()=>{
  return <div>
    <Navbar/>
    <Outlet/>
  </div>

}

const ways=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
       element:<Body/>,
      },
      {
        path:"/videos/:id",
        element:<NextVideo/>
      }
    ]
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

