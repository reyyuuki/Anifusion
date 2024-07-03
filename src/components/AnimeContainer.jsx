import "../css/AnimeContainer.css";

const AnimeContainer = () => {
  return (
    <div className="AnimeContainer">
      <div class="RecentlyUpdated">
        <h2>Recently Updated</h2>
        <div className="AnimeCard">
          <img src="https://via.placeholder.com/300x400" alt="" />
          <div className="AnimeInfo">
            <div className="Title">Anime Title</div>
            <div className="information">Genre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeContainer;
