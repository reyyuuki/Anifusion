import "../css/AnimeInfo.css";
import Table from "./Table";

const AnimeInfo = ({ data }) => {
  return (
    <div className="stream-AnimeInformation">
      <div className="stream-InfoContainer">
        <div className="stream-AnimeCard">
          <div className="stream-AnimeCard-Details">
            <img
              src={data.image}
              alt={data.title.english || data.title.romaji || "N/A"}
              className="stream-Image"
            />
            <div className="stream-Informations">
              <h2>{data.title.english || data.title.romaji || "N/A"}</h2>
              <div className="stream-status">
                {data.type}{" "}
                <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                {data.status}{" "}
                <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                {data.releaseDate}{" "}
                <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                <div>
                  <ion-icon name="logo-closed-captioning" id="icon"></ion-icon>
                  <p>{data.totalEpisodes}</p>
                </div>
              </div>
              <div className="stream-TypeInfo">
                <div className="stream-Data">
                  <div className="stream-Title">Type:</div>
                  <div className="stream-Value">{data.type}</div>
                </div>
                <div className="stream-Data">
                  <div className="stream-Title">Season:</div>
                  <div className="stream-Value">{data.season}</div>
                </div>
                <div className="stream-Data">
                  <div className="stream-Title">Country:</div>
                  <div className="stream-Value">{data.countryOfOrigin}</div>
                </div>
                <div className="stream-Data">
                  <div className="stream-Title">Duration:</div>
                  <div className="stream-Value">{data.duration} min</div>
                </div>
                <div className="stream-Data">
                  <div className="stream-Title">Popularity:</div>
                  <div className="stream-Value">{data.popularity} users</div>
                </div>
                <div className="stream-genres">
                  {data.genres.map((item, index) =>
                  <div className="genres-item" key={index}>{item}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="stream-Description">
            {data.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </div>
        </div>
      </div>
      <div className="stream-table">
      <h1>Related </h1>
        <div className="stream-tableData">
        <Table result={data.relations} />
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
