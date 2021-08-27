import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {logout} from "../../redux/authReducer";


class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logoutUser={this.props.logoutUser}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default withRouter(connect(mapStateToProps, {logoutUser: logout})(HeaderContainer));