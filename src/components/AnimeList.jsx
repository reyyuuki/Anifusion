import { Link } from "react-router-dom";
import "../css/AnimeList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay } from "swiper/modules";

const AnimeList = ({ result, name }) => {
  return (
    <div className="RecentlyUpdated">
      <h2 className="NewestText">{name}</h2>
      <Swiper
      spaceBetween={23}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="TrendingSection"
    >
        {result.map((item, index) => (
          <SwiperSlide key={index} className="AnimeCard">
            <Link to={`/details/${item.id}`} className="IdLink">
              <img src={item.image} alt="anime Image" className="AnimeImage" />
              <div className="AnimeInfo">
                {(item.title.english || item.title.romaji).length > 20
                  ? (item.title.english || item.title.romaji).substring(0, 16) + "..."
                  : item.title.english || item.title.romaji}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeList;
