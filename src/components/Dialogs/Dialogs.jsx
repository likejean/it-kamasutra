import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.state.dialogs.map(item => <DialogItem key={item.id} {...item} />)}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(item => <Message key={item.id} {...item} />)}
            </div>

        </div>
    );
}

export default Dialogs;