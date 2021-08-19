import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "antd";

///////////////COMMENTS//////////////////////////////
// Презентационная компонента - pure function.
// No interaction with Redux store.
// Renders markup HTML (разметку) only.
// Receives data via props from Container Component.
////////////////////////////////////////////////////

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialogs.map(item => <DialogItem key={item.id} {...item} />)}
            </div>
            <div className={classes.messages}>
                <div>{props.messages.map(item => <Message key={item.id} {...item} />)}</div>
                <div>
                    <div><textarea value={props.newMessageText} onChange={props.onMessageTextChange} placeholder="Enter your message"/></div>
                    <div onClick={props.onSendMessageClick}><Button>Send</Button></div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;