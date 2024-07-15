import "../css/slider.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlass,
  faStar,
  faClock,
  faCircleInfo,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel from "embla-carousel-react";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
const Slider = ({ result, isManga }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="SliderContainer">
      <div className="embla" ref={emblaRef}>
        {result && result.length > 0 ? (
          <div className="embla__container">
            {result.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="gradient"></div>
                <img src={item.cover || item.image} alt="anime" className="SliderImage" />
                <div className="sliderInfo">
                  <div className="rightBox">
                    <h1>{item.title.english}</h1>
                    <div className="iconsBox">
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faWineGlass}
                          className="iconStyle"
                        />
                        <p>{item.type}</p>
                      </div>
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faWineGlass}
                          className="iconStyle"
                        />
                        <p>{item.duration}</p>
                      </div>
                      {isManga ? (
                        <div className="icon">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="iconStyle"
                          />
                          <p>
                            {item.popularity
                              ? `${item.popularity} users`
                              : "N/A"}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="icon">
                            <FontAwesomeIcon
                              icon={faStar}
                              className="iconStyle"
                            />
                            <p>{item.rating / 10 || "N/A"}</p>
                          </div>
                          <div className="icon">
                            <FontAwesomeIcon
                              icon={faClock}
                              className="iconStyle"
                            />
                            <p>{item.duration || "N/A"} mins</p>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="description">
                      <p>
                        {item.description
                          ? item.description.length > 200
                            ? item.description
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 200) + "..."
                            : item.description.replace(/<\/?[^>]+(>|$)/g, "")
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="info">

                    <Link to= { isManga ? `/MangaDetails/${item.id}` : `/details/${item.id}`} className="btn">
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        className="iconStyles"
                      />
                      <p className="iconText">Details</p>
                    </Link>
                    <Link to={`/Streaming/${item.id}`} className="btn">
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className="iconStyles"
                      />
                      <p className="iconText">{isManga ? "Read Now" : "Watch Now"}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.900" }}
            animation="wave"
            className="Slider-Skeleton"
          />
        )}
      </div>
    </div>
  );
};

export default Slider;
