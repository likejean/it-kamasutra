import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatusThunkCreator,
    setUserProfileThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) this.props.history.push('/login');
        }
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                isStatusFetching={this.props.isStatusFetching}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isStatusFetching: state.profilePage.isStatusFetching,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

//Which Order?: connect() ------> withRouter -----> AuthRedirect() HOC ----->  <ProfileContainer /> -----> <Profile />
export default compose(
    connect(
        mapStateToProps,
        {
            setUserProfile: setUserProfileThunkCreator,
            setUserStatus: getUserStatusThunkCreator,
            updateUserStatus: updateUserStatusThunkCreator
        }),
    withRouter,
    WithAuthRedirect //оборачиваем ХОКом DialogsContainer, которая в свою очередь оборачивает Dialogs целевую компоненту для атентификационного перенаправления
)(ProfileContainer)
