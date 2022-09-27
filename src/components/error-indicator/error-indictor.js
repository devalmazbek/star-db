import React from "react";

import './error-indicator.css';
import errorIcon from './error.png';

const ErrorIndicator = () => {
    return(
        <div className="error d-flex">
            <div className="error-img mr-3">
                <img src={errorIcon} alt="" />
            </div>
            <div className="error-text">
                <h2>Something gone wrong</h2>
                <p>Please refshresh the page</p>
                <p>We will try fix this bag </p>
            </div>
        </div>
    );
    
}

export default ErrorIndicator;