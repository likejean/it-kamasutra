import React from 'react';
import classes from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <a href="/#">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/#">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="/#">News</a>
            </div>
            <div className={classes.item}>
                <a href="/#">Music</a>
            </div>
            <div className='item'>
                <a href="/#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;