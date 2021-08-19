import React from 'react';
import {addPostCreator, updatePostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


//Контейнерная компонента
const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const updateNewPostText = e => props.store.dispatch(updatePostCreator(e.target.value));
    const addPost = () => props.store.dispatch(addPostCreator());

    return (
        <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;