import React from 'react';
import {Button, Row, Space} from "antd";
import classes from "./Login.module.css";
import {Field} from "redux-form";
import {
    LoginUserCheckboxFormInput,
    LoginEmailFormInput,
    LoginUserPasswordFormInput
} from "../utils/inputs/ReduxFormInputs";
import {
    email,
    maxPasswordLengthCreator, maxUsernameLengthCreator,
    minPasswordLengthCreator, minUsernameLengthCreator,
    requiredField
} from "../utils/validators/validators";

const minPasswordLength = minPasswordLengthCreator(2);
const maxPasswordLength = maxPasswordLengthCreator(30);
const minUsernameLength = minUsernameLengthCreator(2);
const maxUsernameLength = maxUsernameLengthCreator(30);

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
                        <Field id="email" validate={[requiredField, maxUsernameLength, minUsernameLength, email]} name={"email"} component={LoginEmailFormInput} />
                    </div>
                    <div className={classes.formItem}>
                        <Field id="password" validate={[requiredField, maxPasswordLength, minPasswordLength]} name={"password"} component={LoginUserPasswordFormInput} />
                    </div>
                    <div className={classes.formItem}>
                        <Field id="checkbox" name={"rememberMe"} component={LoginUserCheckboxFormInput} />
                    </div>
                    {props.error && <div className={classes.formSummaryError}>
                        {props.error}
                    </div>}
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