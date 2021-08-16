import React from 'react';
import classes from "../Dialogs.module.css";

function Message({message}) {
    return (
        <div className={classes.message}>{message}</div>
    );
}

export default Message;