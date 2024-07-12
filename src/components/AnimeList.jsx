
import "../css/AnimeList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

const AnimeList = ({ result, name }) => {
  return (
    <div className="RecentlyUpdated">
      <h2 className="NewestText">{name}</h2>
      {result && result.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          className="TrendingSection"
        >
          {result.map((item, index) => (
            <SwiperSlide key={index} className="AnimeCard">
              <Link to={`/details/${item.id}`} className="IdLink">
              <div className="ImageContainer">
                <img src={item.image} alt="anime Image" className="AnimeImage" />
                <div className="Anime-Details">
                  <div>
                  <p>{item.type}</p>
                  <ion-icon name="ellipse"></ion-icon>
                  <h4 className="Anime-Status">{item.status}</h4>
                  <ion-icon name="ellipse"></ion-icon>
                  <p>Ep {item.totalEpisodes}</p>
                  </div>
                </div>
                </div>
                <div className="AnimeInfo">
                  {(item.title.english || item.title.romaji).length > 20
                    ? (item.title.english || item.title.romaji).substring(0, 16) + "..."
                    : item.title.english || item.title.romaji}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.900' }} animation="wave" className="Skeleton" />
      )}
    </div>
  );
};

export default AnimeList;
