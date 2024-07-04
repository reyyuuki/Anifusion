import "../css/AnimeContainer.css";
import AnimeList from "./AnimeList";
import { PopularApi, TrendingApi, NewsetApi } from "./apiFetch";
import { useEffect, useState } from "react";
const AnimeContainer = () => {
  const [Newest, setNewset] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TrendingAnime, setTrendingAnime] = useState([]);
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

    };
    Fetch();
  }, []);
  return (
    <div className="AnimeContainer">
      <div class="RecentlyUpdated">
        <h2 className="NewestText">Newest</h2>
        <AnimeList result={Newest} />
      </div>
      <div class="RecentlyUpdated">
        <h2 className="NewestText"></h2>
        <AnimeList result={TopRated} />
      </div>
      <div class="RecentlyUpdated">
        <h2 className="NewestText">Popular</h2>
        <AnimeList result={Popular} />
      </div>
    </div>
  );
};

export default AnimeContainer;
