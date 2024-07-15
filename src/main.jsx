import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Streaming from './streaming.jsx';
import Details from './[details].jsx';
import Header from './components/header.jsx';
import Error from './components/Error.jsx';
import NotFoundEpisodes from './components/notFoundEpisodes.jsx';
import Anime from './Home/Anime.jsx';
import Manga from './Home/Manga.jsx';
import MangaDetails from './[MangaDetails].jsx';
import Reading from './Reading.jsx';

const MainApp = () => (
  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home/Anime" element={<Anime />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/Streaming/:id" element={<Streaming />} errorElement={<NotFoundEpisodes/>} />
      <Route path="/Home/Manga" element={<Manga />}/>
      <Route path="/MangaDetails/:id" element={<MangaDetails />} />
      <Route path="/Readings/:id" element={<Reading/>}/>      
      <Route path="*" element={<Error />} />
    </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MainApp />
    </Router>
  </React.StrictMode>,
);
