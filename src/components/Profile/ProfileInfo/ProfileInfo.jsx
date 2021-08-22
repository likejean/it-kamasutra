import React from 'react';
import classes from "./ProfileInfo.module.css";
import Loader from "../../utils/loaders/Loader";
import Avatar from "antd/es/avatar/avatar";
import {Card, List, Space} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
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
                            <Space justify="center">
                                <b>About Me:</b><span>{props.profile.aboutMe}</span>
                                <List
                                    size="small"
                                    header={<div><b>Contacts</b></div>}
                                    bordered
                                    dataSource={Object.values(props.profile.contacts).filter(contact => contact !== null && contact)}
                                    renderItem={item => <List.Item>{item}</List.Item>}
                                />
                            </Space>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;