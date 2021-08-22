import React from 'react';
import {Badge, Button, Card, Divider, Row, Space} from "antd";
import classes from "./Users.module.css";
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import UsersPagination from "../utils/paginations/UsersPagination";
import {NavLink} from "react-router-dom";

function Users({users, followUser, unfollowUser, totalUsersCount, currentPage, pageSize, onPaginationChangeHandler}) {

    const pagesCount = totalUsersCount % pageSize === 0
        ? totalUsersCount / pageSize
        : Math.floor(totalUsersCount / pageSize) + 1;

    return (
        <div>
            <UsersPagination
                currentPage={currentPage}
                onPaginationChangeHandler={onPaginationChangeHandler}
                pagesCount={pagesCount}
            />
            <Row>
                <Divider orientation="center">
                    <span style={{fontSize: 25}}>Users</span>
                </Divider>
            </Row>
            {
                users.map((user, idx) => (<div className={classes.users} key={user.id}>
                    <Badge.Ribbon text={user.name}>
                        <Card className='ant-row-center' title={user.name} size="medium">
                            <Space size='large'>
                                <div className='ant-col-5'>
                                    {user.photos.small === null
                                        ?
                                        <Badge size="default" count={idx + 1}>
                                            <NavLink to={'/profile/' + user.id}>
                                                <Avatar
                                                    shape="square"
                                                    size={125} style={{backgroundColor: '#87d068'}}
                                                    icon={<UserOutlined/>}
                                                />
                                            </NavLink>
                                        </Badge>
                                        :
                                        <Badge size="default" count={idx + 1}>
                                            <NavLink to={'/profile/' + user.id}>
                                                <Avatar
                                                    shape="square"
                                                    size={125}
                                                    src={user.photos.small}
                                                />
                                            </NavLink>
                                        </Badge>
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