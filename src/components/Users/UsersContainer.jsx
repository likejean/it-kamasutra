import {connect} from "react-redux";
import {
    changeUsersPageThunkCreator,
    followUserThunkCreator,
    getUsersThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/usersReducers";
import React from "react";
import Users from "./Users";
import Loader from "../utils/loaders/Loader";

//Контейнерная компонента

class UsersContainerComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPaginationChangeHandler = (page) => {
        this.props.changeUsersPage(page, this.props.pageSize);
    }

    render() {
        if(this.props.isFetching) {
            return <Loader comment="Please, wait. Loading users..." size="large" />
        }else{
            return (
                <Users users={this.props.users}
                       followUser={this.props.followUser}
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
});

export default connect(
    mapStateToProps,
    {
        followUser: followUserThunkCreator,
        unfollowUser: unfollowUserThunkCreator,
        getUsers: getUsersThunkCreator,
        changeUsersPage: changeUsersPageThunkCreator
    })(UsersContainerComponent);