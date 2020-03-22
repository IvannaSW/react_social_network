import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {  

    let state = props.store.getState();

    let onSendMessageClick = () => {        
        props.store.dispatch(sendMessageCreator());

    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return(
        <Dialogs newMessageBody = {state.dialogsPage.newMessageBody} dialogs = {state.dialogsPage.dialogs}
         messages = {state.dialogsPage.messages} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>
    )
}

export default DialogsContainer;