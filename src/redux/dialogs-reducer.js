const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name: 'Ivanna'},
        {id:2, name: 'Jefry'},
        {id:3, name: 'Monica'},
        {id:4, name: 'Kristina'}
    ],
    messages: [
        {id:1, content: 'Hi, Im busy'},
        {id:2, content: 'How are you'},
        {id:3, content: 'Bye,bye'},
        {id:4, content: 'Soryy for the delay with answer'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY){
        state.newMessageBody = action.body;        
    }
    else if (action.type === SEND_MESSAGE){           
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, content: body});
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;