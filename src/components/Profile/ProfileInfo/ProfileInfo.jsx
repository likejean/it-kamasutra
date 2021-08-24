import React from 'react';
import classes from "./ProfileInfo.module.css";
import Loader from "../../utils/loaders/Loader";
import Avatar from "antd/es/avatar/avatar";
import {Card, Col, Divider, List, Row, Space} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import ProfileStatus from "./ProfileStatus";
const { Meta } = Card;

function ProfileInfo(props) {
    if (!props.profile) {
        return <Loader comment="Please, wait. Loading user profile..." size="large"/>
    } else {
        return (
            <div>
                <div className={classes.descriptionBlock}>
                    <div className='ant-col-5'>
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
                                    <Col flex="350px">
                                        <Meta
                                            avatar={
                                                props.profile.photos.small === null
                                                    ?
                                                    <Avatar
                                                        size={145} style={{backgroundColor: '#87d068'}}
                                                        icon={<UserOutlined/>}
                                                    />
                                                    :
                                                    <Avatar
                                                        size={145}
                                                        src={props.profile.photos.small}
                                                    />
                                            }
                                            title={props.profile.fullName}
                                            description={props.profile.lookingForAJobDescription}
                                        />
                                    </Col>
                                    <Divider orientation="left"/>
                                    <Col flex="auto">
                                        <div style={{marginTop: 25, marginBottom: 25}}><b>About Me:</b><span>{props.profile.aboutMe}</span></div>
                                        <List
                                            size="small"
                                            header={<div><b>Contacts</b></div>}
                                            bordered
                                            dataSource={Object.values(props.profile.contacts).filter(contact => contact !== null && contact)}
                                            renderItem={item => <List.Item>{item}</List.Item>}
                                        />
                                    </Col>
                                    <Divider orientation="left"/>
                                    <ProfileStatus
                                        status={props.status}
                                        updateUserStatus={props.updateUserStatus}
                                        isStatusFetching={props.isStatusFetching}
                                    />
                                </Row>
                            </Space>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;