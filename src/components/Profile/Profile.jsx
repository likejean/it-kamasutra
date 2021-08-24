import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isStatusFetching={props.isStatusFetching}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;