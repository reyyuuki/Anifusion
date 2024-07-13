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
import Error from './components/Error.jsx';
import NotFoundEpisodes from './components/notFoundEpisodes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
  },
  {
    path: "/details/:id",
    element: <Details/>,
    errorElement:<Error/>,
  },
  {
    path:"/Streaming/:id",
    element: <Streaming/>,
    errorElement:<NotFoundEpisodes/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
