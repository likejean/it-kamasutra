import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Card, Col, Divider, List, Row, Space} from "antd";
import ProfileStatus from "./ProfileStatus";
const { Meta } = Card;

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
                    <Divider orientation="left"/>
                    <Col>
                        <Space direction='vertical'>{isOwner && <Button><input type='file' onChange={onMainPhotoSelected}/></Button>}</Space>
                    </Col>
                    <Divider orientation="left"/>
                    <Col flex="auto">
                        <div style={{marginTop: 25, marginBottom: 25}}><b>About Me:</b><span>{aboutMe}</span></div>
                        <List
                            size="small"
                            header={<div><b>Contacts</b></div>}
                            bordered
                            dataSource={Object.values(contacts).filter(contact => contact !== null && contact)}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                    <Divider orientation="left"/>
                    <ProfileStatus
                        status={status}
                        updateUserStatus={updateUserStatus}
                        isStatusFetching={isStatusFetching}
                    />
                </Row>
            </Space>
        </Card>
    );
}

export default ProfileCardWrapper;