import {
  AniWatchEpisode,
  AniWatchServer,
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
import { MediaPlayer, MediaProvider, Track } from "@vidstack/react";
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
  const [isDub, setIsDub] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AnimeInfo = await FetchById(id);
        if (AnimeInfo) {
          setAnimeData(AnimeInfo);
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
    const FetchAniWatchEpisodes = async () => {
      if (name) {
        try {
          const AniwatchResponse = await AniWatchEpisode(name);
          if (AniwatchResponse) {
            setSelectEpisode(AniwatchResponse[0].episodeId);
            setAniwatchInfo(AniwatchResponse);
            setCurrentTitle(AniwatchResponse[0].title);
            setPoster(AniwatchResponse[0].image);
            setCurrentEpisode(AniwatchResponse[0].number);
          }
        } catch {
          console.log("Error fetching AniWatch episodes");
        }
      }
    };
    FetchAniWatchEpisodes();
  }, [name]);

  useEffect(() => {
    const AniwatchLinkData = async () => {
      if (selectEpisode) {
        try {
          if(isDub){
            const DubServerData = await AniWatchServer(selectEpisode,"vidstreaming","dub");

            if(DubServerData){
              setAniwatchEpisodeData(DubServerData);
              console.log(DubServerData);
            }
          }
          else{
            const SubServerData = await AniWatchServer(selectEpisode,"vidstreaming","sub");
            if(SubServerData){
              setAniwatchEpisodeData(SubServerData);
              console.log(SubServerData);
            }
          }
        } catch {
          console.log("Error fetching AniWatch Link");
        }
      }
    };
    AniwatchLinkData();
  }, [selectEpisode,isDub]);

  const handleEpisodeSelect = (episode, EpisodeTitle, Image, EpisodeNumber) => {
    if (episode) {
      setSelectEpisode(episode);
      setCurrentTitle(EpisodeTitle);
      setPoster(Image);
      setCurrentEpisode(EpisodeNumber);
    }
  };
  const handleDub = () => {
    setIsDub(true);
  }

  const handleSub = () => {
    setIsDub(false);
  }

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <>
          {AnimeData ? (
            <>
              <div className="StreamingContainer">
                {AniwatchEpisodedata && (
                  <MediaPlayer
                    playsInline
                    title={currentTitle}
                    src={AniwatchEpisodedata.sources[0].url}
                    className="Player"
                  >
                    {AniwatchEpisodedata.tracks.map((item, index) => (
                      <Track
                        key={index}
                        src={item.file}
                        kind={item.kind}
                        label={item.label}
                        default
                      />
                    ))}
                    <MediaProvider />
                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                  </MediaPlayer>
                )}
                <div className="EpisodesWrapper">
                  <h1>Episodes</h1>
                  {AniwatchInfo &&
                    AniwatchInfo.map((item, index) => (
                      <div
                        onClick={() =>
                          handleEpisodeSelect(
                            item.episodeId,
                            item.title,
                            item.image,
                            item.number
                          )
                        }
                        className={`EpisodesRow ${
                          item.episodeId === selectEpisode ? "ActiveRow" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={(data && data[index].image) || AnimeData.image}
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
              <div className="stream-AnimeDetails">
                <div className="stream-CurrentDetails">
                  <h2>
                    {AnimeData.title.english || AnimeData.title.romaji || "N/A"}
                  </h2>
                  <h3>Episode {currentEpisode}</h3>
                </div>
                <div className="Servers">
                    <div className={isDub ? "ServerDiv" : "ActiveBtn"} onClick={() => isDub ?  handleSub() : null}>
                    <ion-icon name="logo-closed-captioning"></ion-icon>
                      Sub
                    </div>
                    <div className={isDub ? "ActiveBtn" : "ServerDiv"} onClick={() => !isDub ?  handleDub() : null}>
                      <ion-icon name="mic-outline"></ion-icon>
                      Dub
                    </div>
                </div>
              </div>
              <AnimeInfo data={AnimeData} />
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
