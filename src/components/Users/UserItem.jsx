import React from 'react';
import {Badge, Card, Space} from "antd";
import UserAvatar from "../utils/avatars/UserAvatar";
import FollowButton from "../utils/buttons/UserFollowingButton";

const UserItem = ({user, isAuth, idx, followingInProgress, followUser, unfollowUser}) => {
    return (
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
    );
}

export default UserItem;