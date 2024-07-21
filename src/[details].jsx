import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/details.css";
import Skeleton from "@mui/material/Skeleton";
import InfoElement from "./components/infoElement";
import DetailsCourasale from "./components/details-Courasale";
import CharacterTable from "./components/CharacterTable";
import AnimeList from "./components/AnimeList";
import { AniWatchIdApi, FetchById } from "./components/apiFetch";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [AnimeTitle, setAnimeList] = useState("");
  const [AniWatchData, setAniWatchData] = useState([]);
  const [loadingData , setLoadingData] = useState(true);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await FetchById(id);
        if (response) {
          setData(response);
          window.scrollTo(0, 0);
          setAnimeList(response.title.english || response.title.romaji);
          
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    Fetching();
  }, [id]);

  useEffect(() => {
    const AniWatchFetch = async () => {
      try {
        const aniWatch = await AniWatchIdApi(AnimeTitle);
        if (aniWatch) {
          setAniWatchData(aniWatch);
          setLoadingData(false);
        } else {
          console.log("AniWatch not available");
        }
      } catch {
        console.log("Error fetching AniWatch data:");
      }
    };
    AniWatchFetch();
  }, [AniWatchData, AnimeTitle]);


  return (
    <>
      {!loadingData ? (
        <>
        {data && AniWatchData &&
          <DetailsCourasale data={data} name={AniWatchData} isManga={false} />
        }
          <div className="DescriptionContainer">
            <div className="Description">
              <p>
                {data.description
                  ? data.description.replace(/<\/?[^>]+(>|$)/g, "")
                  : "N/A"}
              </p>
            </div>
          </div>
          <InfoElement data={data} isManga={false} />
          <div className="RecommendedSection">
            <AnimeList result={data.recommendations} name={"Recommended"} />
          </div>
          {data.characters && data.characters.length > 0 && (
            <CharacterTable data={data} />
          )}
        </>
      ) : (
        <div className="SkeletonContainer">
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.800" }}
          className="Details-Skeleton"
        />
        </div>
      )}
    </>
  );
};

export default Details;
