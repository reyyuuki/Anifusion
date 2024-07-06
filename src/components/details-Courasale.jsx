import '../css/details-Courasale.css';

const DetailsCourasale = ({data}) => {
    return (
        <div className="TopContainer">
        <div className="GradientContainer"></div>
        <img src={data.cover} alt="Anime Image" className="Image" />
        <div className="details-Info">
          <img src={data.image} alt="Anime Image" className="AnimeCard" />
          <h1>{data.title.english}</h1>
          <h3>Episodes: {data.totalEpisodes}</h3>
          <h3>Status: {data.status}</h3>
          <h3>Genres: {data.genres.join(", ")}</h3>
        </div>
      </div>
    );
}



export default DetailsCourasale;
