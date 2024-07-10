import "../css/AnimeContainer.css";
import AnimeList from "./AnimeList";
import { PopularApi, TrendingApi, NewsetApi, TopAiring } from "./apiFetch";
import { useEffect, useState } from "react";
const AnimeContainer = () => {
  const [Newest, setNewset] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TrendingAnime, setTrendingAnime] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      const data = await NewsetApi();
      if (data) {
        setNewset(data);
      } else {
        console.log("Error fetching");
      }

      const Trending = await TrendingApi();
      if (Trending) {
        setTrendingAnime(Trending);
      } else {
        console.log("Error fetching");
      }

      const PopularFetch = await PopularApi();
      if (PopularFetch) {
        setPopular(PopularFetch);
      } else {
        console.log("Error fetching");
      }

      const topRated = await TopAiring();
      if(topRated) {
        setTopRated(topRated);
      }
      else{
        console.log("Error fetching");
      }
    };
    Fetch();
  }, []);
  return (
    <div className="AnimeContainer">
      
        <AnimeList result={Newest} name={"Newest"} />
        <AnimeList result={TrendingAnime} name={"Trending"} />
        <AnimeList result={Popular} name={"Most Popular"} />
        <AnimeList result={TopRated} name={"Top-Airing"} />
    </div>
  );
};

export default AnimeContainer;
