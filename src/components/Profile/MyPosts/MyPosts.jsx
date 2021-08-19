import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Button, Input} from 'antd';
const { TextArea } = Input;

///////////////COMMENTS//////////////////////////////
// Презентационная компонента - pure function.
// No interaction with Redux store.
// Renders markup HTML (разметку) only.
// Receives data via props from Container Component.
////////////////////////////////////////////////////

const MyPosts = (props) => {

    const onChange = e => {
        props.updateNewPostText (e.target.value);
    }

    return (
        <div className={classes.postsBlock}>
            My Posts
            <div>
                <div className={classes.textarea}>
                    <TextArea onChange={onChange} value={props.newPostText} showCount maxLength={250}/>
                </div>
                <div>
                    <Button onClick={props.addPost}>Add Post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} {...post}/>)}
            </div>
        </div>
    );
}

export default MyPosts;