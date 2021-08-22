import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button, Space} from "antd";

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt="eagle" src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg" />
            <div className={classes.loginBlock}>
                <Space size='small'>
                    <NavLink to={'/login'}><Button>Login</Button></NavLink>
                    <Button>Logout</Button>
                </Space>
            </div>
        </header>

    );
}

export default Header;