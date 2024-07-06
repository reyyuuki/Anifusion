import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './details.jsx';
import Streaming from './streaming.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/details/:id",
    element: <Details/>,
  },
  {
    path:"/Streaming/:id",
    element: <Streaming/>,
    children: [
      {
        path: "/Streaming/:id/episodes/:episodeId",
        element: <Streaming />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
