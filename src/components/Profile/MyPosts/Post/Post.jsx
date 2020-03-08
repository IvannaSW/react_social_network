import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
            {props.message}
            <div>
                <span>Like-</span>
                <span>{props.like_counts}</span>
            </div>
        </div>               
    )
}

export default Post;