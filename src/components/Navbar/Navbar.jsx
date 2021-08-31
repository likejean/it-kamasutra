import React from 'react';
import classes from './Navbar.module.css';
import {NavLink, withRouter} from "react-router-dom";
import {Menu, Avatar} from "antd";
import {
    UserOutlined
} from "@ant-design/icons";
import links from "./NavLinkList";

const Navbar = (props) => {

    let selectedKey;
    const url = props.location.pathname.split('/');
    if(!url[0] && !url[1]){
        selectedKey = '0';
    }else{
        selectedKey = links.find(obj => obj.path === '/' + url[1]).id.toString();
    }


    return (
        <div>
            <Menu className={classes.navbar} defaultSelectedKeys={['1']} selectedKeys={[selectedKey]}>
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

export default withRouter(Navbar);