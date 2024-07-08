import Header from "./components/header";
import {
  FetchById,
  FetchEpisodes,
  FetchEpisodesId,
} from "./components/apiFetch";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Streaming.css";
import Loader from "./components/Loader";
import "./css/Episodes.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import AnimeInfo from "./components/AnimeInfo";

const Streaming = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [selectEpisode, setSelectEpisode] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const response = await FetchEpisodes(id);
        if (response) {
          setData(response);
          setSelectEpisode(response[0].id);
          setCurrentTitle(response[0].title);
          setPoster(response[0].image);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      if (selectEpisode) {
        try {
          const streamLink = await FetchEpisodesId(selectEpisode);
          if (streamLink) {
            setEpisodeData(streamLink);
          }
          setLoadingData(false);
        } catch (error) {
          console.log("Error:", error);
          setLoadingData(false);
        }
      }
    };

    fetchEpisodeData();
  }, [selectEpisode]);

  const handleEpisodeSelect = (episode, EpisodeTitle,Image) => {
    if (episode) {
      setSelectEpisode(episode);
      setCurrentTitle(EpisodeTitle);
      setPoster(Image);
    }
  };

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="StreamingContainer">
            {episodeData && (
              <MediaPlayer
                playsInline
                title={currentTitle}
                src={episodeData.sources[3].url}
                className="Player"
                poster={poster}
              >
                <MediaProvider />
                <DefaultVideoLayout 
                icons={defaultLayoutIcons} 
                />
              </MediaPlayer>
            )}
            <div className="EpisodesWrapper">
              <h1>Episodes</h1>
              {data &&
                data.map((item, index) => (
                  <div
                    onClick={() => handleEpisodeSelect(item.id, item.title,item.image)}
                    className={`EpisodesRow ${
                      item.id === selectEpisode ? "ActiveRow" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="EpisodeImage"
                    />
                    <div className="EpisodesInfo">
                      <h3>Episode {item.number}</h3>
                      <p>
                        {item.title.length > 25
                          ? item.title.substring(0, 22) + "..."
                          : item.title}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <AnimeInfo/>
        </>
      )}
    </>
  );
};

export default Streaming;
