import "../css/AnimeContainer.css";
import AnimeList from "./AnimeList";
const AnimeContainer = ({Newest, TrendingAnime, Popular, TopRated}) => {
  
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
