import {connect} from "react-redux";
import {
    followUserCreator,
    setCurrentPageCreator,
    setTotalUsersCreator,
    setUsersCreator,
    unfollowUserCreator
} from "../../redux/usersReducers";
import Users from './Users';

//Контейнерная компонента

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    followUser: (userId) => dispatch(followUserCreator(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserCreator(userId)),
    setUsers: (users) => dispatch(setUsersCreator(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageCreator(currentPage)),
    setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCreator(usersCount))
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);