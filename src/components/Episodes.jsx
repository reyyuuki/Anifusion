import { Link, Outlet } from 'react-router-dom';
import '../css/Episodes.css';

const Episodes = ({ data }) => {
    if (!data || !data.episodes) {
        return <div>No episodes available</div>;
    }
    console.log(data);
    return (
        <div className="EpisodesContainer">
            <div className="EpisodesWrapper">
                <h1>Episodes</h1>
                {data.episodes.map((item) => {
                    const episodeId = item.id;
                    console.log(episodeId);
                    return (
                        <Link to={`episodes/${episodeId}`} className="EpisodesRow" key={episodeId}>
                            <img src={item.image} alt="Bane" className='EpisodeImage' />
                            <div className="EpisodesInfo">
                                <h3>{item.title}</h3>
                                <h2>{episodeId}</h2>
                            </div>
                        </Link>
                    );
                })}
                
            </div>
        </div>
    );
}

export default Episodes;
