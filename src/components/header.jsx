import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSnowflake,
  faShuffle,
  faSun,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect} from "react";


const Header = () => {
  const [Icon , setIcon] = useState(faSun)
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  const toggleTheme = () => {
    const Theme = document.body.getAttribute("data-theme");
    const newTheme = Theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    setIcon(newTheme === "light" ? faMoon : faSun);
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
          <FontAwesomeIcon icon={Icon} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;
