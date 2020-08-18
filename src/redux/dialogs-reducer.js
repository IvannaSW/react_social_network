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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, content: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;