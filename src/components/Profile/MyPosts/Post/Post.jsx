import React from 'react';
import classes from "./Post.module.css";

function Post() {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATHfPhx-4ylkLboUOmez2VFF1gfdDtUDQzQ&usqp=CAU' alt="avatar"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;