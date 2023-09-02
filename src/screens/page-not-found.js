import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundScreen = () => {
    return (
        <div>
            <h3>something went wrong..</h3>
            <NavLink to="/">GoBack to Home</NavLink>
        </div>
    );
};

export default PageNotFoundScreen;