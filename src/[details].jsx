import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/details.css";
import Skeleton from "@mui/material/Skeleton";
import InfoElement from "./components/infoElement";
import DetailsCourasale from "./components/details-Courasale";
import CharacterTable from "./components/CharacterTable";
import AnimeList from "./components/AnimeList";
import { FetchById } from "./components/apiFetch";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await FetchById(id);
        console.log(response);
        if (response) {
          setData(response);
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
      <DetailsCourasale data={data} />
      <div className="DescriptionContainer">
        <div className="Description">
          <p>{data.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
      </div>
      <InfoElement data={data} />
      <div className="RecommendedSection">
        <AnimeList result={data.recommendations} name={"Recommended"} />
      </div>
      {data.characters && data.characters.length > 0 && (
        <CharacterTable data={data} />
      )}
    </>
  );
};

export default Details;
