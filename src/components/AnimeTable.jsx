import "../css/AnimeTable.css";
import { useState, useEffect } from "react";
import { NewsetApi, PopularApi } from "./apiFetch";
import Table from "./Table";
const AnimeTable = () => {
  const [result, setResult] = useState([]);
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      const data = await NewsetApi();
      if (data) {
        setResult(data);
      } else {
        console.log("error fetching");
      }

      const popularData = await PopularApi();
      if (popularData) {
        setPopular(popularData);
      } else {
        console.log("error fetching");
      }
    };
    Fetch();
  }, []);

  return (
    <div className="TableContainer">
      <div className="Table">
        <h1 className="Top">Top-Airing</h1>
        <Table result={Popular} />
      </div>
      <div className="Table">
        <h1 className="Top">Upcoming</h1>
        <Table result={result} />
      </div>
    </div>
  );
};

export default AnimeTable;
