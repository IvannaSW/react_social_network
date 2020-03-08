import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profInfoContent}>
            <div>
                <img src='https://thecolorrun.ae/wp-content/uploads/2018-default-page-header.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;