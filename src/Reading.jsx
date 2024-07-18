import { useParams } from "react-router-dom";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { MangaChapters, MangaDetail } from "./components/apiFetch";
import "./css/Reading.css";

const Reading = () => {
  const { id, chapter } = useParams();
  const [chapterImage, setChapterImage] = useState([]);
  const [MangaData, setMangaData] = useState([]);
  const [ChapterId, setChapterId] = useState("");
  const [FilterChapters, setFilterChapters] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [ChapterNumber, setChapterNumber] = useState('');
  const [count, setCount] = useState(0);
  const [NextBtn, setNextBtn] = useState(true);
  const [PrevBtn, setPrevBtn] = useState(false);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const data = await MangaDetail(id);
        if (data) {
          setMangaData(data);
          console.log(data);
          if (data.chapters && data.chapters.length > 0) {
            if (chapter) {
              setChapterId(chapter);
              const FilterData = data.chapters.filter(
                (chapter) => chapter.pages > 0
              );
              const index = FilterData.findIndex((item) => item.id === chapter);
              setCount(index);
              setFilterChapters(FilterData);
              setCurrentTitle(FilterChapters[index].title);
              setChapterNumber(FilterChapters[index].chapterNumber);
              console.log(FilterChapters, count, index);
            } else {
              setChapterId(data.chapters[0].id);
              setFilterChapters(
                data.chapters.filter((chapter) => chapter.pages > 0)
              );
              setCurrentTitle(FilterChapters[0].title);
              setChapterNumber(FilterChapters[0].chapterNumber);
              console.log(FilterChapters);
            }
          }
        } else {
          console.log("Error fetching data chapter");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    Fetching();
  }, [id]);

  useEffect(() => {
    const Chapter = async () => {
      try {
        if (ChapterId) {
          const data = await MangaChapters(ChapterId);
          if (data) {
            setChapterImage(data);
            console.log(ChapterId);
          }
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }

      if (FilterChapters.length - 1 == count) {
        setNextBtn(false);
      }
      if (count == 0) {
        setPrevBtn(false);
      }
    };
    Chapter();
  }, [ChapterId]);

  const handleNextChapter = () => {
    if (FilterChapters.length > 0) {
      setCount((c) => c + 1);
      setChapterId(FilterChapters[count + 1].id);
      setCurrentTitle(FilterChapters[count + 1].title);
      setChapterNumber(FilterChapters[count + 1].chapterNumber);
      setPrevBtn(true);
    }
  };
  const handlePreviousChapter = () => {
    if (count >= 1) {
      setCount((c) => c - 1);
      setChapterId(FilterChapters[count - 1].id);
      setCurrentTitle(FilterChapters[count - 1].title);
      setChapterNumber(FilterChapters[count - 1].chapterNumber);
    }
    console.log(count);
  };

  return (
    <>
      <Header isManga={true} />
      <div className="MainContainer">
        <div className="ReadingInfo">
          {MangaData.title && (
            <h1>
              {MangaData.title.english || MangaData.title.romaji || "N/A"}
            </h1>
          )}
          <h2>{currentTitle && currentTitle}</h2>
          <h3>Chapter {ChapterNumber}</h3>
        </div>
        <div className="Reading-Btn-Container">
          {PrevBtn && (
            <div className="NextBtn" onClick={() => handlePreviousChapter()}>
              Previous Chapter
            </div>
          )}
          {NextBtn && (
            <div className="NextBtn" onClick={() => handleNextChapter()}>
              Next Chapter
            </div>
          )}
        </div>
        <div className="MangaChapters">
          {ChapterId &&
            chapterImage &&
            chapterImage.length > 0 &&
            chapterImage.map((item, index) => (
              <img src={item.img} alt="MangaChapterImage" key={index} />
            ))}
        </div>
        <div className="Reading-Btn-Container">
          {PrevBtn && (
            <div className="NextBtn" onClick={() => handlePreviousChapter()}>
              Previous Chapter
            </div>
          )}
          {NextBtn && (
            <div className="NextBtn" onClick={() => handleNextChapter()}>
              Next Chapter
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Reading;
