import React from 'react';
import {Button, Space} from "antd";
import classes from "../Login/Login.module.css";
import {Field} from "redux-form";
import {
    DialogsFormTextarea
} from "../utils/inputs/LoginFormInput";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Space direction='vertical'>
                <div className={classes.formItem}>
                    <Field id="newMessageBody" name={"newMessageBody"} component={DialogsFormTextarea} />
                </div>
                <div className={classes.formItem}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Space>
        </form>
    );
}

export default DialogsForm;