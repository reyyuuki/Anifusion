import { useParams } from "react-router-dom";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { MangaChapters, MangaDetail } from "./components/apiFetch";
import "./css/Reading.css";

const Reading = () => {
  const { id, chapter } = useParams();
  const [chapterImage, setChapterImage] = useState([]);
  const [MangaData, setMangaData] = useState(null);
  const [ChapterId, setChapterId] = useState('');
  const [FilterChapters, setFilterChapters] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const data = await MangaDetail(id);
        if (data) {
          setMangaData(data);
          if (data.chapters && data.chapters.length > 0) {
            if(chapter){
              setChapterId(chapter);
              const index = data.chapters.findIndex(item => item.id === chapter);
              setFilterChapters(data.chapters.slice(index));
              setCount(index);
            }
            else{
              setChapterId(data.chapters[0].id);
              setFilterChapters(data.chapters.filter(chapter => chapter.pages > 0 ));
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
    };
    Chapter();
  }, [ChapterId]);

  const handleNextChapter = () => {
    setCount((c) => c + 1);
    if(FilterChapters.length > 0){
      setChapterId(FilterChapters[count + 1].id); 
    }
    
  };

  return (
    <>
      <Header isManga={true} />
      <div className="MangaChapters">
        {ChapterId && chapterImage &&
          chapterImage.length > 0 &&
          chapterImage.map((item, index) => (
            <img src={item.img} alt="MangaChapterImage" key={index} />
          ))}
      </div>
      <div className="Reading-Btn-Container">
        <div className="NextBtn" onClick={() => handleNextChapter()}>
          Next Chapter
        </div>
      </div>
    </>
  );
};

export default Reading;
