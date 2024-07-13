import "../css/notFound.css";
import { Link } from "react-router-dom";
const NotFoundEpisodes = () => {
  return (
    <div className="Error-Container">
      <h1>Episode Not Found</h1>
      <p>The requested episodes does not available.</p>
      <Link to="/" className="BackBtn">Go back to Homepage</Link>
    </div>
  );
};

export default NotFoundEpisodes;
