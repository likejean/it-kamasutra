import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button, Row, Space} from "antd";
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";

const Header = (props) => {
    return (
        <header className={classes.header}>

            <img alt="eagle" src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg" />
            <Space>
                <Row align='center'>
                    <h1 className={classes.title}>It-Kamasutra</h1>
                </Row>
            </Space>
            <div className={classes.loginBlock}>
                <Space size='small'>
                    <Row>
                        {props.isAuth && <Avatar
                            size={35} style={{backgroundColor: '#87d068'}}
                            icon={<UserOutlined/>}
                        />}
                        {props.isAuth && <h2>{props.login}</h2>}
                        {!props.isAuth ? <NavLink to={'/login'}><Button>Login</Button></NavLink> : <Button onClick={props.logoutUser}>Logout</Button>}
                    </Row>
                </Space>
            </div>
        </header>

    );
}

export default Header;