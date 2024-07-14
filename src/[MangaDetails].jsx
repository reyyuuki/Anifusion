import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./css/details.css";
import Skeleton from "@mui/material/Skeleton";
import InfoElement from "./components/infoElement";
import DetailsCourasale from "./components/details-Courasale";
import CharacterTable from "./components/CharacterTable";
import AnimeList from "./components/AnimeList";
import { FetchById, MangaDetail } from "./components/apiFetch";

const MangaDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const location = useLocation(); 

  useEffect(() => {
    const Fetching = async () => {
      try {
        const Manga = await MangaDetail(id);
        console.log(Manga);
          setData(Manga);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    Fetching();
  }, [id]);

  if (!data) {
    return (
      <div className="SkeletonContainer">
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.900" }}
          animation="wave"
          className="Details-Skeleton"
        />
        <div className="DescriptionContainer">
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.900" }}
            animation="wave"
            className="Description"
          />
        </div>
        <div className="InfoContainer">
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.900" }}
            animation="wave"
            className="InfoTable"
          />
        </div>
        <div className="RecommendedSection">
        <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.900" }}
            animation="wave"
            className="Recommended-Skeleton"
          />
          </div>
      </div>
    );
  }

  return (
    <>
      <DetailsCourasale data={data} isManga={true}/>
      <div className="DescriptionContainer">
        <div className="Description">
        <p>{data.description ? data.description.replace(/<\/?[^>]+(>|$)/g, "") : "N/A"}</p>
        </div>
      </div>
      
    </>
  );
};

export default MangaDetails;
