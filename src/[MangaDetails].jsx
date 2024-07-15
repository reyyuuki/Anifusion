import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/details.css";
import Skeleton from "@mui/material/Skeleton";
import InfoElement from "./components/infoElement";
import DetailsCourasale from "./components/details-Courasale";
import CharacterTable from "./components/CharacterTable";
import AnimeList from "./components/AnimeList";
import { FetchById, MangaDetail } from "./components/apiFetch";
import Header from "./components/header";

const MangaDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [chapterId, setChapterId] = useState('');

  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await MangaDetail(id);
        console.log(response);
        if (response) {
          setData(response);
          setChapterId(response.chapters[0].chapterId);
          window.scrollTo(0, 0);
        } else {
          console.log("Error fetching data");
        }
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
    <Header isManga={true}/>
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
