import React from 'react';
import s from './ProfileInfo.module.css';
import profileReducer from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />;
    }
    return (
        <div className={s.profInfoContent}>
            <div>
                <img src='https://thecolorrun.ae/wp-content/uploads/2018-default-page-header.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
}

export default ProfileInfo;