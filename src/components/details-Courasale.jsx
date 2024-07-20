import { Link } from "react-router-dom";
import "../css/details-Courasale.css";

const DetailsCourasale = ({ data, name, isManga }) => {
  return (
    <div className="TopContainer">
      <div className="GradientContainer"></div>
      <img src={data.cover} alt="Anime Image" className="Image" />
      <div className="details-Info">
        <img src={data.image} alt="Anime Image" className="Details-AnimeCard" />
        <h1 style={{ color: data.color }}>{data.title && data.title.english}</h1>
        {isManga ? (
          <h3>Chapters: {data.chapters.length || "N/A"}</h3>
        ) : (
          <h3>Episodes: {data.totalEpisodes || "N/A"}</h3>
        )}
        <h3>Status: {data.status || "N/A"}</h3>
        <h3>Genres: {data.genres && data.genres.join(", ") || "N/A"}</h3>
      </div>
      {name && 
      <Link to={ isManga ? `/ReadingManga/${data.id}` : `/Streaming/${data.id}/${name}`} className="Details-watch-now">
      {isManga ? "Read Now" : "Watch Now"}
        <ion-icon name="play-circle" className="detailsicons"></ion-icon>
      </Link>
}
    </div>
  );
};

export default DetailsCourasale;
