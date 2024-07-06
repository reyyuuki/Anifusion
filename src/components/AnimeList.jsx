import { Link } from "react-router-dom";


const AnimeList = ({result}) => {

    return (
      
        <div className="TrendingSection">
        {result.map((item,index) => (
          <Link key={index} to={`/details/${item.id}`} className="IdLink">
        <div className="AnimeCard">
          <img
            src={item.image}
            alt="anime Image"
            className="AnimeImage"
          />
          <div className="AnimeInfo">{(item.title.english || item.title.romaji).length > 20 ? (item.title.english || item.title.romaji).substring(0,16) + "..." : (item.title.english || item.title.romaji)}</div>
        </div>
        </Link>
))}
      </div>
      
    );
}


export default AnimeList;
