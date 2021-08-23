import React from 'react';
import {Alert} from "antd";
import {connect} from "react-redux";

const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            {!props.isAuth ? <Alert message="You are not logged in" type="warning" /> : <Alert message="You are logged in" type="success" />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Login);