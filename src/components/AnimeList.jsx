


const AnimeList = ({result}) => {
    return (
        <div className="TrendingSection">
        {result.map((item,index) => (
        <div className="AnimeCard" key={index}>
          <img
            src={item.image}
            alt="anime Image"
            className="AnimeImage"
          />
          <div className="AnimeInfo">{(item.title.english || item.title.romaji).length > 25 ? (item.title.english || item.title.romaji).substring(0,22) + "..." : (item.title.english || item.title.romaji)}</div>
        </div>
))}
      </div>
    );
}


export default AnimeList;
