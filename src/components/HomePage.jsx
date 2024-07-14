import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage = () => {
    return (
       <div className="PageContainer">
         <h1>Welcome to YurAni</h1>
         <p>Select a category from the sidebar to see a list of anime.</p>
         
         <Link to={"/Home/Anime"} className='LinkButton'>Anime</Link>
         <Link to={"/Home/Manga"} className='LinkButton'>Manga</Link>
       </div>
    );
}


export default HomePage;
