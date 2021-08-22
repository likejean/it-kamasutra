import React, {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {setUserAuthCreator} from "../../redux/authReducer";


class HeaderContainer extends Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserAuth(id, email, login);
                }
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default withRouter(connect(mapStateToProps, {setUserAuth: setUserAuthCreator})(HeaderContainer));