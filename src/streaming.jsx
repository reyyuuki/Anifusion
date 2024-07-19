import {
  AniWatchEpisode,
  AniWatchSteam,
  FetchById,
  FetchEpisodes,
  FetchEpisodesId,
} from "./components/apiFetch";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Streaming.css";
import Loader from "./components/Loader";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import AnimeInfo from "./components/AnimeInfo";
import NotFoundEpisodes from "./components/notFoundEpisodes";

const Streaming = () => {
  const { id, name } = useParams();
  const [data, setData] = useState(null);
  const [AnimeData, setAnimeData] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
  const [AniwatchInfo, setAniwatchInfo] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [selectEpisode, setSelectEpisode] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [poster, setPoster] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [AniwatchEpisodedata, setAniwatchEpisodeData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchEpisodes(id);
        const AnimeInfo = await FetchById(id);
        if (response) {
          setData(response);
          setAnimeData(AnimeInfo);
          setCurrentTitle(response[0].title);
          setPoster(response[0].image);
          setCurrentEpisode(response[0].number);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoadingData(false);
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
        } catch (error) {
          console.log("Error:", error);
        } finally {
          setLoadingData(false);
        }
      }
    };
  }, []);

  useEffect(() => {
    const FetchAniWatchEpisodes = async () => {
      if(name){

      try {
          const AniwatchResponse = await AniWatchEpisode(name);
          if (AniwatchResponse) {
            setSelectEpisode(AniwatchResponse[0].episodeId);
            setAniwatchInfo(AniwatchResponse);
            console.log(selectEpisode,AniwatchInfo);
            if (selectEpisode){
              const EpisodeAniwatch = AniWatchSteam(selectEpisode);
              console.log(EpisodeAniwatch);
            }
        }
      } catch {
        console.log("Error fetching AniWatch episodes");
      }
    }
    };
    FetchAniWatchEpisodes();
  }, [name,selectEpisode,AniwatchInfo]);

  const handleEpisodeSelect = (episode, EpisodeTitle, Image, EpisodeNumber) => {
    if (episode) {
      setSelectEpisode(episode);
      setCurrentTitle(EpisodeTitle);
      setPoster(Image);
      setCurrentTitle(EpisodeNumber);
    }
  };

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <>
          {AnimeData && AnimeData.episodes.length > 0 ? (
            <>
              <div className="StreamingContainer">
                {AniwatchEpisodedata && (
                  <MediaPlayer
                    playsInline
                    title={currentTitle}
                    src={AniwatchEpisodedata.sources[0].url}
                    className="Player"
                    poster={poster}
                  >
                    <MediaProvider />
                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                  </MediaPlayer>
                )}
                <div className="EpisodesWrapper">
                  <h1>Episodes</h1>
                  {data &&
                    data.map((item, index) => (
                      <div
                        onClick={() =>
                          handleEpisodeSelect(
                            AniwatchInfo.find((i) => i.title == item.title)
                              .episodeId,
                            item.title,
                            item.image,
                            item.number
                          )
                        }
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
              <AnimeInfo data={AnimeData} EpisodeData={currentEpisode} />
            </>
          ) : (
            <NotFoundEpisodes />
          )}
        </>
      )}
    </>
  );
};

export default Streaming;
