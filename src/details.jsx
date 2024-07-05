import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/details.css";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await fetch(
          `https://consumet-api-two-nu.vercel.app/meta/anilist/info/${id.replace(
            /:/,
            ""
          )}?provider=gogoanime`
        );
        const result = await response.json();
        console.log(result);
        if (result) {
          setData(result);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="TopContainer">
      <div className="gradientContainer"></div>
      <div className="InfoContainer">
        <div className="DetailsCard">
            <h1 className="IdTitle">{data.title.english || data.title.romaji}</h1>
            <div className="IdIcons">
          <div className="Item">
            <ion-icon name="tv-outline"></ion-icon>
            {data.type}
          </div>
          <div className="Item">
            <ion-icon name="calendar-outline"></ion-icon>
            {data.releaseDate}
          </div>
          <div className="Item">
            <ion-icon name="folder-open-outline"></ion-icon>
            {data.totalEpisodes}
          </div>
          <div className="Item">
            <ion-icon name="star-outline"></ion-icon>8
          </div>
          </div>
          <div className="DescriptionId">{data.description}</div>
        </div>
        <img src={data.image} alt={data.title.english} className="image" />
      </div>
    </div>
  );
};

export default Details;
