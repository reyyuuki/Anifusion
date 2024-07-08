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

const Streaming = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [selectEpisode, setSelectEpisode] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await FetchEpisodes(id);
        if (response) {
          setData(response);
          setSelectEpisode(response[0].id);
          setCurrentTitle(response[0].title);
          if (selectEpisode) {
            const StreamLink = await FetchEpisodesId(selectEpisode);
            if (StreamLink) {
              setEpisodeData(StreamLink);
              setLoadingData(false);
            }
          }
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    Fetching();
  }, [selectEpisode, episodeData]);
  const handleEpisodeSelect = (episode,EpisodeTitle) => {
    if (episode) {
      setSelectEpisode(episode);
      setCurrentTitle(EpisodeTitle);
    }
  };

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <>
          <Header />
          {episodeData && (
            <div className="MediaPlayer">
              <MediaPlayer
                playsInline
                title={currentTitle}
                src={episodeData.sources[3].url}
              >
                <MediaProvider />
                <DefaultVideoLayout
                  icons={defaultLayoutIcons}
                />
              </MediaPlayer>
            </div>
          )}
          <div className="EpisodesContainer">
            <div className="EpisodesWrapper">
              <h1>Episodes</h1>
              {data.map((item, index) => {
                return (
                  <div
                    onClick={() => handleEpisodeSelect(item.id,item.title)}
                    className="EpisodesRow"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="EpisodeImage"
                    />
                    <div className="EpisodesInfo">
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Streaming;
