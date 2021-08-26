import React from 'react';
import {Alert, Row} from "antd";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

    const onSubmit = (formData) => {
        const { email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            {!props.isAuth ? <Alert message="You are not logged in" type="warning" /> : <Alert message="You are logged in" type="success" />}
            <Row justify="center">
                <h1>LOGIN</h1>
            </Row>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;