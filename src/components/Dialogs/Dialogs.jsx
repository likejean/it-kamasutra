import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsForm from "./DialogsForm";
import {reduxForm} from "redux-form";

///////////////COMMENTS//////////////////////////////
// Презентационная компонента - pure function.
// No interaction with Redux store.
// Renders markup HTML (разметку) only.
// Receives data via props from Container Component.
////////////////////////////////////////////////////

const AddMessageReduxForm = reduxForm({form: 'message'})(DialogsForm);


const Dialogs = (props) => {

    const onSubmit = ({newMessageBody}) => props.onSendMessageClick(newMessageBody);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialogs.map(item => <DialogItem key={item.id} {...item} />)}
            </div>
            <div>
                <div>{props.messages.map(item => <Message key={item.id} {...item} />)}</div>
                <AddMessageReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}


export default Dialogs;