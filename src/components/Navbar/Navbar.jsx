import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import {
    UserOutlined
} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import links from "./NavLinkList";

const Navbar = () => {

    return (
        <div>
            <Menu className={classes.navbar}>
                {links.map((item, idx) => (
                    <Menu.Item key={idx} className={classes.item} icon={item.icon}>
                        <NavLink to={item.path} activeClassName={classes.active}>{item.tabName}</NavLink>
                    </Menu.Item>
                ))}
            </Menu>
            <div className={classes.friends}>
                <h2>Friends</h2>
                <div className={classes.avatars}>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                    <div className={classes.avatar}><Avatar size={64} icon={<UserOutlined />} /></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;