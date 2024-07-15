import "../css/AnimeContainer.css";
import AnimeList from "./AnimeList";
const AnimeContainer = ({Newest, TrendingAnime, Popular, TopRated, isManga}) => {
  
  return (
    <div className="AnimeContainer">
      
        <AnimeList result={Newest} name={"Newest"} isManga={isManga}/>
        <AnimeList result={TrendingAnime} name={"Trending"} isManga={isManga}/>
        <AnimeList result={Popular} name={"Most Popular"} isManga={isManga}/>
        <AnimeList result={TopRated} name={"Top-Airing"} isManga={isManga}/>
    </div>
  );
};

export default AnimeContainer;
