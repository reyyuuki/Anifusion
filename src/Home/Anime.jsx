import AnimeContainer from "../components/AnimeContainer";
import Slider from "../components/slider";
import AnimeTable from "../components/AnimeTable";
import "../index.css";
import {
  NewsetApi,
  PopularApi,
  TrendingApi,
  TopAiring,
} from "../components/apiFetch";
import { useEffect, useState } from "react";

const Anime = ()  => {
  const [Newest, setNewset] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [TrendingAnime, setTrendingAnime] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [isManga, setIsManga] = useState(false);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const AnimeData = await NewsetApi();
        const AnimeTrending = await TrendingApi();
        const AnimePopularFetch = await PopularApi();
        const AnimeTopRated = await TopAiring();

        setNewset(AnimeData);
        setTrendingAnime(AnimeTrending);
        setPopular(AnimePopularFetch);
        setTopRated(AnimeTopRated);
      } catch {
        console.log("Fetching anime data failed ");
      }
    };
    Fetch();
  }, []);

  return (
    <>
      <Slider result={Newest} isManga={false} />
      <AnimeContainer
        Newest={Newest}
        TrendingAnime={TrendingAnime}
        Popular={Popular}
        TopRated={TopRated}
      />
      <AnimeTable result={Newest} Popular={Popular} isManga={isManga} />
    </>
  );
}

export default Anime;
