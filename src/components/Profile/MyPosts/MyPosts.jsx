import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Button, Input} from 'antd';
const { TextArea } = Input;

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            My Posts
            <div>
                <div className={classes.textarea}>
                    <TextArea showCount maxLength={250}/>
                </div>
                <div>
                    <Button>Add Post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hello1'/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;