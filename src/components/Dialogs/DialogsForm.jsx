import React from 'react';
import {Button, Space} from "antd";
import classes from "../Login/Login.module.css";
import {Field} from "redux-form";
import {
    DialogsFormTextarea
} from "../utils/inputs/ReduxFormInputs";
import {maxLengthCreator, requiredField} from "../utils/validators/validators";


const maxLength10 = maxLengthCreator(30);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Space direction='vertical'>
                <div className={classes.formItem}>
                    <Field validate={[requiredField, maxLength10]} id="newMessageBody" name={"newMessageBody"} component={DialogsFormTextarea} />
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