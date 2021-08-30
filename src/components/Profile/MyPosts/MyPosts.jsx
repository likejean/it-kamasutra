import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm} from "redux-form";
import MyPostsForm from "./MyPostsForm";

///////////////COMMENTS//////////////////////////////
// Презентационная компонента - pure function.
// No interaction with Redux store.
// Renders markup HTML (разметку) only.
// Receives data via props from Container Component.
////////////////////////////////////////////////////


const AddPostReduxForm = reduxForm({form: 'post'})(MyPostsForm);

const MyPosts = (props) => {

    const onSubmit = ({newPostBody}) => props.addPost(newPostBody);

    return (
        <div className={classes.postsBlock}>
            My Posts
            <AddPostReduxForm onSubmit={onSubmit} />
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} {...post}/>)}
            </div>
        </div>
    );
}

export default MyPosts;