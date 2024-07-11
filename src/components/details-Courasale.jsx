
import "../css/details-Courasale.css";

const DetailsCourasale = ({ data }) => {
  return (
    <div className="TopContainer">
      <div className="GradientContainer"></div>
      <img src={data.cover} alt="Anime Image" className="Image" />
      <div className="details-Info">
        <img src={data.image} alt="Anime Image" className="Details-AnimeCard" />
        <h1 style={{ color: data.color }}>{data.title.english}</h1>
        <h3>Episodes: {data.totalEpisodes || "N/A"}</h3>
        <h3>Status: {data.status || "N/A"}</h3>
        <h3>Genres: {data.genres.join(", ") || "N/A"}</h3>
      </div>
      <a href={`/Streaming/${data.id}`} className="Details-watch-now">
        Watch now{" "} 
        <ion-icon name="play-circle" className="detailsicons"></ion-icon>
      </a>
    </div>
  );
};

export default DetailsCourasale;
