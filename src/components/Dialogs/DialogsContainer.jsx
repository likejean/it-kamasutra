import React from 'react';
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    const onSendMessageClick = () => props.store.dispatch(sendMessageCreator());
    const onMessageTextChange = e => props.store.dispatch(updateMessageCreator(e.target.value));

    return (
        <Dialogs
            onSendMessageClick={onSendMessageClick}
            onMessageTextChange={onMessageTextChange}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
        />
    );
}

export default DialogsContainer;