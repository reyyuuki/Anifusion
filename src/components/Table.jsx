import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';


const Table = ({result}) => {


    return (
       
        <>
       { result && result.length > 0 ? (
        result.map((item, index) => (
            <Link key={index} to={`/details/${item.id}`} className="Row">
              <img src={item.image} alt="Anime" className="Animeimage" />
              <div className="AnimeDetails">
                <h3 className="Titles">{(item.title.english || item.title.romaji).length > 30 ? (item.title.english || item.title.romaji).substring(0,28) + "..." : (item.title.english || item.title.romaji)}</h3>
                <div className="AnimeIcons">
                  <div className="ItemDiv">
                  <ion-icon name="tv-outline"></ion-icon>
                    {item.type || "??"}
                    </div>
                  <div className="ItemDiv">
                  <ion-icon name="calendar-outline"></ion-icon>
                    {item.releaseDate || "??"}
                  </div>
                  <div className="ItemDiv">
                  <ion-icon name="folder-open-outline"></ion-icon>
                  {item.totalEpisodes || "??"}
                  </div>
                  <div className="ItemDiv">
                  <ion-icon name="star-outline"></ion-icon>{item.rating/10 || "??"}
                  </div>
                </div>
              </div>
            </Link>
            ))
             ) : ( 
            <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.900' }} animation="wave"  className="Table-Skeleton" />
          )
        }
            </>
         
        
    );
}



export default Table;
