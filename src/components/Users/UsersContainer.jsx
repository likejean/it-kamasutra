import {connect} from "react-redux";
import {
    changeUsersPageThunkCreator,
    followUserThunkCreator, getFriendsThunkCreator,
    getUsersThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/usersReducers";
import React from "react";
import Users from "./Users";
import Loader from "../utils/loaders/Loader";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress, getFriendsFilterStatus,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilteredByPhotoPresent
} from "../../selectors/usersSelectors";

//Контейнерная компонента
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPaginationChangeHandler = (page) => {
        this.props.changeUsersPage(page, this.props.pageSize);
    }

    getFriendsOnly() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize, true);
    }

    render() {
        console.log('render')
        if(this.props.isFetching) {
            return <Loader comment="Please, wait. Loading users..." size="large" />
        }else{
            return (
                <Users users={this.props.users}
                       followUser={this.props.followUser}
                       getFriends={this.getFriendsOnly.bind(this)}
                       isAuth={this.props.isAuth}
                       friendsOnly={this.props.friendsOnly}
                       unfollowUser={this.props.unfollowUser}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       onPaginationChangeHandler={this.onPaginationChangeHandler}
                       followingInProgress={this.props.followingInProgress}
                />
            )
        }
    }
}


const mapStateToProps = (state) => ({
        isAuth: getIsAuth(state),
        friendsOnly: getFriendsFilterStatus(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filteredUsersByPhoto: getUsersFilteredByPhotoPresent(state)
    });

export default compose(
    WithAuthRedirect,   //оборачиваем ХОКом DialogsContainer if authentication protection is needed for entire page
    connect(
        mapStateToProps,
        {
            followUser: followUserThunkCreator,
            unfollowUser: unfollowUserThunkCreator,
            getUsers: getUsersThunkCreator,
            getFriends: getFriendsThunkCreator,
            changeUsersPage: changeUsersPageThunkCreator
        })
)(UsersContainer);