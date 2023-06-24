import React from 'react';
import '../styles/loder.css'; // Import CSS file for loader styles

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader-overlay ${isLoading ? 'active' : ''}`}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
