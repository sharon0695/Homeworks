import React from "react";
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <div className="Texto">Loading...</div>
            <div className="loader"></div>
        </div>
    );
}
export default Loader;