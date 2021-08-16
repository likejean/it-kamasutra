import React from 'react';
import classes from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img alt="profile" width="950"
                     src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg"/>

            </div>

            <div className={classes.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;