import React from 'react';
import Post from './Post/Post';
import s from '../MyPosts/MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post message={p.message} like_counts={ p.likeCounts} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
       // props.updateNewPostText(text);
       let action = updateNewPostTextActionCreator(text);
       props.dispatch(action);
    }
    
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                <button onClick={ addPost }>Add post</button>
                </div>       
            </div>
            <div className={s.posts}>
                { postsElement }                          
            </div>
        </div>
    )
}

export default MyPosts;