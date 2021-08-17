import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Button, Input} from 'antd';
import {addPostCreator, updatePostCreator} from "../../../redux/state";
const { TextArea } = Input;



const MyPosts = (props) => {

    const onChange = e => props.dispatch(updatePostCreator(e.target.value));
    const onClick = () => props.dispatch(addPostCreator());

    return (
        <div className={classes.postsBlock}>
            My Posts
            <div>
                <div className={classes.textarea}>
                    <TextArea onChange={onChange} value={props.newPostText} showCount maxLength={250}/>
                </div>
                <div>
                    <Button onClick={onClick}>Add Post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} {...post}/>)}
            </div>
        </div>
    );
}

export default MyPosts;