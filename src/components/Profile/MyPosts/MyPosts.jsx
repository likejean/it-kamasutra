import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Button, Input} from 'antd';
const { TextArea } = Input;


let postsData = [
    {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
    {id: 2, message: 'I love it!!!', likes: 45}
];

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
                {postsData.map(post => <Post key={post.id} {...post}/>)}
            </div>
        </div>
    );
}

export default MyPosts;