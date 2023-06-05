import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
           <h1>Страница не найдена</h1>
            <Link to={'/'}>Go to Home</Link>
        </div>
    );
};

export default NotFound;