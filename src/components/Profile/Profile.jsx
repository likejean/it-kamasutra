import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img alt="profile" width="950" src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg" />

            </div>

            <div>
                Avatar + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className='post'>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;