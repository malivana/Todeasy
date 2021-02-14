import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.sass';

function NotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>There is no page that are you looking for</p>
            <Link to="/" className='not-found__btn btn btn_back'>Return to our galaxy</Link>
        </div>
    )
}

export default NotFound;