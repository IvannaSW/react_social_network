import React from 'react';
import Post from './Post/Post';
import s from '../MyPosts/MyPosts.module.css';

const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post message={p.message} like_counts={ p.likeCounts} />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();        
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);       
    }
    
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                <button onClick={ onAddPost }>Add post</button>
                </div>       
            </div>
            <div className={s.posts}>
                { postsElement }                          
            </div>
        </div>
    )
}

export default MyPosts;