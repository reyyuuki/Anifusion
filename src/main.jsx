import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Streaming from './streaming.jsx';
import Details from './[details].jsx';
import Header from './components/header.jsx';
import Error from './components/Error.jsx';
import NotFoundEpisodes from './components/notFoundEpisodes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} errorElement={<Error />} />
        <Route path="/details/:id" element={<Details />} errorElement={<Error />} />
        <Route path="/Streaming/:id" element={<Streaming />} errorElement={<NotFoundEpisodes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
