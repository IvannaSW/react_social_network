import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={s.friendItem}>
            <div className={s.avatar}><img src='https://dx54ed3r88ipb.cloudfront.net/upload/IMG_2723.png'/></div>
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default Friend;