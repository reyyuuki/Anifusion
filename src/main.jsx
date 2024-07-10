import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Streaming from './streaming.jsx';
import Details from './[details].jsx';
import Header from './components/header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div style={"font-size:40px"} ></div>
  },
  {
    path: "/details/:id",
    element: <Details/>,
  },
  {
    path:"/Streaming/:id",
    element: <Streaming/>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
