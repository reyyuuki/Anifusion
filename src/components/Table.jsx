

const Table = ({result}) => {
    return (
        <>
        {result.map((item, index) => (
            <div className="Row" key={index}>
              <img src={item.image} alt="Anime" className="Animeimage" />
              <div className="AnimeDetails">
                <h3 className="Titles">{item.title.english || item.title.romaji}</h3>
                <div className="AnimeIcons">
                  <div className="ItemDiv">
                  <ion-icon name="tv-outline"></ion-icon>
                    {item.type}
                    </div>
                  <div className="ItemDiv">
                  <ion-icon name="calendar-outline"></ion-icon>
                    {item.releaseDate}
                  </div>
                  <div className="ItemDiv">
                  <ion-icon name="folder-open-outline"></ion-icon>
                  {item.totalEpisodes}
                  </div>
                  <div className="ItemDiv">
                  <ion-icon name="star-outline"></ion-icon>8
                  </div>
                </div>
              </div>
            </div>
            ))}
            </>
    );
}



export default Table;
