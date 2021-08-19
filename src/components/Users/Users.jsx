import React from 'react';
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import {Badge, Card, Button, Space} from 'antd';
import classes from "./Users.module.css";

function Users(props) {
    return (
        <div>
            {
                props.users.map(user => (<div className={classes.users} key={user.id}>
                    <Badge.Ribbon text={user.status}>
                        <Card className='ant-row-center' title={user.fullName} size="medium">
                            <Space size='large'>
                                <div className='ant-col-5'>
                                    <Avatar size={95} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                                </div>
                                <div className='ant-col'>
                                    <div>
                                        <span>{user.location.city}</span>,
                                        <span>{user.location.country}</span>
                                    </div>

                                </div>
                                <div>
                                    {user.followed ?
                                        <Button onClick={() => props.unfollowUser(user.id)}>Follow</Button>
                                        :
                                        <Button onClick={() => props.followUser(user.id)}>Unfollow</Button>
                                    }
                                </div>
                            </Space>
                        </Card>
                    </Badge.Ribbon>

                </div>))
            }
        </div>
    );
}

export default Users;