import React from 'react';
import {Alert, Row} from "antd";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
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


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Login);