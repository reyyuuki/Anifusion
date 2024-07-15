import AnimeContainer from "../components/AnimeContainer";
import Slider from "../components/slider";
import AnimeTable from "../components/AnimeTable";
import "../index.css";
import {
  MangaApi,
  TrendingManga,
  PopularManga,
  AiringManga,
} from "../components/apiFetch";
import { useEffect, useState } from "react";
import Header from "../components/header";

const Manga = () => {
  const [Newest, setNewset] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TrendingAnime, setTrendingAnime] = useState([]);
  const [TopRated, setTopRated] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const MangaData = await MangaApi();
        const MangaTrending = await TrendingManga();
        const MangaPopularFetch = await PopularManga();
        const MangaTopRated = await AiringManga();

        setNewset(MangaData);
        setTrendingAnime(MangaTrending);
        setPopular(MangaPopularFetch);
        setTopRated(MangaTopRated);
      } catch {
        console.log("Fetching manga data failed ");
      }
    };
    Fetch();
  }, []);

  return (
    <>
      
      <Slider result={TopRated} isManga={true} />
      <AnimeContainer
        Newest={Newest}
        TrendingAnime={TrendingAnime}
        Popular={Popular}
        TopRated={TopRated}
        isManga={true}
      />
      <AnimeTable result={Newest} Popular={Popular} isManga={true} />
    </>
  );
};

export default Manga;
