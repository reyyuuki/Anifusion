import { useParams } from "react-router-dom";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { MangaChapters } from "./components/apiFetch";
import './css/Reading.css';

const Reading = () => {
    const {id} = useParams();
    const [chapterImage, setChapterImage] = useState();

    useEffect( () => {
        const Fetching = async () => {
            try {
                const chapterData = await MangaChapters(id);
                if(chapterData){
                    setChapterImage(chapterData);
                    console.log(chapterData);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        Fetching();
    },[chapterImage]);
    return (
        <>
        <Header isManga={true} />
        <div className="MangaChapters">
            {chapterImage && chapterImage.map((item, index) =>(
            <img src={item.img} alt="MangaChapterImage" key={index}/>
            ))}
        </div>
        </>
    );
}



export default Reading;
