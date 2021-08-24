import React from 'react';
import classes from "./Post.module.css";
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import {Badge, Space} from "antd";

function Post({message, likes}) {
    return (
        <div className={classes.item}>
            <Space direction='horizontal'>
                <div className={classes.avatar}>
                    <Badge count={likes} offset={[-5, 10]}>
                        <Avatar
                            shape="round"
                            size={65}
                            style={{backgroundColor: '#87d068'}}
                            icon={<UserOutlined/>}
                        />
                    </Badge>
                </div>
                <div>{message}</div>
            </Space>
        </div>
    );
}

export default Post;