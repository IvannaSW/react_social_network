import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello dear friend', likeCounts: 12},
                {id: 2, message: 'It\'s my first post', likeCounts: 100},
            ],
            newPostText: 'placeholder text'
        },
        dialogsPage: {
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

        },
        sidebarPage: {
            friends: [
                {id:1, name: 'Svitlana'},
                {id:2, name: 'Olha'},
                {id:3, name: 'Mykola'}            
            ]
        }
    },
    _callSubscriber(){
        console.log('state changed');
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    
    dispatch(action ){//{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
        
}

export default store;