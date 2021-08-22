import {connect} from "react-redux";
import {
    followUserCreator,
    setCurrentPageCreator,
    setTotalUsersCreator,
    setUsersCreator, toggleIsFetchingCreator,
    unfollowUserCreator
} from "../../redux/usersReducers";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Loader from "../utils/loaders/Loader";

//Контейнерная компонента

class UsersContainerComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPaginationChangeHandler = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
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
    isFetching: state.usersPage.isFetching
});

export default connect(
    mapStateToProps,
    {
        followUser: followUserCreator,
        unfollowUser: unfollowUserCreator,
        setUsers: setUsersCreator,
        setCurrentPage: setCurrentPageCreator,
        setTotalUsersCount: setTotalUsersCreator,
        toggleIsFetching: toggleIsFetchingCreator
    })(UsersContainerComponent);