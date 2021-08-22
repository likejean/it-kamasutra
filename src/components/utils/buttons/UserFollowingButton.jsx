import React from 'react';
import {Button} from "antd";

const FollowButton = ({followingInProgress: {userId, toggleMode}, followHandler, id, description}) => {
    return (
        <Button loading={userId === id && toggleMode} disabled={userId === id && toggleMode} onClick={() => followHandler(id)}>
            {description}
        </Button>
    );
}

export default FollowButton;