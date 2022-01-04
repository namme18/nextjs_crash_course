import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with latest web dev news
            </p>
        </div>
    )
}

export default Header
