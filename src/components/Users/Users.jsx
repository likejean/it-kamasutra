import React from 'react';
import {Badge, Button, Card, Col, Divider, Pagination, Row, Space} from "antd";
import classes from "./Users.module.css";
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";

function Users({users, followUser, unfollowUser, totalUsersCount, currentPage, pageSize, onPaginationChangeHandler}) {

    const pagesCount = totalUsersCount % pageSize === 0
        ? totalUsersCount / pageSize
        : Math.floor(totalUsersCount / pageSize) + 1;


    return (
        <div>
            <Row align="middle" style={{marginTop: 25}}>
                <Col span={12} offset={6}>
                    <Space>
                        <Pagination
                            showSizeChanger={false}
                            current={currentPage}
                            onChange={onPaginationChangeHandler}
                            total={pagesCount * 10}
                        />
                    </Space>
                </Col>
            </Row>
            <Row><Divider orientation="center"><span style={{fontSize: 25}}>Users</span></Divider></Row>
            {
                users.map((user, idx) => (<div className={classes.users} key={user.id}>
                    <Badge.Ribbon text={user.name}>
                        <Card className='ant-row-center' title={user.name} size="medium">
                            <Space size='large'>
                                <div className='ant-col-5'>
                                    {user.photos.small === null
                                        ?
                                        <Badge size="default" count={idx + 1}><Avatar shape="square" size={125} style={{backgroundColor: '#87d068'}}
                                                                                      icon={<UserOutlined/>}/></Badge>
                                        :
                                        <Badge size="default" count={idx + 1}><Avatar shape="square" size={125} src={user.photos.small}/></Badge>
                                    }
                                </div>
                                <div className='ant-col'>
                                </div>
                                <div>
                                    {user.followed ?
                                        <Button onClick={() => unfollowUser(user.id)}>Follow</Button>
                                        :
                                        <Button onClick={() => followUser(user.id)}>Unfollow</Button>
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