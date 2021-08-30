import React from 'react';
import {Button, Divider, Row, Space} from "antd";
import classes from "./Users.module.css";
import UsersPagination from "../utils/paginations/UsersPagination";
import UsersList from "./UsersList";

const UsersPage = ({isAuth, users, getFriends, friendsOnly, followUser, unfollowUser, totalUsersCount, currentPage, pageSize, onPaginationChangeHandler, followingInProgress}) => {

    const pagesCount = totalUsersCount % pageSize === 0
        ? totalUsersCount / pageSize
        : Math.floor(totalUsersCount / pageSize) + 1;

    return (
        <div>
            <Row justify='center'>
                <div className={classes.pagination}>
                    <UsersPagination
                        currentPage={currentPage}
                        onPaginationChangeHandler={onPaginationChangeHandler}
                        pagesCount={pagesCount}
                    />
                </div>
            </Row>
            <Row>
                <div className={classes.title}>
                    <span style={{fontSize: 35}}>
                        Users
                    </span>
                </div>
                <Divider orientation="center">
                    <Space>
                        <Button type={friendsOnly ? 'primary' : 'dashed'} onClick={getFriends}>
                            {friendsOnly ? 'Friends Only' : 'Select friends'}
                        </Button>
                    </Space>
                </Divider>
            </Row>
            <UsersList
                isAuth={isAuth}
                users={users}
                followUser={followUser}
                unfollowUser={unfollowUser}
                followingInProgress={followingInProgress}
            />
        </div>
    );
}

export default UsersPage;