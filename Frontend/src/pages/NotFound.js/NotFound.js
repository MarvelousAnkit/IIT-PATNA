import { Link } from "react-router-dom";

import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="container">
            <div className="center">
                <h2>404 Error</h2>
                <p>We cannot find that page!</p>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export {NotFound};