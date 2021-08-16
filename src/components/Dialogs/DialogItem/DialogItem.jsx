import React from 'react';
import classes from "../Dialogs.module.css";
import {UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

function DialogItem({id, name}) {
    let path = "/dialogs/" + id;

    return (
        <div className={classes.dialog}>
            <UserOutlined/><NavLink to={path}><span>{name}</span></NavLink>
        </div>
    );
}

export default DialogItem;