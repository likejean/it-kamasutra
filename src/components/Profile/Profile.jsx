import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img alt="profile" width="950" src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg" />

            </div>

            <div>
                Avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;