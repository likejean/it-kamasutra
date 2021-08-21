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
import classes from "./Users.module.css";
import Users from "./Users";
import {Row, Space, Spin} from "antd";

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
            return(
                <div className={classes.usersLoader}>
                    <Row justify="center" align="center">
                        <Spin size="large" />
                    </Row>
                    <Row justify="center" align="center">
                        <span>Please, wait. Loading...</span>
                    </Row>
                </div>
            )
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

const mapDispatchToProps = (dispatch) => ({
    followUser: (userId) => dispatch(followUserCreator(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserCreator(userId)),
    setUsers: (users) => dispatch(setUsersCreator(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageCreator(currentPage)),
    setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCreator(usersCount)),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingCreator(isFetching))
});


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);