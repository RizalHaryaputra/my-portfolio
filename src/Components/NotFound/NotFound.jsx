import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Oops! Signal Lost</h2>
                <p>The page you are looking for has drifted into deep space or doesn't exist.</p>

                <a href="/" className="not-found-btn">
                    Return to Base
                </a>
            </div>
        </div>
    )
}

export default NotFound;