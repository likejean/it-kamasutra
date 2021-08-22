import React from 'react';
import classes from "../../Users/Users.module.css";
import {Row, Spin} from "antd";

function Loader({comment, size}) {
    return (
        <div className={classes.usersLoader}>
            <Row justify="center" align="center">
                <Spin size={size} />
            </Row>
            <Row justify="center" align="center">
                <span>{comment}</span>
            </Row>
        </div>
    );
}

export default Loader;