import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSnowflake,
  faShuffle,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
 
  const toggleTheme = () => {
    document.body.setAttribute("data-theme ","dark");
    console.log("Theme-Change");
  };

  return (
    <div className="header">
      <h1 className="Heading">YurAni </h1>
      <div className="box1">
        <div className="SearchBox">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <input type="text" placeholder="Search Anime" className="Search" />

          <FontAwesomeIcon icon={faSnowflake} className="SnowIcon" />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faShuffle} />
        </div>
      </div>
      <div className="box2">
        <div className="icons" onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faSun} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;
