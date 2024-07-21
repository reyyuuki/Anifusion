import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSnowflake,
  faShuffle,
  faSun,
  faMoon,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FetchBySearch, MangaSearch } from "./apiFetch";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [Icon, setIcon] = useState(faSun);
  const [closeIcon, setCloseIcon] = useState(faSnowflake);
  const [name, setName] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [focused, setFocused] = useState(false);
  const [isManga, setIsManga] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const SearchAnime = async () => {
      if (location.pathname.includes("Manga")) {
        setIsManga(true);
      } else {
        setIsManga(false);
      }
      if (isManga) {
        const manga = await MangaSearch(name);
        if (manga) {
          setAnimeList(manga);
        }
      } else {
        const anime = await FetchBySearch(name);
        if (anime) {
          setAnimeList(anime);
        }
      }
    };
    SearchAnime();
  }, [name, location.pathname]);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    setIcon(isDarkMode ? faMoon : faSun);
  }, [isDarkMode]);

  const Focused = () => {
    setFocused(true);
    setCloseIcon(faXmark);
  };
  const UnFocsed = () => {
    setFocused(false);
    setCloseIcon(faSnowflake);
  };

  return (
    <div className="header">
      <h1 className="Heading">
        <span className="Letter-A">A</span>nifusion
      </h1>
      <div className="box1">
        <div className="SearchContainer">
          <div className="SearchBox">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
            <input
              type="text"
              placeholder={isManga ? "Search Manga" : "Search Anime"}
              className="Search"
              onClick={() => Focused()}
              onChange={handleSearch}
            />
            <FontAwesomeIcon
              icon={closeIcon}
              onClick={() => UnFocsed()}
              className="SnowIcon"
            />
          </div>
          <div className="SearchList" style={focused ? { display: 'flex' } : {display: 'none'}}>
            {animeList &&
              animeList.map((item, index) =>
                  <Link
                    to={`/details/${item.id}`}
                    key={index}
                    className="SearchItem"
                    onClick={() => UnFocsed()}
                  >
                    <img src={item.image} alt="" className="SearchItemImage" />
                    <div className="SearchItemInfo">
                      <h4>
                        {(item.title.english || item.title.romaji).length > 30
                          ? (item.title.english || item.title.romaji).substring(
                              0,
                              27
                            ) + "..."
                          : item.title.english || item.title.romaji}
                      </h4>
                      <div className="Item-AnimeIcons">
                        <div className="Search-ItemDiv">
                          <ion-icon name="tv-outline"></ion-icon>
                          {item.type || "??"}
                        </div>
                        <div className="Search-ItemDiv">
                          <ion-icon name="calendar-outline"></ion-icon>
                          {item.releaseDate || "??"}
                        </div>
                        <div className="Search-ItemDiv">
                          <ion-icon name="star"></ion-icon>
                          {item.rating / 10 || "??"}
                        </div>
                      </div>
                    </div>
                  </Link>
              )}
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faShuffle} />
        </div>
      </div>
      <div className="box2">
        <div className="icons" onClick={() => setIsDarkMode(!isDarkMode)}>
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
