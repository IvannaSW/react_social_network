import React from 'react';
import Post from './Post/Post';
import s from '../MyPosts/MyPosts.module.css';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from '../../../components/common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post key={p.id} message={p.message} like_counts={ p.likeCounts} />)
    
    const addNewPosts = (values) => {       
        props.addPost(values.newPost)
    }
    
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <MyPostsReduxForm onSubmit={addNewPosts}/>      
            </div>
            <div className={s.posts}>
                { postsElement }                          
            </div>
        </div>
    )
}

const MyPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
             <div>
                <div>
                    <Field component={Textarea} placeholder="Add new post" name={"newPost"} validate={[required, maxLength10]} />
                </div>
                <div>
                <button>Add post</button>
                </div>       
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm);


export default MyPosts;