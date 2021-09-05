import React from 'react';
import classes from "./ProfileInfo.module.css";
import Loader from "../../utils/loaders/Loader";
import ProfileCardWrapper from "./ProfileCardWrapper";
function ProfileInfo(props) {

    if (!props.profile) {
        return <Loader comment="Please, wait. Loading user profile..." size="large"/>
    } else {
        const onMainPhotoSelected = (e) => {
            if(e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        }
        return (
            <div>
                <div className={classes.descriptionBlock}>
                    <div className='ant-col-5'>
                        <ProfileCardWrapper
                            onMainPhotoSelected={onMainPhotoSelected}
                            lookingForAJobDescription={props.profile.lookingForAJobDescription}
                            smallPhoto={props.profile.photos.small}
                            fullName={props.profile.fullName}
                            aboutMe={props.profile.aboutMe}
                            contacts={props.profile.contacts}
                            status={props.status}
                            isOwner={props.isOwner}
                            isStatusFetching={props.isStatusFetching}
                            updateUserStatus={props.updateUserStatus}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;