import React from 'react';
import {Avatar, Card, Col} from "antd";
import {UserOutlined} from "@ant-design/icons";
const { Meta } = Card;

const ProfileAvatarComponent = ({smallPhoto, fullName, lookingForAJobDescription}) => {
    return (
        <Col flex="750px">
            <Meta
                avatar={
                    smallPhoto === null
                        ?
                        <Avatar
                            size={145} style={{backgroundColor: '#87d068'}}
                            icon={<UserOutlined/>}
                        />
                        :
                        <Avatar
                            size={145}
                            src={smallPhoto}
                        />
                }
                title={fullName}
                description={lookingForAJobDescription}
            />
        </Col>
    );
}

export default ProfileAvatarComponent;