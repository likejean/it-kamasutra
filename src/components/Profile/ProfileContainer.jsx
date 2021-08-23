import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfileThunkCreator
} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId;
        if(this.props.match.params.userId) userId = this.props.match.params.userId;
        else userId = 2;
        this.props.setUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to='/login' />

        return (
                <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

//Which Order?: connect() ------> withRouter -----> AuthRedirect() HOC ----->  <ProfileContainer /> -----> <Profile />
export default compose(
    connect(mapStateToProps, {setUserProfile: setUserProfileThunkCreator}),
    withRouter,
    WithAuthRedirect //оборачиваем ХОКом DialogsContainer, которая в свою очередь оборачивает Dialogs целевую компоненту для атентификационного перенаправления
)(ProfileContainer)
