import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader />;
    }
    return (
        <div className={s.profInfoContent}>
            <div>
                <img src='https://thecolorrun.ae/wp-content/uploads/2018-default-page-header.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <div>{profile.aboutMe}</div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
}

export default ProfileInfo;