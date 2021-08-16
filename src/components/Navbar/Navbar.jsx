import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import {
    CustomerServiceOutlined,
    GlobalOutlined,
    MessageOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

const Navbar = () => {
    return (
        <div>
            <Menu className={classes.navbar}>
                <Menu.Item key={1} className={classes.item} icon={<UserOutlined />}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </Menu.Item>
                <Menu.Item key={2} className={classes.item} icon={<MessageOutlined />}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </Menu.Item>
                <Menu.Item key={3} className={classes.item} icon={<GlobalOutlined />}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </Menu.Item>
                <Menu.Item key={4} className={classes.item} icon={<CustomerServiceOutlined />}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </Menu.Item>
                <Menu.Item key={5} className={classes.item} icon={<SettingOutlined />}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </Menu.Item>
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