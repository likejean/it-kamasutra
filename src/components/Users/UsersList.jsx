import React from 'react';
import classes from "./Users.module.css";
import UserItem from "./UserItem";

const UsersList = ({isAuth, users, followUser, unfollowUser, followingInProgress}) => {
    return (
        <>
            {
                users.map((user, idx) => (<div className={classes.users} key={user.id}>
                    <UserItem user={user} isAuth={isAuth} idx={idx} followingInProgress={followingInProgress} followUser={followUser} unfollowUser={unfollowUser}/>
                </div>))
            }
        </>
    );
}

export default UsersList;