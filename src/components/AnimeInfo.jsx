import "../css/AnimeInfo.css";

const AnimeInfo = ({data}) => {
  return (
    <div className="stream-AnimeInformation">
      <div className="stream-InfoContainer">
        <div className="stream-AnimeCard">
          <div className="stream-AnimeCard-Details">
            <img
              src="https://cdn.myanimelist.net/images/anime/6/30213.jpg"
              alt="Attack On Tittan"
              className="stream-Image"
            />
            <div className="stream-Informations">
                <h2>Attack On Tittan</h2>
                <div className="stream-status">
                    TV <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                     FINISHED <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                      2013 <ion-icon name="ellipse" className="stream-Icon"></ion-icon>
                       <div>
                       <ion-icon name="logo-closed-captioning" id="icon"></ion-icon>
                       <p>25</p>
                       </div>
                </div>
                <div className="stream-TypeInfo">
                    <div className="stream-Data">
                        <div className="stream-Title">Type:</div>
                        <div className="stream-Value">TV</div>
                    </div>
                    <div className="stream-Data">
                        <div className="stream-Title">Season:</div>
                        <div className="stream-Value">SPRING</div>
                    </div>
                    <div className="stream-Data">
                        <div className="stream-Title">Country:</div>
                        <div className="stream-Value">JP</div>
                    </div>
                    <div className="stream-Data">
                        <div className="stream-Title">Duration:</div>
                        <div className="stream-Value">24 min</div>
                    </div>
                    <div className="stream-Data">
                        <div className="stream-Title">Popularity:</div>
                        <div className="stream-Value">78789965 users</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
