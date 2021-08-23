import React from 'react';
import {Badge} from "antd";
import {NavLink} from "react-router-dom";
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";

const UserAvatar = ({isAuth, photo, idx, userId}) => {
    return (
        <div className='ant-col-5'>
            {photo === null
                ?
                <Badge size="default" count={idx + 1}>
                    <NavLink disabled={!isAuth} to={'/profile/' + userId}>
                        <Avatar
                            shape="square"
                            size={125}
                            style={{backgroundColor: '#87d068'}}
                            icon={<UserOutlined/>}
                        />
                    </NavLink>
                </Badge>
                :
                <Badge size="default" count={idx + 1}>
                    <NavLink disabled={!isAuth} to={'/profile/' + userId}>
                        <Avatar
                            shape="square"
                            size={125}
                            src={photo}
                        />
                    </NavLink>
                </Badge>
            }
        </div>
    );
}

export default UserAvatar;