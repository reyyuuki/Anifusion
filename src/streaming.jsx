import Header from "./components/header";
import { FetchById, FetchEpisodes } from "./components/apiFetch";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Player from "./components/player";
import "./css/Streaming.css";
import Loader from "./components/Loader";
import './css/Episodes.css';

const Streaming = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [episodeData, setEpisodeData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectEpisode, setSelectEpisode] = useState();
  useEffect(() => {
    const Fetching = async () => {
      console.log(id);
      try {
        const response = await FetchById(id);
        
        if (response ) {
          setData(response);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
      finally{
        setLoadingData(false);
      }
    };
   
    Fetching();
  }, []);
  const handleEpisodeSelect = (episode) => {
    setSelectEpisode(episode);
  };
  

  return (
    <>
    {loadingData ? <Loader /> :
    <>
      <Header />
            <div className="EpisodesContainer">
                <div className="EpisodesWrapper">
                    <h1>Episodes</h1>
                    {data.episodes.map((item, index) => {
                        return (
                            <div onClick={handleEpisodeSelect(item.id)} className="EpisodesRow" key={index}>
                                <img src={item.image} alt={item.title} className='EpisodeImage' />
                                <div  className="EpisodesInfo">
                                    <h3>{item.title}</h3>
                                    <h2>{item.id}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
      </>
    }
    </>
  );
};

export default Streaming;
