import Header from "./components/header";
import Slider from "./components/slider";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  return (
    <>
      <Header />
      <div className="SliderContainer">
      <Swiper
        grabCursor={true}
        pagination={true}
        centeredSlides={true}
        loop={true}
        className="swiper"
      >
        <SwiperSlide className="SwiperSlide">
          <div className="Image">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/166240-YdxoEhrfwNk0.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
        <div className="Image">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/166240-YdxoEhrfwNk0.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default App;
