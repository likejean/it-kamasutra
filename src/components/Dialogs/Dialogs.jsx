import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Olesia'},
    {id: 3, name: 'Sofiya'},
    {id: 4, name: 'Aleks'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Roman'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your life going'},
    {id: 3, message: 'Great! Never been better!'},
    {id: 4, message: 'That\'s so cool!'},
    {id: 5, message: 'Really!?'},
    {id: 6, message: 'Of course!'}
];



const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsData.map(item => <DialogItem key={item.id} {...item} />)}
            </div>
            <div className={classes.messages}>
                {messagesData.map(item => <Message key={item.id} {...item} />)}
            </div>

        </div>
    );
}

export default Dialogs;