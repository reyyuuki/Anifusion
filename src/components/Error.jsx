import "../css/notFound.css";
import { Link } from "react-router-dom";
const Error = () => {
    return (
       <div className="Error-Container">
        <h1>404 Not Found</h1>
        <p>The requested data does not available.</p>
        <Link to="/" className="BackBtn">Go back to Homepage</Link>
       </div>
    );
}



export default Error;
