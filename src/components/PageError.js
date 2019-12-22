import React from 'react';
import './styles/PageError.css';
import { Link } from 'react-router-dom';

const PageError = (props) => {
    return (
        <div className="PageError">
            <span role="img" aria-label="error">{props.error.message}❌</span>
            <Link to="/badges">
                Go to badges list
            </Link>
        </div>
    )
}

export default PageError;