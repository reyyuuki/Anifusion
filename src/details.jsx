import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/details.css";
import Header from "./components/header";
import InfoElement from "./components/infoElement";
import DetailsCourasale from "./components/details-Courasale";
import CharacterTable from "./components/CharacterTable";

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
    <>
      <Header />
      <DetailsCourasale data={data}/>
      <div className="DescriptionContainer">
        <div className="Description">
          <p>{data.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
      </div>
      <InfoElement data={data} />
      <CharacterTable data={data}/>
    </>
  );
};

export default Details;
