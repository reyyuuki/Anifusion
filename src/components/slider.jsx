import "../css/slider.css";
import { ApiFetch } from "./apiFetch";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlass,
  faStar,
  faClock,
  faCircleInfo,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      const data = await ApiFetch();
      if (data) {
        setResult(data);
        console.log(data);
      } else {
        console.log("error fetching");
      }
    };
    Fetch();
  }, []);

  if (!result[0]) return <div>Loading</div>;
  return (
    <div className="Wrapper">
    {result.map((item) => (
    <div className="container">
      <div className="ImageContainer">
        <div className="gradient"></div>
        <img src={item.cover} alt="anime" />
        <div className="sliderInfo">
          <div className="rightBox">
            <h1>{item.title.english}</h1>
            <div className="iconsBox">
              <div className="icon">
                <FontAwesomeIcon icon={faWineGlass} className="iconStyle" />
                <p>{item.type}</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faWineGlass} className="iconStyle" />
                <p>{item.duration}</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faStar} className="iconStyle" />
                <p>{item.rating / 10}</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faClock} className="iconStyle" />
                <p>{item.duration} mins</p>
              </div>
            </div>
            <div className="description">
              <p>{item.description.length > 200 ? (item.description.replace(/<\/?[^>]+(>|$)/g, "")).substring(0,200) + "..." :item.description.replace(/<\/?[^>]+(>|$)/g, "") }</p>
            </div>
          </div>
          <div className="info">
            <div className="btn">
              <FontAwesomeIcon icon={faCircleInfo} className="iconStyles" />
              <p className="iconText">Details</p>
            </div>
            <div className="btn">
              <FontAwesomeIcon icon={faCirclePlay} className="iconStyles" />
              <p className="iconText">Watch Now</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      ))}
    </div>
  );
};

export default Slider;
