import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {Card, Divider, Row, Space} from "antd";
import ProfileStatus from "./ProfileStatus";
import ContactListComponent from "./ProfileCardComponents/ContactListComponent";
import ProfileAvatarComponent from "./ProfileCardComponents/ProfileAvatarComponent";
import AvatarPhotoSelectionComponent from "./ProfileCardComponents/AvatarPhotoSelectionComponent";

const ProfileCardWrapper = ({
        onMainPhotoSelected,
        lookingForAJobDescription,
        smallPhoto,
        isOwner,
        fullName,
        aboutMe,
        contacts,
        status,
        isStatusFetching,
        updateUserStatus
}) => {

    return (
        <Card
            cover={
                <img alt="profile" width="950"
                     src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg"/>}
            style={{width: 950, padding: 15}}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Space justify="center">
                <Row>
                    <ProfileAvatarComponent smallPhoto={smallPhoto} fullName={fullName} lookingForAJobDescription={lookingForAJobDescription}/>
                    <Divider orientation="left"/>
                    <AvatarPhotoSelectionComponent isOwner={isOwner} onMainPhotoSelected={onMainPhotoSelected}/>
                    <Divider orientation="left"/>
                    <ContactListComponent aboutMe={aboutMe} contacts={contacts}/>
                    <Divider orientation="left"/>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} isStatusFetching={isStatusFetching}/>
                </Row>
            </Space>
        </Card>
    );
}

export default ProfileCardWrapper;