import React from 'react';
import classes from "./Post.module.css";

function Post({message, likes}) {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATHfPhx-4ylkLboUOmez2VFF1gfdDtUDQzQ&usqp=CAU' alt="avatar"/>
            {message}
            <div>
                <span>{likes}</span>
            </div>
        </div>
    );
}

export default Post;