import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatusThunkCreator,
    savePhotoThunkCreator,
    setUserProfileThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    refreshComponent() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) this.props.history.push('/login');
        }
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidMount() {
        this.refreshComponent();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshComponent();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                isStatusFetching={this.props.isStatusFetching}
                savePhoto={this.props.savePhoto}
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
            updateUserStatus: updateUserStatusThunkCreator,
            savePhoto: savePhotoThunkCreator
        }),
    withRouter,
    WithAuthRedirect //оборачиваем ХОКом DialogsContainer, которая в свою очередь оборачивает Dialogs целевую компоненту для атентификационного перенаправления
)(ProfileContainer)
