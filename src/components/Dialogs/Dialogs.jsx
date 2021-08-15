import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";

const DialogItem = () => {
    return (
        <Menu.Item key={1} className={classes.dialog} icon={<UserOutlined />}>
            <NavLink to="/dialogs/1">Sergey</NavLink>
        </Menu.Item>
    )
}

const Message = ({message}) => {
    return (
        <div className={classes.message}>{message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <Menu className={classes.dialogItems}>
                <DialogItem />
                <Menu.Item key={1} className={classes.dialog} icon={<UserOutlined />}>
                    <NavLink to="/dialogs/1">Sergey</NavLink>
                </Menu.Item>
                <Menu.Item key={2} className={classes.dialog} icon={<UserOutlined />}>
                    <NavLink to="/dialogs/2">Olesia</NavLink>
                </Menu.Item>
                <Menu.Item key={3} className={classes.dialog} icon={<UserOutlined />}>
                    <NavLink to="/dialogs/3">Sofia</NavLink>
                </Menu.Item>
                <Menu.Item key={4} className={classes.dialog} icon={<UserOutlined />}>
                    <NavLink to="/dialogs/4">Aleks</NavLink>
                </Menu.Item>
            </Menu>
            <div className={classes.messages}>
                <Message message="Hello!" />
                <Message message="What's up?" />
                <Message message="Nothing. What do you want, ha!?" />
                <Message message="Don't get mad" />
            </div>
        </div>
    );
}

export default Dialogs;