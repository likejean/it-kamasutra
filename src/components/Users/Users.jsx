import React from 'react';
import {Badge, Card, Divider, Row, Space} from "antd";
import classes from "./Users.module.css";
import UsersPagination from "../utils/paginations/UsersPagination";
import FollowButton from "../utils/buttons/UserFollowingButton";
import UserAvatar from "../utils/avatars/UserAvatar";

function Users({isAuth, users, followUser, unfollowUser, totalUsersCount, currentPage, pageSize, onPaginationChangeHandler, followingInProgress}) {

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
                                <UserAvatar isAuth={isAuth} photo={user.photos.small} idx={idx} userId={user.id}/>
                                {isAuth ?
                                    !user.followed ?
                                        <FollowButton followingInProgress={followingInProgress} followHandler={followUser} id={user.id} description={'Follow'}/>
                                         :
                                        <FollowButton followingInProgress={followingInProgress} followHandler={unfollowUser} id={user.id} description={'Unfollow'}/>
                                    :
                                    null
                                }
                            </Space>
                        </Card>
                    </Badge.Ribbon>
                </div>))
            }
        </div>
    );
}

export default Users;