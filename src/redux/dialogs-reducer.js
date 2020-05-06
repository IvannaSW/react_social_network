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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, content: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;