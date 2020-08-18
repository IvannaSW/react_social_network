import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Textarea} from '../common/FormControls/FormControls';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> )
    let messagesElements = state.messages.map ( m => <Message content={m.content} key={m.id} /> )
    let newMessageBody = state.newMessageBody;

    
    const addNewMessageBody = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}               
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>     
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessageBody}/>
                </div>      
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <div><Field component={Textarea} name={"newMessageBody"} placeholder='Enter your message' validate={[required, maxLength50]} /></div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm);

export default Dialogs;