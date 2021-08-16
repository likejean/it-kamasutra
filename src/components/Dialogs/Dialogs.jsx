import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";

const DialogUsers = () => {

    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Olesia'},
        {id: 3, name: 'Sofiya'},
        {id: 4, name: 'Aleks'}
    ]

    return (
        <div className={classes.dialogItems}>
            {dialogsData.map(dialog => <div key={dialog.id} className={classes.dialog}>
                <UserOutlined/><NavLink to={`/dialogs/${dialog.id}`}><span>{dialog.name}</span></NavLink>
            </div>)}
        </div>
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
            <DialogUsers />
            <div className={classes.messages}>
                <Message message="Hello!"/>
                <Message message="What's up?"/>
                <Message message="Nothing. What do you want, ha!?"/>
                <Message message="Don't get mad"/>
            </div>
        </div>
    );
}

export default Dialogs;