import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import img1 from '../assets/PngItem_179073.png';
import img2 from '../assets/PngItem_5095982.png';


const HomePage = () => {
    return (
       <div className="PageContainer">
         <h1 className='WelcomeLine'>Explore <span className='Letter-A'>A</span>nifusion's magic!</h1>
         <h2 className='Intro'>Stream your favorite anime and read captivating manga seamlessly on AniFusion</h2>
         <div className='Home-ImageContainer'>
         <img src={img1} alt="Character-Image" className='RightPhoto'/>
         <img src={img2} alt="Character-Image" className='LeftPhoto'/>
         </div>
         <div className="Home-BtnContainer">
         <Link to={"/Home/Anime"} className='LinkButton'>Anime</Link>
         <Link to={"/Home/Manga"} className='LinkButton'>Manga</Link>
         </div>
       </div>
    );
}


export default HomePage;
