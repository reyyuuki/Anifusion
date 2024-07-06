import Header from "./components/header";
import { FetchById, FetchEpisodes } from "./components/apiFetch";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Player from "./components/player";
import "./css/Streaming.css";
import Episodes from "./components/Episodes";

const Streaming = () => {
  const { id , episodeId} = useParams();
  const [data, setData] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
console.log(episodeId);
  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await FetchById(id);
        const result = await FetchEpisodes(episodeId);
        if (response) {
          setData(response);
          setEpisodeData(result);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    Fetching();
  }, [episodeId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Player data={episodeData}/>
      <Episodes data={data}/>
    </>
  );
};

export default Streaming;
