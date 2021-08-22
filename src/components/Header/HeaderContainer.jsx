import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {userLoginThunkCreator} from "../../redux/authReducer";


class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setUserAuth()
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default withRouter(connect(mapStateToProps, {setUserAuth: userLoginThunkCreator})(HeaderContainer));