import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/AnimeList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Skeleton from '@mui/material/Skeleton';

const AnimeList = ({ result, name }) => {
  return (
    <div className="RecentlyUpdated">
      <h2 className="NewestText">{name}</h2>
      {result && result.length > 0 ? (
        <Swiper
          spaceBetween={23}
          slidesPerView={6}
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
      ) : (
        <Skeleton variant="rectangular" sx={{ bgcolor: '#1f0f24' }} animation="wave" height={270} className="Skeleton" />
      )}
    </div>
  );
};

export default AnimeList;
