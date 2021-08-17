import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "antd";
import {sendMessageCreator, updateMessageCreator} from "../../redux/state";


const Dialogs = (props) => {

    const onSendMessageClick = () => props.dispatch(sendMessageCreator());
    const onMessageTextChange = e => props.dispatch(updateMessageCreator(e.target.value));

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.messagesPage.dialogs.map(item => <DialogItem key={item.id} {...item} />)}
            </div>
            <div className={classes.messages}>
                <div>{props.messagesPage.messages.map(item => <Message key={item.id} {...item} />)}</div>
                <div>
                    <div><textarea value={props.messagesPage.newMessageText} onChange={onMessageTextChange} placeholder="Enter your message"/></div>
                    <div onClick={onSendMessageClick}><Button>Send</Button></div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;