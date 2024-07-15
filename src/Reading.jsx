import { useParams } from "react-router-dom";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { MangaChapters, MangaDetail } from "./components/apiFetch";
import "./css/Reading.css";

const Reading = () => {
  const { id } = useParams();
  const [chapterImage, setChapterImage] = useState();
  const [MangaData, setMangaData] = useState();
  const [NextChapter, setNextChapter] = useState();
  const [ChapterId, setChapterId] = useState();
  const [count , setCount] = useState(0);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const data = await MangaDetail(id);
        if (data) {
          setMangaData(data);
          if (data.chapters && data.chapters.length > 0) {
            setChapterId(data.chapters[0].id);
            console.log(ChapterId);
          }
        }
        else{
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
      if(ChapterId){
    try {
        const data = await MangaChapters(ChapterId);
        if (data) {
          setChapterImage(data);
          console.log(chapterImage);
        }
      } catch (error){
        console.log("Error fetching data:", error);
      }
    }
    }
    Chapter();
  },[ChapterId]);
  
  const handleNextChapter = () => {
    setCount(c => c + 1);
    setChapterId(MangaData.chapters[count + 1].id);
    console.log(count);
  };
  
  return (
    <>
      <Header isManga={true} />
      <div className="MangaChapters">
        {chapterImage &&
          chapterImage.length > 0 &&
          chapterImage.map((item, index) => (
            <img src={item.img} alt="MangaChapterImage" key={index} />
          ))}
      </div>
      <div className="Reading-Btn-Container">
        <div className="NextBtn" onClick={() => handleNextChapter()} >Next Chapter</div>
      </div>
    </>
  );
};

export default Reading;
