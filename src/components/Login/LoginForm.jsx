import React from 'react';
import {Button, Row, Space} from "antd";
import classes from "./Login.module.css";
import {Field} from "redux-form";
import {
    LoginUserCheckboxFormInput,
    LoginUserNameFormInput,
    LoginUserPasswordFormInput
} from "../utils/inputs/LoginFormInput";


const LoginForm = (props) => {
    //Контейнерная компонента, которая оборачивает форму. совершает следующие действия скрыто (под капотом):
    // e.preventDefault(),
    // get all from data and put them to object,
    // props.onSubmit(formData) - поэтому в контейнерную компоненту нужно отправить onSubmit={onSubmit} функцию
    return (
        <Row justify="center">
            <form onSubmit={props.handleSubmit}>
                <Space direction='vertical'>
                    <div className={classes.formItem}>
                        <Field id="username" name={"username"} component={LoginUserNameFormInput} />
                    </div>
                    <div className={classes.formItem}>
                        <Field id="password" name={"password"} component={LoginUserPasswordFormInput} />
                    </div>
                    <div className={classes.formItem}>
                        <Field id="checkbox" name={"rememberMe"} component={LoginUserCheckboxFormInput} />
                    </div>
                    <div className={classes.formItem}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </div>
                </Space>
            </form>
        </Row>
    );
}

export default LoginForm;