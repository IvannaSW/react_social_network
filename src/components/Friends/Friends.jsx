import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.friends.map( f => <Friend name={f.name} /> )
    return(
        <div className={s.friendList}>
            {friendsElements}
        </div>
    );
}

export default Friends;