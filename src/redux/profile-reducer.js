const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello dear friend', likeCounts: 12},
        {id: 2, message: 'It\'s my first post', likeCounts: 100},
    ],
    newPostText: 'placeholder text'
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCounts: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';        
    }
    else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;       
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
