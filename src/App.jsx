import AnimeContainer from "./components/AnimeContainer";
import Slider from "./components/slider";
import AnimeTable from "./components/AnimeTable";
import "./index.css";
import {
  NewsetApi,
  PopularApi,
  TrendingApi,
  TopAiring,
  MangaApi,
  TrendingManga,
  PopularManga,
  AiringManga,
} from "./components/apiFetch";
import { useEffect, useState } from "react";

function App() {
  const [Newest, setNewset] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TrendingAnime, setTrendingAnime] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [isManga, setIsManga] = useState(true);

  useEffect(() => {
    const Fetch = async () => {
      const AnimeData = await NewsetApi();
      const MangaData = await MangaApi();

      const AnimeTrending = await TrendingApi();
      const MangaTrending = await TrendingManga();

      const AnimePopularFetch = await PopularApi();
      const MangaPopularFetch = await PopularManga();

      const AnimeTopRated = await TopAiring();
      const MangaTopRated = await AiringManga();

      if (isManga) {
        setNewset(MangaData);
        setTrendingAnime(MangaTrending);
        setPopular(MangaPopularFetch);
        setTopRated(MangaTopRated);
      }
      else{
        setNewset(AnimeData);
        setTrendingAnime(AnimeTrending);
        setPopular(AnimePopularFetch);
        setTopRated(AnimeTopRated);
      }
    };
    Fetch();
  }, []);

  return (

    
    <>
      <Slider result={TopRated} isManga={isManga}/>
      <AnimeContainer
        Newest={Newest}
        TrendingAnime={TrendingAnime}
        Popular={Popular}
        TopRated={TopRated}
      />
      <AnimeTable result={Newest} Popular={Popular} isManga={isManga}/>
    </>
  );
}

export default App;
